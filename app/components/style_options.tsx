"use client";
import React from "react";
import { useState } from "react";
import { backgrounds, hair, eye, ear, mouths, leg, Accessories, neck} from "./urls";
import { StaticImageData } from "next/image";

type StyleOptionsProps = {
  styles: string[];
  styleText: string;
  onSelectColor: (image: StaticImageData) => void;
  onSelectHair: (Hair: StaticImageData) => void;
  OnSelectEye: (Eye: StaticImageData) => void;
  OnSelectEars: (Ears: StaticImageData) => void;
  OnSelectMouth: (Mouth: StaticImageData) => void;
  OnSelectLeg: (Leg: StaticImageData) => void;
  OnSelectAccessories: (Accessories: StaticImageData) => void;
  OnSelectNeck: (Neck: StaticImageData) => void;
  OnSelectNose: (Nose: StaticImageData) => void;
};

const StyleOptions = ({
  styles,
  styleText,
  onSelectColor,
  onSelectHair,
  OnSelectEye,
  OnSelectEars,
  OnSelectMouth,
  OnSelectLeg,
  OnSelectAccessories,
  OnSelectNeck,
}: StyleOptionsProps) => {
  const [selectedStates, setSelectedStates] = useState<Record<string, number>>(
    {}
  );
  const active2 = selectedStates[styleText] || 0;
  const colors: Record<string, StaticImageData> = {
    Blue: backgrounds.blue,
    Green: backgrounds.green,
    Yellow: backgrounds.yellow,
    Grey: backgrounds.grey,
    "Dark Blue": backgrounds.darkblue,
    Red: backgrounds.red,
  };

  const hairs: Record<string, StaticImageData> = {
    Default: hair.Default,
    Curls: hair.Curls,
    Short: hair.Short,
    Bang: hair.Bang,
    Elegant: hair.Elegant,
    Fancy: hair.Fancy,
  };

  const eyes: Record<string, StaticImageData> = {
    Default: eye.DefaultEye,
    Angry: eye.Angry,
    Naughty: eye.Naughty,
    Panda: eye.Panda,
    Smart: eye.Smart,
    Star: eye.Star,
  };

  const ears: Record<string, StaticImageData> = {
    Default: ear.DefaultEar,
    Backwards: ear.EarBackward,
    Forwards: ear.EarForward,
  };

  const mouth: Record<string, StaticImageData> = {
    Default: mouths.DefaultMouth,
    Astonished: mouths.Astonished,
    Eating: mouths.Eating,
    Laugh: mouths.Laugh,
    Tongue: mouths.Tongue,
  };

  const legs: Record<string, StaticImageData> = {
    Default: leg.DefaultLeg,
    Cookie: leg.Cookie,
    "Bubble Tea": leg.BubbleTea,
    "Game Console": leg.GameConsole,
    Backwards: leg.LegBackward,
    Forwards: leg.LegForward
  }

  const Accessory: Record<string, StaticImageData> = {
    Earings: Accessories.Earings,
    Flower: Accessories.Flower,
    Glasses: Accessories.Glasses,
    Headphone: Accessories.Headphone
  }

  const necks: Record<string, StaticImageData> = {
    Default: neck.DefaultNeck,
    Thick: neck.Thick,
    Forwards: neck.NeckForward,
    Backwards: neck.NeckBackward
  }
  const selectColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const Text = e.currentTarget.innerHTML;
    if (styleText === "Background") {
      onSelectColor(colors[Text as keyof typeof colors]);
    } else if (styleText === "Hair") {
      onSelectHair(hairs[Text as keyof typeof hairs]);
    } else if (styleText === "Eyes") {
      OnSelectEye(eyes[Text as keyof typeof eyes]);
    } else if (styleText === "Ears") {
      OnSelectEars(ears[Text as keyof typeof ears]);
    } else if (styleText === "Mouth") {
      OnSelectMouth(mouth[Text as keyof typeof mouth]);
    } else if(styleText === 'Leg'){
      OnSelectLeg(legs[Text as keyof typeof legs])
    } else if(styleText === 'Accessories'){
      OnSelectAccessories(Accessory[Text as keyof typeof Accessory])
    } else if(styleText === 'Neck'){
      OnSelectNeck(necks[Text as keyof typeof necks])
    }
  };

  return (
    <div className={`flex flex-row gap-3 flex-wrap mt-4`}>
      {styles.map((item, index2) => (
        <button
          key={index2}
          onClick={(e) => {
            selectColor(e);
            setSelectedStates((prev) => ({ ...prev, [styleText]: index2 }));
          }}
          className={`py-[12px] px-[32px] rounded-full cursor-pointer select-none border-3 text-[#24509d] border-[#24509d] font-bold ${
            active2 == index2 ? "bg-[#24509d] text-white border-[#24509d]" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default StyleOptions;
