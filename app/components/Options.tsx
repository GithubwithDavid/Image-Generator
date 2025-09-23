"use client";

import React from "react";
import { useState } from "react";
import StyleOptions from "./style_options";
import AccessoriesOptions from "./accessories_options";
import { StaticImageData } from "next/image";

const Options = ({
  onSelectImage,
  onSelectHair,
  OnSelectEye,
  OnSelectEars,
  OnSelectMouth,
  OnSelectLeg,
  OnSelectAccessories,
  OnSelectNeck,
  OnSelectNose,
}: {
  onSelectImage: (image: StaticImageData) => void;
  onSelectHair: (Hair: StaticImageData) => void;
  OnSelectEye: (Eye: StaticImageData) => void;
  OnSelectEars: (Ears: StaticImageData) => void;
  OnSelectMouth: (Mouth: StaticImageData) => void;
  OnSelectLeg: (Leg: StaticImageData) => void;
  OnSelectAccessories: (Accessories: StaticImageData) => void;
  OnSelectNeck: (Neck: StaticImageData) => void;
  OnSelectNose: (Nose: StaticImageData) => void;
}) => {
  const [styleText, setAText] = useState("Hair");
  const optionsMap: Record<string, string[]> = {
    Hair: ["Default", "Short", "Bang", "Curls", "Elegant", "Fancy"],
    Ears: ["Default", "Backwards", "Forwards"],
    Eyes: ["Default", "Angry", "Naughty", "Panda", "Smart", "Star"],
    Mouth: ["Default", "Astonished", "Eating", "Laugh", "Tongue"],
    Neck: ["Default", "Thick", "Backwards", "Forwards"],
    Leg: [
      "Default",
      "Cookie",
      "Bubble Tea",
      "Game Console",
      "Backwards",
      "Forwards",
    ],
    Accessories: ["Earings", "Flower", "Glasses", "Headphone"],
    Background: ["Blue", "Dark Blue", "Green", "Grey", "Red", "Yellow"],
  };

  const [styles, setStyles] = useState<string[]>(optionsMap["Hair"]);
  const [active, setActive] = useState<number>(0);
  const ButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    const Text = e.currentTarget.innerText;
    setAText(Text);
    setStyles(optionsMap[Text] || []);
  };
  const accessories = Object.keys(optionsMap);

  return (
    <div className={`w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8`}>
      <div className="space-y-6">
        <div>
          <h2 className={`text-lg sm:text-xl font-semibold text-[#24509d] mb-3`}>
            ACCESSORIZE THE ALPACA&apos;S
          </h2>
          <AccessoriesOptions
            accessories={accessories}
            activeIndex={active}
            onSelect={(e, index) => {
              ButtonClicked(e);
              setActive(index);
            }}
          />
        </div>
        <div>
          <h2 className={`text-lg sm:text-xl font-semibold text-[#24509d] mb-3`}>STYLE</h2>
          <StyleOptions
            styles={styles}
            styleText={styleText}
            onSelectColor={onSelectImage}
            onSelectHair={onSelectHair}
            OnSelectEye={OnSelectEye}
            OnSelectEars={OnSelectEars}
            OnSelectMouth={OnSelectMouth}
            OnSelectLeg={OnSelectLeg}
            OnSelectAccessories={OnSelectAccessories}
            OnSelectNeck={OnSelectNeck}
            OnSelectNose={OnSelectNose}
          />
        </div>
      </div>
    </div>
  );
};

export default Options;
