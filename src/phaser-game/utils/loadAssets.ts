import Phaser from 'phaser';

const loadCharacters = (scene: Phaser.Scene) => {
  scene.load.atlas(
    'player',
    '/assets/characters/astronaut.png',
    '/assets/characters/astronaut.json',
  );
  scene.load.atlas(
    'robot',
    '/assets/characters/robot.png',
    '/assets/characters/robot.json',
  );
};

export const loadImages = (scene: Phaser.Scene) => {
  scene.load.image('doors', '/assets/images/door.png');
  scene.load.image('computer', '/assets/images/computer.png');
  scene.load.image('table', '/assets/images/tables.png');
  scene.load.image('chair', '/assets/images/chair.png');
  scene.load.image('exclamation', '/assets/images/exclamation.png');
  scene.load.image('formBkg', '/assets/images/formbckg.jpg');
  scene.load.image('town', '/assets/images/town.jpg');
};

export const loadRoomTiles = (scene: Phaser.Scene) => {
  scene.load.image('roomSet', '/assets/tileset/4 BigSet.png');
};

export const loadProjectImages = (scene: Phaser.Scene) => {
  scene.load.image('backendFinal', '/images/backendFinal.JPEG');
  scene.load.image('brewery', '/images/brewery.JPEG');
  scene.load.image('number', '/images/numberGuesser.JPEG');
  scene.load.image('weather', '/images/reactWeather.JPEG');
  scene.load.image('media', '/images/socialMedia.JPEG');
  scene.load.image('directory', '/images/studentDirectory.JPEG');
};

export default loadCharacters;