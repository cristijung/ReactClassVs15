import TextEditor from "../components/hookPersonalizado/TextEditor";
import StateCounter from "../components/state/StateCounter";
import MeuComponente from "../components/stateEffect/MeuComponente";
import Content from "../../public/data/texto.json";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-sky-50 min-h-screen flex flex-col justify-center items-center py-12">
      <section className="container mx-auto bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Seja Bem-vindo(a)
        </h1>
        <hr className="my-4 border-gray-300" />

        <div className="mb-6"> 
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            {Content.tituloNovidade}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {Content.textoNovidade}
          </p>
        </div>
        <hr className="my-4 border-gray-300" />

        <div className="mb-6"> 
          <StateCounter />
        </div>
        <hr className="my-4 border-gray-300" />

        <div className="mb-6"> 
          <MeuComponente />
        </div>
        <hr className="my-4 border-gray-300" />

        <div className="mb-6"> 
          <TextEditor />
        </div>
      </section>
    </div>
  );
}