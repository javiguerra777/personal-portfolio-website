import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeX, changeY } from '../store/gameSlice';
import "../styles/canvas.css"

const CanvasComponent = () => {
  const dispatch = useDispatch();
  const canvas = useRef(null);
  const [speed, setSpeed] = useState(1);
  const { player, canvasDetails } = useSelector((state) => state.game);
  
  const draw = (context) => {
  context.clearRect(0, 0, canvasDetails.width,canvasDetails.height);
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(player.x, player.y, 50, 50);

  // context.fillStyle = "rgba(0, 0, 200, 0.5)";
  // context.fillRect(30, 30, 50, 50);
  };
  useEffect(() => {
    // const keyDownHandler = (event) => {
      // if (event.key === "x") {
      //   dispatch(changeY(-5));
      // } }

    const keyPressHandler = (event) => {
      console.log(event)
      if (event.key === "d") {
        dispatch(changeX((5 * speed)))
      } 
      if (event.key === "a") {
        dispatch(changeX((-5 * speed)))

      }
      if (event.key === "w") {
        dispatch(changeY((-5 * speed)))
      }
      if (event.key === "s") {
        dispatch(changeY((5 * speed)))
      }
    }
    const keyUpHandler = (event) => {
      if (event.key === "s") {
        setSpeed(1);
      }
    }
    const canvasObj = canvas.current;
    const context = canvasObj.getContext("2d");
    draw(context);
    // document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keypress', keyPressHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      // document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keypress', keyPressHandler);
      document.addEventListener('keyup', keyUpHandler);
    }
  });
  return (
    <canvas ref={canvas} width={canvasDetails.width} height={canvasDetails.height}></canvas>
  )
}

export default CanvasComponent;