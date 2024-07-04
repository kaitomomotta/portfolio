import { Link } from "@nextui-org/react"
import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className="text-center py-10">
      <h1 className="py-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Abel Roinsard
      </h1>
      Welcome to my website !

      <div className="pt-20">
          <Link isExternal href="/portfolio/cv.pdf">Download my CV</Link>
      </div>
    </div>
  )
}

export default App
