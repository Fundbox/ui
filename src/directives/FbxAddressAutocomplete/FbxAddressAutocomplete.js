import { map, reduce } from 'lodash'

function parseMapsResponseReducer(model, { types, short_name: shortName, long_name: longName }) {
  if (types.includes('street_number')) {
    model.streetNumber = shortName
  } else if (types.includes('route')) {
    model.street = shortName
  } else if (types.includes('locality')) {
    model.city = longName || shortName
  } else if (types.includes('neighborhood') && !model.city) {
    model.city = longName || shortName
  } else if (types.includes('sublocality') && !model.city) {
    model.city = longName || shortName
  } else if (types.includes('administrative_area_level_3') && !model.city) {
    model.city = longName || shortName
  } else if (types.includes('administrative_area_level_1')) {
    model.state = shortName
  } else if (types.includes('country')) {
    model.country = longName
  } else if (types.includes('postal_code')) {
    model.zipCode = shortName
  }
  return model
}

export default {
  inserted(el, { value: active }, vnode) {
    if (active === false) {
      return
    }

    if (google && google.maps) {
      const mapsAutocomplete = new google.maps.places.Autocomplete(el, { types: ['address'] })

      // Listen to the google's `place_changed` event
      mapsAutocomplete.addListener('place_changed', () => {
        const selection = mapsAutocomplete.getPlace()

        // Use our common `parseMapsResponseReducer` to return a normalized response
        const addressData = reduce(selection.address_components, parseMapsResponseReducer, {})

        // Emit the data to the parent element
        vnode.context.$emit('addressDataChanged', addressData)
      })

      // Support selecting address with the enter key
      google.maps.event.addDomListener(el, 'keydown', function(event) {
        if (event.keyCode === 13) {
          // Prevent form submit on address selection
          event.preventDefault()

          // Send the input value to the parent
          vnode.context.$emit('input', el.value)
        }
      })

      // Support selecting address with mouse clicks
      el.autocompleteMousedownHandler = function(event) {
        let target
        if (document.getElementsByClassName('pac-container').length > 0) {
          // Traverse the DOM and check if autocomplete item was clicked
          for (target = event.target; target && target !== this; target = target.parentNode) {
            if (target.matches && target.matches('.pac-item')) {
              // Extract and format the text from the autocomplete item
              const textArr = map(target.children, child => child.textContent)
              textArr.shift()
              const value = textArr.join(', ')

              // Send the clicked item value to the parent
              vnode.context.$emit('input', value)
              break
            }
          }
        }
      }
      document.body.addEventListener('mousedown', el.autocompleteMousedownHandler)
    }
  },
  unbind(el) {
    document.body.removeEventListener('mousedown', el.autocompleteMousedownHandler)
  }
}
