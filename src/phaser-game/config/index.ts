import Phaser from 'phaser';
// import HomeScene from './phaser-game/scenes/HomeScene';
// import Instructions from './phaser-game/scenes/Instructions';
import MainGame from '../scenes/MainGame';
import RoomOne from '../scenes/RoomOne';
import RoomTwo from '../scenes/RoomTwo';
import RoomThree from '../scenes/RoomThree';
import Contact from '../scenes/Contact';
import Description from '../scenes/Description';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%',
  },
  dom: {
    createContainer: true,
  },
  background: '#ffffff',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  title: 'My Portfolio',
  parent: 'main-game',
  scene: [
    RoomTwo,
    RoomThree,
    Contact,
    Description,
    MainGame,
    RoomOne,
  ],
};
export default config;
