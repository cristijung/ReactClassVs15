"use client";

import ServerComponent from "../components/suspense/ServerComponente";

export default function Hidratation() {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-100 to-emerald-100 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-teal-700 mb-8 tracking-wide">
            Trabalhando com Hidratação
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hidratação no React: A Magia por Trás da Interatividade A hidratação
            no React é um processo crucial que permite que aplicações web sejam
            interativas e responsivas, oferecendo uma experiência do usuário
            fluida e otimizada.
          </p>
        </div>
      </div>
      <ServerComponent />
    </>
  );
}
