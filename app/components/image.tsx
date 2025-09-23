"use client";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import ImageName from "../store/Image-store";

const ImageC = () => {
  const {
    selectedImage,
    hairStyle,
    eyeStyle,
    earsStyle,
    mouthStyle,
    legStyle,
    accessoriesStyle,
    neckStyle,
    noseStyle,
  } = useContext(ImageName);
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
        {/* Background - lowest layer */}
        <Image
          src={selectedImage}
          alt="Background"
          fill
          className="object-cover rounded-lg z-0"
          priority
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 384px, 400px"
          suppressHydrationWarning
        />

        {/* Hair - above background */}
        <Image
          src={hairStyle}
          alt="Hair"
          fill
          className="object-contain z-20"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Eyes - above hair */}
        <Image
          src={eyeStyle}
          alt="Eyes"
          fill
          className="object-contain z-100"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Ears */}
        <Image
          src={earsStyle}
          alt="Ears"
          fill
          className="object-contain z-0"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Neck */}
        <Image
          src={neckStyle}
          alt="Neck"
          fill
          className="object-contain z-0"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Leg */}
        <Image
          src={legStyle}
          alt="Leg"
          fill
          className="object-contain z-0"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Mouth */}
        <Image
          src={mouthStyle}
          alt="Mouth"
          fill
          className="object-contain z-110"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Nose */}
        <Image
          src={noseStyle}
          alt="Nose"
          fill
          className="object-contain z-10"
          priority
          sizes="100%"
          suppressHydrationWarning
        />

        {/* Accessories - on very top */}
        <Image
          src={accessoriesStyle}
          alt="Accessories"
          fill
          className="object-contain z-40"
          priority
          sizes="100%"
          suppressHydrationWarning
        />
      </div>
    </div>
  );
};

export default ImageC;
