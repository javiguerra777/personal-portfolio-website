import Phaser from 'phaser';
import { screenCenterX, screenCenterY } from '../utils/constants';

class Instructions extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    const toHome = () => {
      this.scene.switch('HomeScene');
    };
    this.add
      .text(
        screenCenterX(width),
        screenCenterY(height),
        'Return To Main',
      )
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', toHome);
  }
}

export default Instructions;
