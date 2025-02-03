//usando useEffect
"use client";

import { useState, useEffect } from "react";

export default function MeuComponente() {
  const [contador, setContador] = useState<number>(0);
  const [mensagem, setMensagem] = useState<string>("");

  useEffect(() => {
    console.log("Componente montado!");
    return () => {
      console.log("Componente desmontado!");
    };
  }, []); //é um array de dependência onde informa q o useEffect será executado um vez

  useEffect(() => {
    console.log(`Contador atualizado: ${contador}`);
    document.title = `Contador: ${contador}`;

    if (contador > 5) {
      setMensagem("Contador maior do que 5!!");
    } else {
      setMensagem("");
    }
  }, [contador]);

  const incrementarContador = () => {
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">
        Exemplo de utilização de useEffect
      </h1>
      <div className="mb-4">
        <p className="text-lg">Contador: {contador}</p>
        <button
          onClick={incrementarContador}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Incrementar
        </button>
        {mensagem && (
          <p
            className={`text-lg ${
              mensagem.startsWith("Contador maior")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}
