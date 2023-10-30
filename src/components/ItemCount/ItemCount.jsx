import { useState } from "react"


const ItemCount = ({stock, onAdd }) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < stock){
            setCount(prev => prev + 1)
        }
    }
    
    const decrement = () =>{
        if (count > 1){
            setCount(count => prev - 1)
        }
    }

    return(
        <div>
            <h1>{count}</h1>
                <h4> {count} </h4>
                <button onClick={decrement} > decrementar </button>
                <button onClick={() => onAdd (count)} disabled ={!stock}> </button>
                <button onClick={increment}> incrementar </button>
                
        
        </div>
    )
}

export default ItemCount