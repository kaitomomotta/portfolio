import { Card, CardBody, Divider, Link, Image } from "@nextui-org/react"
import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import Socials from "./components/Socials"

import './index.css'

import hero from './assets/hero.jpg'

function App() {
  return (
    <>
      <div>
        <header>
          <div className="hero gradient-to-black">
            <img src={hero} />
          </div>
        </header>
        <div className="py-5 "><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Abel Roinsard
        </h1>
        <div className="text-center text-gray-600">アベル</div>
        </div>
        <div className="text-center font-bold leading-loose">🇫🇷 EPITA 2026 promotion<br/>🇯🇵 芝浦⼯業⼤学 exchange student</div>
      </div>


      <div className="pt-10 pb-10 flex justify-center">
        <Card isHoverable='true'>
          <CardBody className="flex justify-center">
            <Link isExternal href="/portfolio/cv.pdf" showAnchorIcon className="text-center">View my CV</Link>
          </CardBody>
        </Card>
      </div>

      <Divider />

      <div className="pt-5"/>

      <Socials />
    </>
  )
}

export default App
