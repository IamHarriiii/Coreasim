//C:\Users\User\Coreasim\coreasim_frontend\src\pages\dashboard\doctor.jsx

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/ProcedureMenu';
import DoctorDashboard from '@/components/dashboard/DoctorDashboard';

export default function DoctorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <DoctorDashboard />
      </main>
      <Footer />
    </>
  );
}
