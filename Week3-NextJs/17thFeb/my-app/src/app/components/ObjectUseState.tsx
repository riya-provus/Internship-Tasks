'use client'

import { useState } from "react";

export default function ObjectUseState() {
  const [user, setUser] = useState({
    name: "Riya",
    age: 21,
    isOnline: true,
  });

  const handleNameChange = () => {
    setUser({ ...user, name: "Riya Jadhav" });
  };

  const handleAgeChange = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <h1>Name : {user.name}</h1>
      <h1>Age : {user.age}</h1>
      <h1>IsOnline : {user.isOnline ? "Yes" : "No"}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleAgeChange}>Increment Age</button>
    </div>
  );
}