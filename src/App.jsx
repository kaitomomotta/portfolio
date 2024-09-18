import {Card, CardBody, Divider, Link} from "@nextui-org/react"
import React from "react"

import Socials from "./components/Socials"

import './index.css'

import hero from './assets/hero.jpg'
import Projects from "./components/Projects.jsx";
import Art from "./components/Art.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
  return (
    <>
      <div>
        <header>
          <div className="hero gradient-to-black">
            <img src={hero}/>
          </div>
        </header>
        <div className="py-5 "><h1
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Abel Roinsard
        </h1>
          <div className="text-center text-gray-600">アベル</div>
        </div>
        <div className="text-center font-bold leading-loose">🇫🇷 EPITA 2026 promotion<br/>🇯🇵 芝浦⼯業⼤学 exchange student
        </div>
      </div>


      <div className="pt-10 pb-10 flex justify-center">
        <Card isHoverable='true'>
          <CardBody className="flex justify-center">
            <Link isExternal href="/portfolio/cv.pdf" showAnchorIcon className="text-center">View my CV</Link>
          </CardBody>
        </Card>
      </div>

      <Divider/>

      <div className="pt-10 pb-10 justify-center">
        <Socials/>
      </div>

      <Divider/>

      <div className="pt-10 pb-10 justify-center">
        <AboutMe/>
      </div>

      <Divider/>

      <div className="pt-10 pb-10 justify-center">
        <Art/>
      </div>

      <Divider/>

      <div className="pt-10 pb-10 justify-center">
        <Projects/>
      </div>

      <Footer/>
    </>
  )
}

export default App
