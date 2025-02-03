//hook personalizado
import { useState, useCallback } from "react";

//este é o hook personalizado
function useEditartexto(
  textoInicial: string
): [string, (newText: string) => void, boolean, () => void, () => void] {
    
    const [texto, setTexto] = useState<string>(textoInicial);
    const [editar, setEditar] = useState<boolean>(false);

    const mudarTexto = useCallback((newText: string) => {
        setTexto(newText);
    }, []);

    const iniciarEdicao = useCallback(() => {
      setEditar(true);
    }, []);

    const finalizarEdicao = useCallback(() => {
      setEditar(false);
    }, []);

    return [texto, mudarTexto, editar, iniciarEdicao, finalizarEdicao];
}

export default useEditartexto;
