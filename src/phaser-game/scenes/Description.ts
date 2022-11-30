import Phaser from 'phaser';
import TextBox from '../game-objects/DialogueBox';
import { loadImages } from '../utils/loadAssets';

export default class Description extends Phaser.Scene {
  text!: TextBox;

  element!: Phaser.GameObjects.DOMElement;

  constructor() {
    super('Description');
  }

  preload() {
    loadImages(this);
    this.load.html('description', './assets/html/description.html');
  }

  create(data: any) {
    this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');
    const { width } = this.sys.canvas;
    this.element = this.add
      .dom(width / 2, 50)
      .createFromCache('description');
    const information = this.element.getChildByID('information');
    const exitButton = this.element.getChildByID('exit-btn');
    const link = this.element.getChildByID('link');
    link.addEventListener('click', () => {
      window.open(data.link, '_blank');
    });
    information.innerHTML = data.description;
    exitButton.addEventListener('click', () => {
      this.scene.stop().resume('Room2');
    });
  }

  update() {
    const { width } = this.sys.canvas;
    this.element.setX(width / 2);
  }
}
