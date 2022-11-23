import Phaser from 'phaser';
import loadCharacters, { loadImages } from '../utils/loadAssets';
import Data from '../../module';
import Player from '../game-objects/Player';
import GroupObj from '../game-objects/Group';

export default class RoomThree extends Phaser.Scene {
  player!: Player;

  constructor() {
    super('Room3');
  }

  preload() {
    loadCharacters(this);
    loadImages(this);
  }

  create({ startingX, startingY }: Data) {
    console.log(startingX, startingY);
    const group = new GroupObj(this);
    const door = this.add.image(200, 400, 'doors');
    door.setScale(4);
    group.addObj(door);
    this.player = new Player(this, 400, 400);

    this.physics.add.overlap(
      this.player,
      door,
      () => {
        this.scene.start('MainGame', { startingX, startingY });
      },
      undefined,
      this,
    );
  }

  update() {
    this.player.movePlayer();
  }
}
