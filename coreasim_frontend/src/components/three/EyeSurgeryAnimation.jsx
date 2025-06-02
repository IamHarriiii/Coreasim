//C:\Users\User\Coreasim\coreasim_frontend\src\components\three\EyeSurgeryAnimation.jsx

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function Cornea({ disease, showGlow }) {
  const meshRef = useRef();

  const diseaseMap = {
    Keratoconus: {
      color: '#FFA07A',
      scale: [1.3, 1.1, 1.1],
      label: 'Keratoconus',
      desc: 'Cross-linking to stabilize cornea shape',
    },
    Cataract: {
      color: '#C0C0C0',
      scale: [1.2, 1.2, 1.2],
      label: 'Cataract',
      desc: 'Lens replacement surgery recommended',
    },
    Glaucoma: {
      color: '#87CEFA',
      scale: [1.1, 1.1, 1.1],
      label: 'Glaucoma',
      desc: 'Drainage surgery to lower eye pressure',
    },
    'Age related Macular Degeneration': {
      color: '#98FB98',
      scale: [1.0, 1.0, 1.0],
      label: 'AMD',
      desc: 'Laser therapy or injection therapy advised',
    },
    default: {
      color: '#87CEEB',
      scale: [1.0, 1.0, 1.0],
      label: 'Normal Eye',
      desc: 'No surgery recommended',
    },
  };

  const { color, scale, label, desc } = diseaseMap[disease] || diseaseMap.default;

  useFrame(() => {
    if (showGlow && meshRef.current) {
      const time = Date.now() * 0.002;
      meshRef.current.material.emissiveIntensity = 0.3 + Math.sin(time) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={meshRef} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          transmission={0.9}
          thickness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive={showGlow ? new THREE.Color(color) : new THREE.Color(0x000000)}
          emissiveIntensity={showGlow ? 0.5 : 0}
        />
      </mesh>

      <Html position={[0, 1.5, 0]}>
        <div className="bg-white px-3 py-2 rounded shadow-lg text-sm text-black max-w-xs text-center">
          <p className="font-bold">{label}</p>
          <p className="text-gray-600">{desc}</p>
        </div>
      </Html>
    </>
  );
}

function Controls({ resetRotation }) {
  const controlsRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (resetRotation && controlsRef.current) {
      camera.position.set(0, 0, 3);
      controlsRef.current.update();
    }
  }, [resetRotation]);

  return <OrbitControls ref={controlsRef} autoRotate autoRotateSpeed={1.2} enableZoom={true} />;
}

export default function EyeSurgeryAnimation({ predictedDisease }) {
  const [glow, setGlow] = useState(false);
  const [resetView, setResetView] = useState(false);

  return (
    <>
      <div className="absolute z-10 top-4 left-4 space-y-2">
        <button onClick={() => setGlow(!glow)} className="bg-yellow-300 px-3 py-1 rounded shadow">
          {glow ? 'Disable Highlight' : 'Highlight Affected Area'}
        </button>
        <button onClick={() => setResetView(true)} className="bg-blue-300 px-3 py-1 rounded shadow">
          Reset View
        </button>
      </div>

      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <Suspense fallback={<Html><p>Loading...</p></Html>}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Cornea disease={predictedDisease} showGlow={glow} />
          <Controls resetRotation={resetView} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </>
  );
}
