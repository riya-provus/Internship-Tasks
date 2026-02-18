"use client";

import { useEffect, useState } from "react";
import { ApiResponse,Item } from "./models/items";


export default function Home() {
  const [name, setName] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  /* ---------------- READ (GET) ---------------- */
  const fetchItems = async () => {
    const res= await fetch("/api/add",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    });

    const result :ApiResponse<Item[]> = await res.json();

    setItems(result.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  /* ---------------- CREATE (POST) ---------------- */
  const addItem = async () => {
    const res=await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const result :ApiResponse<Item[]> = await res.json();


    if(!result.success){
      console.log("eerroor");
      alert("Failed to frtch");
      return;      
    }
    setName("");
    fetchItems();
  };

  /* ---------------- UPDATE (PUT) ---------------- */
  const updateItem = async () => {
    if (editId === null) return;

    await fetch("/api/add", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editId, name }),
    });

    setEditId(null);
    setName("");
    fetchItems();
  };

  /* ---------------- DELETE (DELETE) ---------------- */
  const deleteItem = async (id: number) => {
    await fetch("/api/add", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchItems();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD Example</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {editId === null ? (
        <button onClick={addItem}>Add</button>
      ) : (
        <button onClick={updateItem}>Update</button>
      )}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}

            <button
              onClick={() => {
                setEditId(item.id);
                setName(item.name);
              }}
            >
              Edit
            </button>

            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
