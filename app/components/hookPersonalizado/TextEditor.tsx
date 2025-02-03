"use client";
import useEditartexto from "./hooks";

export default function TextEditor() {
  const [texto, mudarTexto, editar, iniciarEdicao, finalizarEdicao] =
    useEditartexto("Um texto Inicial");

  return (
    <>
      <div>
        {editar ? (
          <input
            type="text"
            value={texto}
            onChange={(e) => mudarTexto(e.target.value)}
            onBlur={finalizarEdicao}
          />
        ) : (
          <span onClick={iniciarEdicao}>{texto}</span>
        )}
      </div>
    </>
  );
}
