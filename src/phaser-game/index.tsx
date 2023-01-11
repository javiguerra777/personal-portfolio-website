import React, { useEffect } from 'react';
import Phaser from 'phaser';
import config from './config';
import { GameWrapper } from '../styles';

function PortfolioGame() {
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

export default PortfolioGame;
