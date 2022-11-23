import Phaser from 'phaser';

export default class GroupObj extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    scene.add.existing(this);
  }

  addObj(obj: any) {
    this.add(obj);
  }
}
