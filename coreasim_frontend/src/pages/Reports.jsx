// src/pages/reports.js
'use client';

import Navbar from '@/components/common/Navbar';

export const metadata = {
  title: 'Reports | CorneoSim',
  description: 'Access detailed reports on your corneal simulations and surgical outcomes.',
};

export default function Reports() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <p>This is the Reports page.</p>
    </div>
  );
}