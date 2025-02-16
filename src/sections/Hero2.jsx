import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import AtomModel from '../components/Electron'
import BlackHole from '../components/BlackHole'
import { OrbitControls } from '@react-three/drei'

const Hero2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    // Convert mouse coordinates to normalized device coordinates (-1 to +1)
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    })
  }

  return (
    <div className="w-full h-[500px] mt-64" id='home' onMouseMove={handleMouseMove}>
      <Canvas>
        <AtomModel mousePosition={mousePosition} />
        {/* <BlackHole mousePosition={mousePosition} /> */}
        <OrbitControls enableZoom={false} />
      </Canvas>
     
    </div>
  )
}

export default Hero2