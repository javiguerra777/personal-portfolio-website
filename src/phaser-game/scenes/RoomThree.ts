import Phaser from 'phaser';
import loadCharacters, {
  loadImages,
  loadRoomTiles,
} from '../utils/loadAssets';
import Data from '../module';
import Player from '../game-objects/Player';
import GroupObj from '../game-objects/Group';
import physicsWorld from '../utils/physicsWorld';
import followPlayer, { cameraWorld } from '../utils/camera';
import { SCALE_WORLD } from '../utils/constants';
import TextBox from '../game-objects/DialogueBox';

export default class RoomThree extends Phaser.Scene {
  player!: Player;

  text!: TextBox;

  constructor() {
    super('Room3');
  }

  preload() {
    loadCharacters(this);
    loadImages(this);
    loadRoomTiles(this);
    this.load.tilemapTiledJSON('room3', '/assets/map/room.json');
  }

  create({ startingX, startingY }: Data) {
    const map = this.make.tilemap({ key: 'room3' });
    physicsWorld(this, map);
    const tileSet = map.addTilesetImage('inside', 'roomSet');
    cameraWorld(this.cameras, map);
    const floor = map.createLayer('Floor', tileSet, 0, 0);
    const backgroundTile = map.createLayer(
      'Background',
      tileSet,
      0,
      0,
    );
    floor.setScale(SCALE_WORLD);
    backgroundTile.setScale(SCALE_WORLD);
    const group = new GroupObj(this);
    const door = this.add.image(
      85,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 10,
      'doors',
    );
    door.setScale(5);
    group.addObj(door);
    this.player = new Player(
      this,
      400,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 20,
    );
    // text in scene
    this.text = new TextBox(
      this,
      500,
      200,
      'div',
      'color: red; background: white; border: double black 5px; padding: 10px; font-size: 3em;',
      'Still in progress, come back later to see the final version',
    );
    // physics in scene
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
    followPlayer(this.cameras, this.player);
    this.player.movePlayer();
  }
}
