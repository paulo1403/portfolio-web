"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <Stars radius={100} depth={100} factor={80} saturation={0} fade />

        <Float speed={0.5} rotationIntensity={0.4} floatIntensity={0.4}>
          <Sphere args={[1.2, 32, 32]} position={[-2.5, 1, 0]}>
            <MeshDistortMaterial color="#cba6f7" attach="material" speed={2} distort={0.35} roughness={0.15} metalness={0.6} />
          </Sphere>
        </Float>

        <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.3} position={[3, -0.5, 0]}>
          <Sphere args={[0.9, 24, 24]}>
            <MeshDistortMaterial color="#f5c2e7" attach="material" speed={1.5} distort={0.3} roughness={0.15} metalness={0.5} />
          </Sphere>
        </Float>

        <Float speed={1.0} rotationIntensity={0.6} floatIntensity={0.6} position={[0, -2, 1]}>
          <Sphere args={[0.7, 20, 20]}>
            <MeshDistortMaterial color="#fab387" attach="material" speed={2} distort={0.25} roughness={0.2} metalness={0.4} />
          </Sphere>
        </Float>

        <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.35} position={[-1.5, -1.5, 2]}>
          <Sphere args={[0.5, 16, 16]}>
            <MeshDistortMaterial color="#94e2d5" attach="material" speed={1.2} distort={0.15} roughness={0.1} metalness={0.7} />
          </Sphere>
        </Float>

        <Float speed={0.9} rotationIntensity={0.35} floatIntensity={0.45} position={[2, 1.5, -1]}>
          <Sphere args={[0.6, 18, 18]}>
            <MeshDistortMaterial color="#b4befe" attach="material" speed={1.8} distort={0.28} roughness={0.15} metalness={0.55} />
          </Sphere>
        </Float>

        <Float speed={0.7} rotationIntensity={0.5} floatIntensity={0.7} position={[0.5, 2, 0]}>
          <Sphere args={[0.4, 12, 12]}>
            <MeshDistortMaterial color="#89b4fa" attach="material" speed={2.5} distort={0.4} roughness={0.1} metalness={0.6} />
          </Sphere>
        </Float>

        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.55} position={[-2, 0.5, 1]}>
          <Sphere args={[0.8, 22, 22]}>
            <MeshDistortMaterial color="#f9e2af" attach="material" speed={1.7} distort={0.22} roughness={0.2} metalness={0.45} />
          </Sphere>
        </Float>

        <Float speed={0.4} rotationIntensity={0.55} floatIntensity={0.5} position={[1.5, -0.8, 0.5]}>
          <Sphere args={[0.55, 14, 14]}>
            <MeshDistortMaterial color="#74c7ec" attach="material" speed={1.3} distort={0.18} roughness={0.1} metalness={0.65} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
