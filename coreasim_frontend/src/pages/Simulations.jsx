// src/pages/simulations.js
'use client';

import Navbar from '@/components/common/Navbar';

export const metadata = {
  title: 'Simulations | CorneoSim',
  description: 'Explore interactive 3D models and simulate corneal surgery outcomes.',
};

export default function Simulations() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Simulations</h1>
      <p>This is the Simulations page.</p>
    </div>
  );
}