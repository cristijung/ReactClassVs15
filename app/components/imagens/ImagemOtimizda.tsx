"use client";

import Image from "next/image";
import sw2 from "@/assets/sw2.png";
import { useState } from "react";

export default function ImagemOtimizada() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    console.log(isLightboxOpen);
  };

  return (
    <>
      <div className="relative h-screen w-screen flex items-center justify-center">
        <div
          className="max-w-4xl w-full rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={openLightbox}
        >
          <div className="relative h-64 w-full md:h-96 lg:h-auto">
            <Image
              src={sw2}
              alt="Sw"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              quality={75}
              className="object-center"
              aria-describedby="caption"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6">
              <p id="caption" className="text-white text-lg font-medium">
                Star Wars Episódio IV - Uma Nova Esperança - Trilogia inicial
              </p>
            </div>
          </div>
        </div>
        {/* ------Aqui vai o lightbox ------ */}
        {isLightboxOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl w-full rounded-lg overflow-hidden">
              <Image
                src={sw2}
                alt="sw"
                width={1000}
                height={1000}
                layout="responsive"
                objectFit="contain"
                quality={100}
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-50"
                onClick={closeLightbox}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
