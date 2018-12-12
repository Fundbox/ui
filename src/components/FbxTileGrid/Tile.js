function defineReadOnlyProperties(context, props) {
  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      Object.defineProperty(context, prop, { value: props[prop], writable: false })
    }
  }
}


export class Tile {
  constructor(name, imgNormal, imgHover, imgDisabled, hoverColor = '#2c3e50', isEnabled = true, isConnected = false) {
    defineReadOnlyProperties(this, { name, imgNormal, imgHover, imgDisabled, hoverColor })
    this.isEnabled = isEnabled
    this.isConnected = isConnected
  }
}
