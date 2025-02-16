import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail, Float, Sphere, Stars, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, Glitch, Noise, Vignette } from '@react-three/postprocessing'

export default function AtomModel({ mousePosition }) {
  const modelRef = useRef()
  const backgroundRef = useRef()

  useFrame(() => {
    if (modelRef.current) {
      // Update model rotation based on mouse position
      modelRef.current.rotation.y = mousePosition.x * Math.PI
      modelRef.current.rotation.x = mousePosition.y * Math.PI
    }
    if (backgroundRef.current) {
      // Update background rotation based on mouse position
      backgroundRef.current.rotation.y = mousePosition.x * Math.PI
      backgroundRef.current.rotation.x = mousePosition.y * Math.PI
    }
  })

  return (
    <>
      <color attach="background" args={['black']} />
      <group ref={backgroundRef}>
        <Stars 
          saturation={0} 
          count={1000} 
          speed={1} 
          fade
        />
      </group>
      <group ref={modelRef}>
        <Float 
          speed={4} 
          rotationIntensity={1} 
          floatIntensity={2}
        >
          <Atom />
        </Float>
      </group>
      <OrbitControls enableZoom={false} />
      <EffectComposer>
        <Bloom 
          mipmapBlur 
          luminanceThreshold={0.5} 
          radius={0.9}
          intensity={1.5}
        />
        <Glitch delay={[1.5, 3.5]} />
        <Noise opacity={0.2} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  )
}

function Atom(props) {
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron 
        position={[0, 0, 0.5]} 
        rotation={[0, 0, Math.PI / 3]} 
        speed={6.5} 
      />
      <Electron 
        position={[0, 0, 0.5]} 
        rotation={[0, 0, -Math.PI / 3]} 
        speed={7} 
      />
      {/* Center Sphere (Nucleus) */}
      <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial 
          color={new THREE.Color(0.6, 0.5, 2)} 
          toneMapped={false} 
        />
      </Sphere>
    </group>
  )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    // Create that distinctive React logo orbit pattern
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    )
  })

  return (
    <group {...props}>
      <Trail 
        local
        width={5}
        length={10}
        color={new THREE.Color(0.2, 0.1, 1)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial 
            color={new THREE.Color(1, 0.1, 1)}
            toneMapped={false}
          />
        </mesh>
      </Trail>
    </group>
  )
}