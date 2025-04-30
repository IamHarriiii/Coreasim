import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
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
