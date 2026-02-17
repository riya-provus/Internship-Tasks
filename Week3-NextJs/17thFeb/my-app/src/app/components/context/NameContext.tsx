'use client'

import { createContext, useContext, useState } from "react"

const NameContext = createContext<any>(null)

export function NameProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Riya")

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  )
}

export function useName() {
  return useContext(NameContext)
}