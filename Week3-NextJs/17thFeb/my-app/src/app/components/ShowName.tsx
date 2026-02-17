'use client'

import { useName } from "./context/NameContext"

export default function ShowName() {
  const { name, setName } = useName()

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName("Aisha")}>
        Change Name
      </button>
    </div>
  )
}
