import Phaser from 'phaser';

class TextBox extends Phaser.GameObjects.DOMElement {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    element: string,
    style: string,
    text: string,
  ) {
    super(scene, x, y, element, style, text);
    this.setDepth(4);
    this.scene.add.existing(this);
  }

  setScrollFactorZero() {
    this.scrollFactorX = 0;
    this.scrollFactorY = 0;
  }
}

export default TextBox;
