"use client";

import { useState } from "react";

export default function ClientComponente() {
  const [count, setCount] = useState(0);

  const clique = () => {
    setCount(count + 1);
  };

  return (
    <>
      <section className="container">
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-auto"> 
            <h3 className="text-xl font-semibold text-gray-800 mb-4"> 
                Este é um Client Component
            </h3>
            <p className="text-gray-600 mb-4"> 
            Contador: {count}
            </p>
            <button 
                onClick={clique}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            >
                Incrementar
            </button>
        </div>
      </section>
    </>
  );
}
