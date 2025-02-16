import React from 'react'
import Navbar from './sections/Navbar'
import Hero2 from './sections/Hero2'
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
import BlackHoleScene from './components/BlackHole'
import Scene from './components/Scene'

const App = () => {
 
  return (
    <main className='max-w-7xl mx-auto' >
      <Navbar />
      <Hero2 />
      <About />
      <Projects />
      <Experience/>
      <Contact/>
      <Footer/>
      {/* <Scene/> */}
      {/* <BlackHoleScene/> */}
      {/* <div className="min-w-screen h-[600px]">
      <ParticleCloudScene/>
      </div> */}
    
   
      
      
    </main>

  )
}

export default App
