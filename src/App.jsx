import React from 'react'
import Navbar from './sections/Navbar'
// import Hero2 from './sections/Hero2'
import About from './sections/About'
import AtomModel from './components/Electron'
import ElectronTrail from './components/ElectronTrail'
import { useEffect } from 'react'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import { Canvas } from '@react-three/fiber'
import ParticleCloudScene from './components/ParticleCloudScene'
import Experience from './sections/Experience'

import Scene from './components/Scene'
import Experience2 from './sections/Experience2'
import Hero3 from './sections/Hero3'
import BlackHole from './sections/BlackHole'
import Cursor from './components/CustomCursor'
import CustomCursor from './components/CustomCursor'


const App = () => {

  return (
    <main className='max-w-7xl mx-auto' id='main' >
      {/* <CustomCursor/> */}


      <Navbar />
      <div className="h-screen w-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory " >
        {/* <BlackHole /> */}
      </div>


      <Hero3 />
      <About />
      <Projects />
      <Experience2 />
      <Contact />
      <Footer />
 
    </main>

  )
}

export default App
