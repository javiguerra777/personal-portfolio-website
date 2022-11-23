import React, { useEffect } from 'react';
import Phaser from 'phaser';
import GameWrapper from './styles';
import config from './phaser-game/config';

function App() {
  useEffect(() => {
    const phaserGame = new Phaser.Game(config);
    return () => {
      phaserGame.destroy(true);
    };
  }, []);
  return (
    <GameWrapper>
      <div id="main-game" />
    </GameWrapper>
  );
}

export default App;
