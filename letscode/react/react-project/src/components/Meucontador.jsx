import { useState } from "react"

export default function MeuContador() {

    const [contador, setContador] = useState(0)


    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        setContador(contador - 1)
    }
    return (
        <div>
            <h1>Meu contador</h1>
            <h3>{contador}</h3>
            <button onClick={incrementar}>incrementar</button>
            <button onClick={decrementar}>decrementar</button>
            {contador > 9 ? <h1>clica mto</h1> : null}
        </div>
    )
}