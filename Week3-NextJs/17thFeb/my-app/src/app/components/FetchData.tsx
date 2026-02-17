'use client'

import { useState , useEffect } from "react";

export default function FetchData(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((DATA) => setData(DATA))
    }, []);

    return(
        <div>
            <h1>Data from API:</h1>
            {data ? (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}