import dynamic from 'next/dynamic';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

const EyeSurgeryAnimation = dynamic(() => import('@/components/three/EyeSurgeryAnimation'), { ssr: false });

export default function SimulationPage() {
  const router = useRouter();
  const { disease } = router.query;

  return (
    <>
      <Head>
        <title>3D Surgery Animation – CoreaSim</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4 text-center">3D Eye Simulation</h2>
        <div className="w-full h-[600px]">
          <EyeSurgeryAnimation predictedDisease={disease} />
        </div>
      </main>
      <Footer />
    </>
  );
}
