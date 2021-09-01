const Color = (state = '#910985', action) => {
  switch (action.type) {
    case 'RED':
      return (state = 'red');

    case 'BLUE':
      return (state = 'blue');

    case 'DEF':
      return (state = action.payload);

    default:
      return state;
  }
};

export default Color;
