import './App.scss';

// import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainCanvas from './components/MainCanvas';
import { ChromePicker } from 'react-color';
import {
  changeToRed,
  changeToBlue,
  customColorChange,
  changeToMove,
  changeToStop,
  changeTexture,
} from './Redux/Actions';

const App = () => {
  const color = useSelector((state) => state.color);
  const speed = useSelector((state) => state.speed);
  const texture = useSelector((state) => state.texture);

  const dispatch = useDispatch();

  const handleChangeToBlue = () => {
    dispatch(changeToBlue());
  };
  const handleChangeToRed = () => {
    dispatch(changeToRed());
  };
  const handleMove = () => {
    dispatch(changeToMove());
  };
  const handleStop = () => {
    dispatch(changeToStop());
  };
  const handleChangeTexture = (e) => {
    dispatch(changeTexture(e.target.value));
  };
  const handleColorPicker = (e) => {
    //setColors(e.hex);
    dispatch(customColorChange(e.hex));
  };

  return (
    <>
      <MainCanvas colorNow={color} speedNow={speed} textureNow={texture} />

      <button onClick={handleChangeToBlue}>BLUE</button>
      <button onClick={handleChangeToRed}>RED</button>
      {/* <button onClick={handleCustomColorChange}>Apply</button> */}

      <button onClick={handleStop}>STOP</button>
      <button onClick={handleMove}>MOVE</button>

      <ChromePicker
        // color={colors !== null && colors}
        color={color}
        onChange={(e) => handleColorPicker(e)}
        disableAlpha
        renderers={false}
      />

      <select onChange={handleChangeTexture}>
        <option value="AC">Minimal</option>
        <option value="ERROR">Rune</option>
        <option value="STONE">Stone</option>
        <option value="METAL">Metal</option>
      </select>

      {/* {colors !== null && <React.Fragment>Hex: {colors}</React.Fragment>} */}
      {/* <img src={download} alt="loading" /> */}
    </>
  );
};

export default App;
