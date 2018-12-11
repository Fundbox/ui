export class Tile {
  constructor(name, imgNormal, imgHover, imgDisabled, isEnabled = true, isConnected = false) {
    Object.defineProperties(this, {
      name: { get() { return name } },
      imgNormal: { get() { return imgNormal }  },
      imgHover: { get() { return imgHover } },
      imgDisabled: { get() { return imgDisabled } },
      isEnabled: { get() { return isEnabled } },
      isConnected: { get() { return isConnected } },
    })
  }
}
