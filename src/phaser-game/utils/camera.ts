import Phaser from 'phaser';
import Player from '../game-objects/Player';
import { SCALE_WORLD } from './constants';

export const cameraWorld = (
  cameras: any,
  map: Phaser.Tilemaps.Tilemap,
) => {
  cameras.main.setBounds(
    0,
    0,
    map.widthInPixels * SCALE_WORLD,
    map.heightInPixels * SCALE_WORLD,
  );
};

const followPlayer = (cameras: any, player: Player) => {
  cameras.main.startFollow(player);
};

export default followPlayer;
