'use client'

import { useState } from "react";
export default function ArrayUseState() {
    const [fruits, setFruits] = useState<string[]>(["Apple", "Banana", "Orange"]);

    const addFruit = () => {
        setFruits([...fruits, "Grapes"]);
    };

    return (
        <div>
            <h1>Fruits:</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={addFruit}>Add Grapes</button>
        </div>
    );
}