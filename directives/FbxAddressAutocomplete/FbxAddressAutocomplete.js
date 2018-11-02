import Vue from "vue";
import map from "lodash/map";
import reduce from "lodash/reduce";

function parseMapsResponseReducer(model, { types, short_name: shortName, long_name: longName }) {
  if (types.includes("street_number")) {
    model.streetNumber = shortName;
  } else if (types.includes("route")) {
    model.street = shortName;
  } else if (types.includes("locality")) {
    model.city = longName || shortName;
  } else if (types.includes("neighborhood") && !model.city) {
    model.city = longName || shortName;
  } else if (types.includes("sublocality") && !model.city) {
    model.city = longName || shortName;
  } else if (types.includes("administrative_area_level_3") && !model.city) {
    model.city = longName || shortName;
  } else if (types.includes("administrative_area_level_1")) {
    model.state = shortName;
  } else if (types.includes("country")) {
    model.country = longName;
  } else if (types.includes("postal_code")) {
    model.zipCode = shortName;
  }
  return model;
}

export default Vue.directive("fbxAddressAutocomplete", {
  inserted(el, { value: active }, vnode) {
    if (active === false) {
      return;
    }
    if (google && google.maps) {
      const mapsAutocomplete = new google.maps.places.Autocomplete(el, { types: ["address"] });
      mapsAutocomplete.addListener("place_changed", () => {
        const selection = mapsAutocomplete.getPlace();
        const addressData = reduce(selection.address_components, parseMapsResponseReducer, {});
        vnode.context.$emit("addressChange", addressData);
      });

      // Support selecting address with the enter key
      google.maps.event.addDomListener(el, "keydown", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          vnode.context.$emit("addressSelected", el.value);
        }
      });

      // Support selecting address with mouse clicks
      el.autocompleteMousedownHandler = function(event) {
        let target;
        if (document.getElementsByClassName("pac-container").length > 0) {
          for (target=event.target; target && target !== this; target = target.parentNode) {
            if (target.matches && target.matches(".pac-item")) {
              const textArr = map(target.children, child => child.textContent);
              textArr.shift();
              const value = textArr.join(", ");
              vnode.context.$emit("addressSelected", value);
              break;
            }
          }
        }
      };
      document.addEventListener("mousedown", el.autocompleteMousedownHandler);
    }
  },
  unbind(el) {
    document.removeEventListener("mousedown", el.autocompleteMousedownHandler);
  }
});
