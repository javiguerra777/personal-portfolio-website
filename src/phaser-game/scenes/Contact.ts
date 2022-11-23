import Phaser from 'phaser';
import TextBox from '../game-objects/DialogueBox';
import { loadImages } from '../utils/loadAssets';

export default class Contact extends Phaser.Scene {
  count = 0;

  element!: any;

  message = '';

  style = '';

  text!: TextBox;

  background!: Phaser.GameObjects.Image;

  constructor() {
    super('ContactMe');
  }

  preload() {
    this.load.html('form', '/assets/html/form.html');
    loadImages(this);
  }

  create({ roomX, roomY, startingX, startingY }: any) {
    const { width, height } = this.sys.canvas;
    this.background = this.add.image(width, height, 'formBkg');
    const returnBtn = new TextBox(
      this,
      0,
      0,
      'button',
      'margin-left: 3em; margin-top: 1.5em; background-color: red; color: white; border: solid 1px white;',
      'X',
    );
    returnBtn.addListener('click').on('click', () => {
      this.scene.start('Room1', {
        roomX,
        roomY,
        startingX,
        startingY,
      });
    });
    this.element = this.add
      .dom(width / 2, height / 2)
      .createFromCache('form');
    this.element.setPerspective(800);
    this.element
      .addListener('submit')
      .on('submit', async (e: any) => {
        e.preventDefault();
        try {
          const inputName = this.element.getChildByID('text');
          const inputEmail = this.element.getChildByID('email');
          const inputMessage = this.element.getChildByID('message');
          inputName.value = '';
          inputEmail.value = '';
          inputMessage.value = '';
          this.message = 'Successfully sent email!!';
          this.style =
            'background-color: whitesmoke; color: black; border: solid lime 5px; padding: 10px; border-radius: 0.5em; width: 200px; text-align:center;';
        } catch (err: any) {
          this.message = err.message;
          this.style =
            'background-color: whitesmoke; color: black; border: solid red 5px; padding: 10px; border-radius: 0.5em; width: 200px; text-align: center;';
        }
      });
  }

  update() {
    const { width, height } = this.sys.canvas;
    this.element.x = width / 2;
    this.element.y = height / 2;
    this.text?.setX(width / 2);
    this.background.width = width;
    this.background.height = height;
    if (this.message && this.count === 0) {
      console.log('msg');
      this.text = new TextBox(
        this,
        width / 2,
        100,
        'div',
        this.style,
        this.message,
      );
      this.count += 1;
    }
  }
}
