"use client";
import React from "react";
import { useContext } from "react";
import ImageName from "../store/Image-store";

interface ButtonsProps {
  onRandomize: () => void;
}

const Buttons = ({ onRandomize }: ButtonsProps) => {
  const { 
    selectedImage, 
    hairStyle, 
    eyeStyle, 
    earsStyle, 
    mouthStyle, 
    legStyle, 
    accessoriesStyle,
    neckStyle,
    noseStyle
  } = useContext(ImageName);

  const downloadAlpaca = async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 4000;
    
    canvas.width = size;
    canvas.height = size;
    
    if (!ctx) return;
    
    const images = [
      { src: selectedImage.src, zIndex: 1 },
      { src: legStyle.src, zIndex: 2 },
      { src: neckStyle.src, zIndex: 3 },
      { src: earsStyle.src, zIndex: 4 },
      { src: noseStyle.src, zIndex: 5 },
      { src: hairStyle.src, zIndex: 6 },
      { src: eyeStyle.src, zIndex: 7 },
      { src: mouthStyle.src, zIndex: 8 },
      { src: accessoriesStyle.src, zIndex: 9 }
    ];
    
    try {
      const loadedImages = await Promise.all(
        images.map(img => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            image.crossOrigin = 'anonymous';
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = img.src;
          });
        })
      );
      
      loadedImages
        .sort((a, b) => images.find(img => img.src === a.src)?.zIndex || 0 - (images.find(img => img.src === b.src)?.zIndex || 0))
        .forEach((img) => {
          ctx.drawImage(img, 0, 0, size, size);
        });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `alpaca-ultra-hd-${size}x${size}-${Date.now()}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }, 'image/png', 1.0);
      
    } catch (error) {
      console.error('Error creating alpaca image:', error);
      const link = document.createElement('a');
      link.href = selectedImage.src;
      link.download = `alpaca-background-${Date.now()}.png`;
      link.click();
    }
  };

  return (
    <div className="mt-8 lg:mt-10 flex gap-3 sm:gap-4 lg:gap-6 flex-col sm:flex-row items-center ml-6">
      <button
        onClick={onRandomize}
        className="font-[600] rounded-md cursor-pointer py-3 px-6 bg-purple-500 hover:bg-purple-600 text-white transition-colors select-none shadow-sm min-w-[140px]"
      >
        🎲 Random
      </button>
      <button
        onClick={downloadAlpaca}
        className="font-[600] rounded-md cursor-pointer py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white transition-colors select-none shadow-sm min-w-[140px]"
      >
        🌄 Download
      </button>
    </div>
  );
};

export default Buttons;