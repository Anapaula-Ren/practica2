import {useState} from 'react'
 
export const Contador = () => {
    //en react las funciones dentro de eventos o tigger empieza con handdle - accion
    //let counter = 0;
    const [count, setCount] = useState(0)

    const handleSumar = () => {
        setCount(count + 1)
    }

    const handleRestar = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div>
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <h1>Cantidad: {count}</h1>
        </div>
    )
}

 