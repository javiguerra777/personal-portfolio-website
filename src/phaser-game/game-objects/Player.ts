import Phaser from 'phaser';
import { PLAYER_MOVEMENT } from '../utils/constants';

class Player extends Phaser.Physics.Arcade.Sprite {
  keys!: Phaser.Types.Input.Keyboard.CursorKeys;

  direction = '';

  isMoving = false;

  ableToSpeak = false;

  canEnterRoom = false;

  canSendEmail = false;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    this.keys = this.scene.input.keyboard.createCursorKeys();
    // player sprite movement
    this.anims.create({
      key: 'standing',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'standing',
        start: 1,
        end: 1,
        zeroPad: 4,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'run',
        start: 1,
        end: 9,
        zeroPad: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
    this.setDepth(2);
    this.setScale(0.8);
    this.scene.add.existing(this);
  }

  movePlayer() {
    let speed = 1;
    if (this.keys.shift.isDown) {
      speed = 1.5;
    }
    if (this.keys.right.isDown) {
      this.setVelocityX(PLAYER_MOVEMENT * speed);
      this.anims.play('run', true);
      this.direction = 'right';
      this.flipX = false;
      this.isMoving = true;
      return this.isMoving;
    }
    if (this.keys.left.isDown) {
      this.setVelocityX(-PLAYER_MOVEMENT * speed);
      this.anims.play('run', true);
      this.direction = 'left';
      this.flipX = true;
      this.isMoving = true;
      return this.isMoving;
    }
    this.setVelocityX(0);
    // this.body.immovable = true;
    this.anims.play('standing', true);
    this.isMoving = false;
    return this.isMoving;
  }

  disableKeys() {
    this.keys.left.enabled = false;
    this.keys.right.enabled = false;
    this.keys.shift.enabled = false;
    this.keys.up.enabled = false;
  }

  enableKeys() {
    this.keys.left.enabled = true;
    this.keys.right.enabled = true;
    this.keys.shift.enabled = true;
    this.keys.up.enabled = true;
  }

  spaceIsDown() {
    if (Phaser.Input.Keyboard.JustDown(this.keys.space)) {
      return true;
    }
    return false;
  }

  upIsDown() {
    if (Phaser.Input.Keyboard.JustDown(this.keys.up)) {
      return true;
    }
    return false;
  }
}

export default Player;
