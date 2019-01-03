export class Tile {
  constructor(name, imgNormal, imgHover, imgDisabled, hoverColor = '#2c3e50', isEnabled = true, isConnected = false, metadata = {}) {
    this.name = name
    this.imgNormal = imgNormal
    this.imgHover = imgHover
    this.imgDisabled = imgDisabled
    this.hoverColor = hoverColor
    this.isEnabled = isEnabled
    this.isConnected = isConnected
    this.metadata = metadata
  }
}
