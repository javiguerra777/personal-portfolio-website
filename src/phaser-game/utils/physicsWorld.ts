import Phaser from 'phaser';
import { SCALE_WORLD } from './constants';

const physicsWorld = (scene: Phaser.Scene, map: any) => {
  scene.physics.world.setBounds(
    0,
    0,
    map.widthInPixels * SCALE_WORLD,
    map.heightInPixels * SCALE_WORLD,
  );
};
export default physicsWorld;
