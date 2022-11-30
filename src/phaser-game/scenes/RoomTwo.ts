import Phaser from 'phaser';
import loadCharacters, {
  loadImages,
  loadProjectImages,
  loadRoomTiles,
} from '../utils/loadAssets';
import Data from '../../module';
import Player from '../game-objects/Player';
import GroupObj from '../game-objects/Group';
import physicsWorld from '../utils/physicsWorld';
import followPlayer, { cameraWorld } from '../utils/camera';
import { SCALE_WORLD } from '../utils/constants';
import projects from '../json/projects.json';
import TextBox from '../game-objects/DialogueBox';
import NPC from '../game-objects/Npc';

export default class RoomTwo extends Phaser.Scene {
  player!: Player;

  text!: TextBox;

  npc!: NPC;

  activeNpc!: any;

  count = 0;

  dialogueCount = 0;

  exclamation!: Phaser.GameObjects.Image;

  isInDialogue = false;

  constructor() {
    super('Room2');
  }

  preload() {
    loadCharacters(this);
    loadImages(this);
    loadProjectImages(this);
    loadRoomTiles(this);
    this.load.tilemapTiledJSON('room2', '/assets/map/room.json');
  }

  create({ startingX, startingY }: Data) {
    const map = this.make.tilemap({ key: 'room2' });
    physicsWorld(this, map);
    const tileSet = map.addTilesetImage('inside', 'roomSet');
    const floor = map.createLayer('Floor', tileSet, 0, 0);
    const backgroundTile = map.createLayer(
      'Background',
      tileSet,
      0,
      0,
    );
    floor.setScale(SCALE_WORLD);
    backgroundTile.setScale(SCALE_WORLD);
    cameraWorld(this.cameras, map);
    const group = new GroupObj(this);
    const npcGroup = new GroupObj(this);
    const door = this.add.image(
      85,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 10,
      'doors',
    );
    door.setScale(5);
    group.addObj(door);
    // images
    let projectX = 300;
    projects.forEach((project) => {
      const image: any = this.add
        .image(projectX, 400, project.name)
        .setScale(0.1);
      image.name = project.name;
      image.link = project.link;
      image.description = project.description;
      image
        .setInteractive({ cursor: 'pointer' })
        .on('pointerover', () => {
          image.setTint(185273);
        })
        .on('pointerout', () => {
          image.clearTint();
        })
        .on('pointerdown', () => {
          if (!this.isInDialogue) {
            this.scene.pause().launch('Description', image);
          }
        });
      projectX += 250;
    });
    // npc
    this.npc = new NPC(
      this,
      500,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 35,
      'robot',
      'Click on the pictures to learn about the projects',
    );
    npcGroup.add(this.npc);
    // player
    this.player = new Player(
      this,
      400,
      (map.heightInPixels * SCALE_WORLD) / 1.3 + 20,
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
    this.physics.add.overlap(
      this.player,
      this.npc,
      () => {
        this.activeNpc = this.npc;
        this.player.ableToSpeak = true;
        this.count += 1;
      },
      undefined,
      this,
    );
  }

  update() {
    followPlayer(this.cameras, this.player);
    if (!this.player.body.embedded) {
      this.player.ableToSpeak = false;
      this.count = 0;
      this.activeNpc = null;
      this.exclamation?.destroy();
    }
    this.player.movePlayer();
    this.npc.playAnims(this.player);
    if (this.player.ableToSpeak && this.player.spaceIsDown()) {
      if (this.dialogueCount === 0 && !this.player.isMoving) {
        this.text = new TextBox(
          this,
          this.activeNpc.x,
          this.activeNpc.y - 250,
          'div',
          'background-color: #fffafa; color: black; width: auto; max-width: 300px; border: solid 5px #faebd7; border-radius: 5px; padding: 3px; font: Arial; margin-top: 75px; text-align: center;',
          this.activeNpc.dialogue,
        );
        this.player.disableKeys();
        this.isInDialogue = true;
        this.dialogueCount += 1;
      } else {
        this.player.enableKeys();
        this.text?.destroy();
        this.isInDialogue = false;
        this.dialogueCount = 0;
      }
    }
    if (this.player.ableToSpeak && this.count <= 1) {
      this.exclamation = this.physics.add
        .image(
          this.activeNpc?.x,
          this.activeNpc.y - 65,
          'exclamation',
        )
        .setScale(0.02)
        .setDepth(1);
    }
  }
}
