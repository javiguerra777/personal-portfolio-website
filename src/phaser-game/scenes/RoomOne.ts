import Phaser from 'phaser';
import Player from '../game-objects/Player';
import loadCharacters, {
  loadImages,
  loadRoomTiles,
} from '../utils/loadAssets';
import followPlayer, { cameraWorld } from '../utils/camera';
import GroupObj from '../game-objects/Group';
import TextBox from '../game-objects/DialogueBox';
import { RoomData } from '../module';
import physicsWorld from '../utils/physicsWorld';
import { SCALE_WORLD } from '../utils/constants';
import distanceBetweenObjs from '../utils/physics';
import NPCS from '../json/libraryNpc.json';
import NPC from '../game-objects/Npc';

export default class RoomOne extends Phaser.Scene {
  player!: Player;

  text!: TextBox;

  startingX!: number;

  startingY!: number;

  computer!: Phaser.GameObjects.Image;

  npcGroup!: GroupObj;

  activeNpc!: any;

  count = 0;

  exclamation!: Phaser.GameObjects.Image;

  dialogueCount = 0;

  dialogue!: TextBox;

  constructor() {
    super('Room1');
  }

  preload() {
    loadCharacters(this);
    loadImages(this);
    loadRoomTiles(this);
    this.load.tilemapTiledJSON('room', '/assets/map/roomone.json');
  }

  create({ startingX, startingY, roomX, roomY }: RoomData) {
    const map = this.make.tilemap({ key: 'room' });
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
    const foreGroundTile = map.createLayer(
      'Foreground',
      tileSet,
      0,
      0,
    );
    backgroundTile.setScale(SCALE_WORLD);
    floor.setScale(SCALE_WORLD);
    foreGroundTile.setScale(SCALE_WORLD);
    this.startingX = startingX;
    this.startingY = startingY;
    // group object
    const collidableObjects = this.physics.add.group({
      immovable: true,
    });
    // npcs group
    this.npcGroup = new GroupObj(this);
    NPCS.forEach((npc) => {
      const theNpc = new NPC(
        this,
        npc.x,
        (map.heightInPixels * SCALE_WORLD) / 1.3 + 30,
        'robot',
        npc.dialogue,
      );
      this.npcGroup.add(theNpc);
    });
    this.player = new Player(
      this,
      roomX || 300,
      roomY || (map.heightInPixels * SCALE_WORLD) / 1.3 + 20,
    );
    const door = this.add.image(
      83,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 10,
      'doors',
    );
    const chair = this.add.image(
      1300,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 30,
      'chair',
    );
    const table = this.add.image(
      1360,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 40,
      'table',
    );
    this.computer = this.add.image(
      1360,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 3,
      'computer',
    );
    door.setScale(5);
    table.setScale(5);
    chair.setScale(4);
    this.computer.setScale(4);
    collidableObjects.add(door);
    collidableObjects.add(table);
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
    const playerCollided = () => {
      this.player.setVelocity(0);
    };
    this.physics.add.collider(
      this.player,
      table,
      playerCollided,
      undefined,
      this,
    );
    this.physics.add.overlap(
      this.player,
      this.npcGroup,
      (player, npc: any) => {
        this.player.ableToSpeak = true;
        this.activeNpc = npc;
        this.count += 1;
      },
      undefined,
      this,
    );
  }

  update() {
    const { width } = this.sys.canvas;
    followPlayer(this.cameras, this.player);
    this.player.movePlayer();
    if (!this.player.body.embedded) {
      this.activeNpc = null;
      this.player.ableToSpeak = false;
      this.count = 0;
      this.exclamation?.destroy();
    }
    if (this.player.ableToSpeak && this.count === 1) {
      console.log('hi');
      this.exclamation = this.add.image(
        this.activeNpc.x,
        this.activeNpc.y - 65,
        'exclamation',
      );
      this.exclamation.setScale(0.02);
    }
    if (this.player.ableToSpeak && this.player.spaceIsDown()) {
      if (this.dialogueCount === 0 && !this.player.isMoving) {
        this.dialogue = new TextBox(
          this,
          this.activeNpc.x + 100,
          this.activeNpc.y - 200,
          'div',
          'background-color: #fffafa; color: black; width: auto; max-width: 300px; border: solid 5px #faebd7; border-radius: 5px; padding: 3px; font: Arial; margin-top: 75px; text-align: center;',
          this.activeNpc.dialogue,
        );
        this.player.disableKeys();
        this.dialogueCount += 1;
      } else {
        this.player.enableKeys();
        this.dialogue?.destroy();
        this.dialogueCount = 0;
      }
    }
    this.npcGroup.children.entries.forEach((npc: any) => {
      npc.playAnims(this.player);
    });
    this.player.canSendEmail = distanceBetweenObjs(
      this.player,
      this.computer,
    );
    if (this.player.canSendEmail) {
      if (!this.text?.active) {
        this.text = new TextBox(
          this,
          width / 2,
          0,
          'div',
          'background-color: #fffafa; color: black; width: auto; max-width: 300px; border: solid 5px #faebd7; border-radius: 5px; padding: 3px; font: Arial; margin-top: 75px; text-align: center;',
          'Press the SpaceBar to open contact form',
        );
        this.text.setScrollFactorZero();
      }
      if (this.player.spaceIsDown()) {
        this.scene.start('ContactMe', {
          roomX: this.player.x,
          roomY: this.player.y,
          startingX: this.startingX,
          startingY: this.startingY,
        });
      }
    } else if (!this.player.canSendEmail) {
      this.text?.destroy();
    }
  }
}
