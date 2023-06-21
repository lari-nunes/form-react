import { useState, useEffect } from "react";
import "./UseEffect.css"


const UseEffect = () => {

    const[count, setCount] = useState(0)

    // O useEffect é um gancho (hook) 
    // do React que permite realizar efeitos colaterais em componentes funcionais.


    useEffect(() => {
        console.log("O efeito foi executado")
        // aqui ele atualiza o título da página 
        document.title = "Contagem: ${count}";

        return () => {
            console.log("O efeito foi limpo")
        }
    }, [count])

    const aumentar = () => {
        setCount(count + 1)
    }

    const diminuir  = () => {
        setCount(count - 1)
    }

    return (
        <div className="container">
            <p>Contagem: {count}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    );
}   

export default UseEffect;