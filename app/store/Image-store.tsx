import { createContext } from "react";
import blue from "../components/Imgs/backgrounds/blue50.png";
import { StaticImageData } from "next/image";
import Defaulthair from "../components/Imgs/hair/default.png";
import Defaulteye from "../components/Imgs/eyes/default.png";
import Defaultears from "../components/Imgs/ears/default.png";
import DefaultMouth from "../components/Imgs/mouth/default.png";
import DefaultLeg from "../components/Imgs/leg/default.png";
import DefaultAccessory from "../components/Imgs/accessories/earings.png";
import DefaultNeck from '../components/Imgs/neck/default.png'
import DefaultNose from '../components/Imgs/nose.png'

interface ImageContextType {
  selectedImage: StaticImageData;
  hairStyle: StaticImageData;
  eyeStyle: StaticImageData;
  earsStyle: StaticImageData;
  mouthStyle: StaticImageData;
  legStyle: StaticImageData;
  accessoriesStyle: StaticImageData;
  neckStyle: StaticImageData;
  noseStyle: StaticImageData;
}

const ImageName = createContext<ImageContextType>({
  selectedImage: blue,
  hairStyle: Defaulthair,
  eyeStyle: Defaulteye,
  earsStyle: Defaultears,
  mouthStyle: DefaultMouth,
  legStyle: DefaultLeg,
  accessoriesStyle: DefaultAccessory,
  neckStyle: DefaultNeck,
  noseStyle: DefaultNose
});

export default ImageName;
