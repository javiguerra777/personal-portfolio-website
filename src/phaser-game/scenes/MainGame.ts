import Phaser from 'phaser';
import Player from '../game-objects/Player';
import TextBox from '../game-objects/DialogueBox';
import npcData from '../npc/npc.json';
import NPC from '../game-objects/Npc';
import GroupObj from '../game-objects/Group';
import loadCharacters, { loadImages } from '../utils/loadAssets';
import { SCALE_WORLD } from '../utils/constants';
import followPlayer, { cameraWorld } from '../utils/camera';
import Data from '../../module';

class MainGame extends Phaser.Scene {
  player!: Player;

  exclamation!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  count = 0;

  dialogueCount = 0;

  dialogue!: TextBox;

  speaking = false;

  npcGroup!: GroupObj;

  activeNpc!: any;

  doors!: GroupObj;

  activeDoor = 0;

  message!: TextBox;

  background!: Phaser.GameObjects.Image;

  constructor() {
    super('MainGame');
  }

  preload() {
    loadCharacters(this);
    loadImages(this);
    this.load.image('tiles', '/assets/tileset/sTiles.png');
    this.load.tilemapTiledJSON('map', '/assets/map/map.json');
  }

  create({ startingX, startingY }: Data) {
    const { width, height } = this.sys.canvas;
    this.background = this.add.image(width, height, 'town');
    const map = this.make.tilemap({ key: 'map' });
    this.physics.world.setBounds(
      0,
      0,
      map.widthInPixels * SCALE_WORLD,
      map.heightInPixels * SCALE_WORLD,
    );
    cameraWorld(this.cameras, map);
    const tileSet = map.addTilesetImage('tilesOne', 'tiles');
    const floor = map.createLayer('Floor', tileSet, 0, 0);
    const house = map.createLayer('Houses', tileSet, 0, 0);
    floor.setScale(SCALE_WORLD);
    house.setScale(SCALE_WORLD);
    this.doors = new GroupObj(this);
    let id = 1;
    map.getObjectLayer('Doors').objects.forEach((door: any) => {
      // Add new doors to our sprite group
      const theDoor: any = this.add.image(
        door.x * SCALE_WORLD + 30 || 0,
        door.y * SCALE_WORLD - 53 || 0,
        'doors',
      );
      theDoor.id = id;
      theDoor.setScale(4.5);
      this.doors.addObj(theDoor);
      id += 1;
    });
    this.npcGroup = new GroupObj(this);
    npcData.forEach((anNpc) => {
      const npc = new NPC(
        this,
        anNpc.x,
        map.heightInPixels * SCALE_WORLD - 75,
        'robot',
        anNpc.dialogue,
      );
      this.npcGroup.addObj(npc);
    });
    // player
    this.player = new Player(
      this,
      startingX || 50,
      startingY || map.heightInPixels * SCALE_WORLD - 80,
    );
    // physics in scene
    this.physics.add.overlap(
      this.player,
      this.npcGroup,
      (thePlayer, theNpc) => {
        this.activeNpc = theNpc;
        this.count += 1;
        this.player.ableToSpeak = true;
      },
      undefined,
      this,
    );
    this.physics.add.overlap(
      this.player,
      this.doors,
      (player, door: any) => {
        this.player.canEnterRoom = true;
        this.activeDoor = door.id;
        this.count += 1;
      },
      undefined,
      this,
    );
  }

  update() {
    const { width } = this.sys.game.canvas;
    this.player.movePlayer();
    followPlayer(this.cameras, this.player);
    this.npcGroup?.children?.entries?.forEach((npc: any) => {
      npc.playAnims(this.player);
    });
    this.dialogue?.setX(width / 2);
    if (!this.player.body.embedded) {
      this.player.ableToSpeak = false;
      this.player.canEnterRoom = false;
      this.count = 0;
      this.activeNpc = null;
      this.exclamation?.destroy();
      this.message?.destroy();
    }
    if (this.player.canEnterRoom) {
      if (this.count < 2) {
        this.message = new TextBox(
          this,
          width / 2,
          0,
          'div',
          'background-color: #fffafa; color: black; width: auto; max-width: 300px; border: solid 5px #faebd7; border-radius: 5px; padding: 3px; font: Arial; margin-top: 75px; text-align: center;',
          'Press Up to enter the room',
        );
      }
      if (this.player.upIsDown()) {
        this.scene.start(`Room${this.activeDoor}`, {
          startingX: this.player.x,
          startingY: this.player.y,
        });
      }
    }
    if (this.player.ableToSpeak && this.player.spaceIsDown()) {
      if (this.dialogueCount === 0 && !this.player.isMoving) {
        this.dialogue = new TextBox(
          this,
          width / 2,
          0,
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

export default MainGame;
