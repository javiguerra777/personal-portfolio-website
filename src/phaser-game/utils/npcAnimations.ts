import Phaser from 'phaser';

const createNpcAnimations = (
  game: Phaser.Scene,
  animation: string,
  character: string,
  startFrame: number,
  endFrame: number,
) => {
  game.anims.create({
    key: animation,
    frames: game.anims.generateFrameNumbers(character, {
      start: startFrame,
      end: endFrame,
    }),
    frameRate: 10,
    repeat: -1,
  });
};

export default createNpcAnimations;
