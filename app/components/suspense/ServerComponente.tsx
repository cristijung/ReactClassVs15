import { Suspense } from "react";
import ClientComponente from "./ClientComponente";

export default function ServerComponent() {
  const messageForServer =
    "Esta é uma mensagem e um texto que vai ser renderizado no SRV";

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 min-h-screen flex flex-col items-center justify-center py-8">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Este é um Server Component
          </h1>
          <h3 className="text-2xl font-semibold text-gray-700 text-center">
            {messageForServer}
          </h3>
        </div>
      </div>

      <Suspense fallback={<p>Carregando o client component ...</p>}>
        <ClientComponente />
      </Suspense>
    </>
  );
}
