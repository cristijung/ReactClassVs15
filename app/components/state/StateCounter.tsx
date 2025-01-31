"use client";

import { useState } from "react";

export default function StateCounter() {
  const [count, setCount] = useState<number>(0);
  
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-2xl font-bold mb-4">Contador: {count}</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={decrementCount}
          >
            Decrementar
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={incrementCount}
          >
            Incrementar
          </button>
        </div>
      </div>
    </>
  );
}
