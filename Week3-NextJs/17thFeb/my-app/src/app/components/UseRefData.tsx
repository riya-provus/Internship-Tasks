'use client'

import { useState , useRef } from "react";

export default function UseRefData(){
    const renderCount = useRef<number>(0)
    const [count, setCount] = useState(0)

    renderCount.current++;

    return (
        <div>
        <p>State Count: {count}</p>
        <p>Render Count: {renderCount.current}</p>

        <button onClick={() => setCount(count + 1)}>
            Increment State
        </button>
        </div>
    );
}