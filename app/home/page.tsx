import StateCounter from "../components/state/StateCounter";

export default function Home() {
    return(
        <>
        <section className="container">
            <h1>Seja Bem-vindo(a)</h1>
            <hr/>
            <StateCounter/>
        </section>
        </>
    );
}