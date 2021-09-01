export const changeToBlue = () => {
  return {
    type: 'BLUE',
  };
};

export const changeToRed = () => {
  return {
    type: 'RED',
  };
};

export const customColorChange = (color) => {
  return {
    type: 'DEF',
    payload: color,
  };
};

export const changeTexture = (texture) => {
  return {
    type: texture, //ex. AC, ERROR
  };
};

export const changeToStop = () => {
  return {
    type: 'STOP',
  };
};

export const changeToMove = () => {
  return {
    type: 'MOVE',
  };
};
