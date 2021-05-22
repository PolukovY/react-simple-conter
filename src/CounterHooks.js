import React, {useState, useContext} from 'react'
import {ThemeContext} from "./App";

export default function CounterHooks({initCounter}) {
    const [count, setCount] = useState(initCounter)
    const style = useContext(ThemeContext)
    console.log("Render CounterHooks")

    return (
        <div>
            <button style={style} onClick={() => setCount(prevState =>  prevState -1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount( prevState => prevState + 1)}>+</button>
        </div>
    );
}
