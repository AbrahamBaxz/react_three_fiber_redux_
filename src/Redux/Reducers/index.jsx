import Color from './Color';
import Speed from './Speed';
import Textures from './Textures';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  color: Color,
  speed: Speed,
  texture: Textures,
});

export default allReducers;
