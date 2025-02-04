"use client";
import Image from "next/image";
import StarWarsUm from "../../public/sw.jpg";
import StarWarsDois from "../../public/sw2.png";
import ImagemOtimizada from "../components/imagens/ImagemOtimizda";

export default function Gallery() {
  return (
    <>
     <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">As melhores imagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={StarWarsUm}
            alt="sw"
            layout="fill"
            objectFit="cover"
            className="transition duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Star Wars</p>
            </div>
          </div>
        </div>
        <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={StarWarsDois}
            alt="sw"
            layout="fill"
            objectFit="cover"
            className="transition duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500">
             <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Star Wars</p>
            </div>
          </div>
        </div>
        {/* <h2>{Content.tituloNovidade}</h2>
        <p>{Content.textoNovidade}</p> */}       
      </div>
    </section>
    <hr/>
    <ImagemOtimizada/>
    </>
  );
}
