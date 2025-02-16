// src/components/BlackHole.js
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function BlackHole() {
    const ringRef = useRef();
    const [lightning, setLightning] = useState(false);

    // Simulate lightning flashes
    useEffect(() => {
        const interval = setInterval(() => {
            setLightning(true);
            setTimeout(() => setLightning(false), 100); // Flash duration
        }, 2000); // Flash interval
        return () => clearInterval(interval);
    }, []);

    // Rotate the ring horizontally
    useFrame(() => {
        if (ringRef.current) {
            ringRef.current.rotation.y += 0.01; // Rotate around the Y-axis
        }
    });

    return (
        <group>
            {/* Black Hole Sphere */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial 
                    color="black" 
                    emissive="black" 
                    roughness={0.5} 
                    metalness={1} // Adds glossiness
                />
            </mesh>

            {/* Flat Ring Structure */}
            <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[3, 0.1, 35, 100]} /> {/* Flat and wide ring */}
                <meshStandardMaterial 
                    color={lightning ? "#ffffff" : "#1a1a1a"} // Flash effect
                    emissive={lightning ? "#ffffff" : "#555555"} // Glow during lightning
                    roughness={0.2} // Less roughness for glossiness
                    metalness={0.9} // Metallic look
                    transparent={true}
                    opacity={0.9} // Slightly transparent
                />
            </mesh>

            {/* Background Stars */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

export default function BlackHoleScene() {
    return (
        <Canvas style={{ background: 'black', width: '100vw', height: '100vh' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={true} />
            <BlackHole />
            <EffectComposer>
                <Bloom intensity={1.5} /> {/* Enhanced glow */}
            </EffectComposer>
        </Canvas>
    );
}