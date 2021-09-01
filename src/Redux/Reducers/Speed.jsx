const Speed = (state = 0.0, action) => {
  switch (action.type) {
    case 'STOP':
      return (state = 0.0);

    case 'MOVE':
      return (state = 0.01);
    default:
      return state;
  }
};

export default Speed;
