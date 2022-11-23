import Phaser from 'phaser';

export default class NPC extends Phaser.Physics.Arcade.Sprite {
  dialogue = '';

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    dialogue: string,
  ) {
    super(scene, x, y, texture);
    this.dialogue = dialogue;
    this.setScale(2);
    this.anims.create({
      key: 'npcStanding',
      frames: this.anims.generateFrameNames(texture, {
        prefix: 'standing',
        start: 1,
        end: 6,
        zeroPad: 4,
      }),
      repeat: -1,
      frameRate: 12,
    });
    this.scene.add.existing(this);
  }

  playAnims(player: any) {
    this.anims.play('npcStanding', true);
    this.flipX = player.x < this.x;
  }
}
