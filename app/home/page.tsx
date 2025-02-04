import TextEditor from "../components/hookPersonalizado/TextEditor";
import StateCounter from "../components/state/StateCounter";
import MeuComponente from "../components/stateEffect/MeuComponente";
import Content from "../../public/data/texto.json";

export default function Home() {
  return (
    <>
      <section className="container">
        <h1>Seja Bem-vindo(a)</h1>
        <hr />
        <h3>{Content.tituloNovidade}</h3>
        <p>{Content.textoNovidade}</p>
        <hr />
        <StateCounter />
        <hr />
        <MeuComponente />
        <hr />
        <br />
        <TextEditor />
      </section>
    </>
  );
}
