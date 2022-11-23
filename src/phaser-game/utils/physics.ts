import Phaser from 'phaser';
import Player from '../game-objects/Player';

const distanceBetweenObjs = (
  player: Player,
  computer: Phaser.GameObjects.Image,
) => {
  const distance = Math.abs(player.x - computer.x);
  if (distance < 100) {
    return true;
  }
  return false;
};

export default distanceBetweenObjs;
