"use client";
import React from "react";
import Image from "next/image";
import { useContext, useEffect } from "react";
import ImageName from "../store/Image-store";
import { StaticImageData } from "next/image";

// Import all possible images for preloading
import {
  backgrounds,
  hair,
  eye,
  ear,
  mouths,
  leg,
  Accessories,
  neck,
  nose,
} from "./urls";

const ImageC = () => {
  const getImageUrl = (src: string | StaticImageData): string =>
    typeof src === "string" ? src : src.src;
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

  useEffect(() => {
    const allImages = [
      // All backgrounds
      ...Object.values(backgrounds),
      // All hair styles
      ...Object.values(hair),
      // All eye styles
      ...Object.values(eye),
      // All ear styles
      ...Object.values(ear),
      // All mouth styles
      ...Object.values(mouths),
      // All leg styles
      ...Object.values(leg),
      // All accessories
      ...Object.values(Accessories),
      // All neck styles
      ...Object.values(neck),
      // All nose styles
      ...Object.values(nose),
    ];

    // Preload all images using Next.js Image preloading
    allImages.forEach((imageData) => {
      if (imageData) {
        const img = new window.Image();
        img.src = getImageUrl(imageData);
      }
    });

    // Also add preload links for better caching
    allImages.forEach((imageData) => {
      if (imageData) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = typeof imageData === "string" ? imageData : imageData.src;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // Cleanup function
    return () => {
      const links = document.querySelectorAll(
        'link[rel="preload"][as="image"]'
      );
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []); // Empty dependency array - only run once on mount

  return (
    <div className="flex items-center justify-center w-full select-none">
      <div
        className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] select-none pointer-events-none no-drag"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        {/* Background - lowest layer */}
        <Image
          src={selectedImage}
          alt="Background"
          fill
          className="object-cover rounded-lg z-0"
          priority
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
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
          loading="eager"
          quality={100}
          unoptimized={true}
          sizes="100%"
          suppressHydrationWarning
        />
      </div>
    </div>
  );
};

export default ImageC;
