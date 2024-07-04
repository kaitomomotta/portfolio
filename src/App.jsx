import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/portfolio" element={<h1>Hello World</h1>}/>
        <Route path="/portfolio/me" element={<h1>Me</h1>}/>
      </Routes>
      <h1 className="text-3xl font-bold underline">
        main website
      </h1>
    </NextUIProvider>
  )
}

export default App
