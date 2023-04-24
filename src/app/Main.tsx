import React, { useEffect, useState } from 'react';
import PortfolioGame from '../phaser-game';
import MobileView from '../mobile';
import AppWrapper from '../styles';

function Main() {
  const [isLaptop, setIsLaptop] = useState(true);
  useEffect(() => {
    // console.log(window.navigator);
    setIsLaptop(false);
  }, []);
  return (
    <AppWrapper>
      {isLaptop ? <PortfolioGame /> : <MobileView />}
    </AppWrapper>
  );
}

export default Main;
