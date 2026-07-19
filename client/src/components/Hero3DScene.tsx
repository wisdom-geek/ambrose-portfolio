import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial, Icosahedron, Octahedron, Torus } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute in a sphere
      const radius = 8 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = time * 0.03;
    pointsRef.current.rotation.x = time * 0.01;

    // Subtle camera response to cursor
    const { mouse } = state;
    const cam = state.camera;
    cam.position.x += (mouse.x * 1.5 - cam.position.x) * 0.02;
    cam.position.y += (mouse.y * 1.0 - cam.position.y) * 0.02;
    cam.lookAt(0, 0, 0);
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <Icosahedron args={[0.7, 0]} position={[-3, 1.5, -2]}>
          <MeshDistortMaterial
            color="#22d3ee"
            roughness={0.3}
            metalness={0.8}
            distort={0.3}
            speed={1.5}
            transparent
            opacity={0.4}
            wireframe
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Octahedron args={[0.5, 0]} position={[3, -1, -1]}>
          <meshStandardMaterial
            color="#8b5cf6"
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.3}
            wireframe
          />
        </Octahedron>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
        <Torus args={[0.6, 0.2, 16, 32]} position={[2, 2, -3]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial
            color="#10b981"
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.25}
            wireframe
          />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <Icosahedron args={[0.4, 0]} position={[-2, -1.5, -1]}>
          <meshStandardMaterial
            color="#22d3ee"
            roughness={0.1}
            metalness={1}
            transparent
            opacity={0.5}
            wireframe
          />
        </Icosahedron>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <ParticleField />
      <FloatingShapes />
      <fog attach="fog" args={["#030712", 8, 20]} />
    </>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
