'use client'

import { useState } from "react";
export default function NameUseState() {
    const [name, setName] = useState("Riya");
    return (
        <div>
            <h1>Name : {name}</h1>
            <button onClick={() => setName("Riya Jadhav")}>Change Name</button>
        </div>
    )
}