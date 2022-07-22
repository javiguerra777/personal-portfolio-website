import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeX, changeY, changeDirection } from '../store/gameSlice';
import "../styles/canvas.css"

const CanvasComponent = () => {
  const dispatch = useDispatch();
  const canvas = useRef(null);
  // const [speed, setSpeed] = useState(1);
  const { player, canvasDetails, npc } = useSelector((state) => state.game);
  
  const draw = (context) => {
    // helps clear the player movement
  context.clearRect(0, 0, canvasDetails.width,canvasDetails.height);
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(player.x, player.y, player.height, player.width);

  context.fillStyle = "rgb(0, 0, 200)";
  context.fillRect(npc.x, npc.y, npc.width, npc.height);
  };
  useEffect(() => {
    // const keyDownHandler = (event) => {
      // if (event.key === "x") {
      //   dispatch(changeY(-5));
      // } }

    const keyPressHandler = (event) => {
      if (player.x < npc.x + player.width &&
   player.x + player.width > npc.x &&
   player.y < npc.y + npc.height &&
   player.y + player.height > player.y) {
    // collision detected!
        console.log('collision')
  }
      if (event.key === "d") {
        dispatch(changeX((5)));
        dispatch(changeDirection("right"));
      } 
      if (event.key === "a") {
        dispatch(changeX((-5)));
        dispatch(changeDirection("left"));
      }
      if (event.key === "w") {
        // y starts at 0 so to move up you input a negative number
        dispatch(changeY((-5)));
        dispatch(changeDirection("up"));
      }
      if (event.key === "s") {
        dispatch(changeY((5)));
        dispatch(changeDirection("down"));
      }
    }
    // const keyUpHandler = (event) => {
    //   if (event.key === "s") {
    //     setSpeed(1);
    //   }
    // }
    const canvasObj = canvas.current;
    const context = canvasObj.getContext("2d");
    draw(context);
    // document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keypress', keyPressHandler);
    // document.addEventListener('keyup', keyUpHandler);
    // clean up useEffect
    return () => {
      // document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keypress', keyPressHandler);
      // document.addEventListener('keyup', keyUpHandler);
    }
  });
  return (
    <canvas ref={canvas} width={canvasDetails.width} height={canvasDetails.height}></canvas>
  )
}

export default CanvasComponent;