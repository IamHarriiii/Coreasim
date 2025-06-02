//C:\Users\User\Coreasim\coreasim_frontend\src\pages\dashboard\patient.jsx

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/ProcedureMenu';
import PatientPortal from '@/components/dashboard/PatientPortal';

export default function PatientPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <PatientPortal />
      </main>
      <Footer />
    </>
  );
}
