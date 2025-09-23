"use client";
import ImageC from "./components/image";
import Options from "./components/Options";
import Buttons from "./components/Buttons";
import { useState } from "react";
import blue from "./components/Imgs/backgrounds/blue50.png";
import ImageName from "./store/Image-store";
import Defaulthair from "./components/Imgs/hair/default.png";
import { StaticImageData } from "next/image";
import Defaulteye from "./components/Imgs/eyes/default.png";
import Defaultears from "./components/Imgs/ears/default.png";
import DefaultMouth from "./components/Imgs/mouth/default.png";
import DefaultLeg from "./components/Imgs/leg/default.png";
import DefaultAccessory from "./components/Imgs/accessories/earings.png";
import DefaultNeck from './components/Imgs/neck/default.png'
import DefaultNose from './components/Imgs/nose.png'
import { getRandomEars, getRandomBackground, getRandomEyes, getRandomHair, getRandomMouth, getRandomLeg, getRandomAccessories, getRandomNeck } from "./components/urls";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(blue);
  const [hairStyle, setHairStyle] = useState(Defaulthair);
  const [eyeStyle, setEyeStyle] = useState(Defaulteye);
  const [earsStyle, setEarsStyle] = useState(Defaultears);
  const [mouthStyle, setMouthStyle] = useState(DefaultMouth);
  const [legStyle, setLegStyle] = useState(DefaultLeg);
  const [accessoriesStyle, setAccessoriesStyle] = useState(DefaultAccessory);
  const [neckStyle, setNeckStyle] = useState(DefaultNeck)
  const [noseStyle, setNoseStyle] = useState(DefaultNose)


  const randomizeAlpaca = () => {
    setSelectedImage(getRandomBackground());
    setHairStyle(getRandomHair());
    setEyeStyle(getRandomEyes());
    setEarsStyle(getRandomEars());
    setMouthStyle(getRandomMouth());
    setLegStyle(getRandomLeg());
    setAccessoriesStyle(getRandomAccessories());
    setNeckStyle(getRandomNeck());
  };

  return (
    <ImageName.Provider
      value={{
        selectedImage,
        hairStyle,
        eyeStyle,
        earsStyle,
        mouthStyle,
        legStyle,
        accessoriesStyle,
        neckStyle,
        noseStyle
      }}
    >
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#001434] text-center mb-8">ALPACA GENERATOR</h1>
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start max-w-7xl mx-auto`}>
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
          <ImageC />
        </div>
        <div className="flex-1 w-full max-w-4xl">
          <Options
            onSelectImage={(image) => setSelectedImage(image)}
            onSelectHair={(Hair: StaticImageData) => setHairStyle(Hair)}
            OnSelectEye={(Eye: StaticImageData) => setEyeStyle(Eye)}
            OnSelectEars={(Ears: StaticImageData) => setEarsStyle(Ears)}
            OnSelectMouth={(Mouth: StaticImageData) => setMouthStyle(Mouth)}
            OnSelectLeg={(Leg: StaticImageData) => setLegStyle(Leg)}
            OnSelectAccessories={(Accessories: StaticImageData) =>
              setAccessoriesStyle(Accessories)
            }
            OnSelectNeck={(Neck: StaticImageData) => setNeckStyle(Neck)}
            OnSelectNose={(Nose: StaticImageData) => setNoseStyle(Nose)}
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-10">
        <Buttons onRandomize={randomizeAlpaca} />
      </div>
    </ImageName.Provider>
  );
}