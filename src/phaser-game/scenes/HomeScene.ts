import Phaser from 'phaser';
import { screenCenterX, screenCenterY } from '../utils/constants';

class HomeScene extends Phaser.Scene {
  constructor() {
    super('HomeScene');
  }

  preload() {
    this.load.image(
      'home-background',
      '/assets/background-images/home-bkg.jpg',
    );
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    const toInstructions = () => {
      this.scene.switch('Instructions');
    };
    const playMainGame = () => {
      this.scene.switch('MainGame');
    };
    this.add
      .text(screenCenterX(width), screenCenterY(height), 'Play Game')
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', playMainGame);
    this.add
      .text(
        screenCenterX(width),
        screenCenterY(height) + 50,
        'How To Play',
      )
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', toInstructions);
  }
}

export default HomeScene;
