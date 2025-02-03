import StateCounter from "../components/state/StateCounter";
import MeuComponente from "../components/stateEffect/MeuComponente";

export default function Home() {
    return(
        <>
        <section className="container">
            <h1>Seja Bem-vindo(a)</h1>
            <hr/>
            <StateCounter/>
            <hr/>
            <MeuComponente/>
        </section>
        </>
    );
}