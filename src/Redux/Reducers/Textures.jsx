import { TextureLoader } from 'three';

import NormalMapPng from '../../components/textures/NormalMap.png';
import NormalMapPng2 from '../../components/textures/NormalMap2.png';
import NormalMapPng3 from '../../components/textures/NormalMap3.png';
import NormalMapPng4 from '../../components/textures/NormalMap4.png';

const textLoader = new TextureLoader();
const NormalMap = textLoader.load(NormalMapPng); // AC
const NormalMap2 = textLoader.load(NormalMapPng2); // Error
const NormalMap3 = textLoader.load(NormalMapPng3); // STONE
const NormalMap4 = textLoader.load(NormalMapPng4); // METAL

const Textures = (state = NormalMap, action) => {
  console.log(
    '%c 😄: Textures -> action.type ',
    'font-size:16px;background-color:#d6fe86;color:black;',
    action.type
  );
  switch (action.type) {
    case 'AC':
      return (state = NormalMap);
    case 'ERROR':
      return (state = NormalMap2);
    case 'STONE':
      return (state = NormalMap3);
    case 'METAL':
      return (state = NormalMap4);
    default:
      return state;
  }
};

export default Textures;
