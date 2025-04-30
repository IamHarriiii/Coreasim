import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>CoreaSim - Precision Surgery Planning</title>
      </Head>
      <Navbar />
      <main className="text-center mt-20 px-6">
        <h1 className="text-4xl font-bold text-blue-600">AI-powered Corneal Surgery Planning</h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Upload topography scans, simulate surgery outcomes, and generate professional reports – all in one tool.
        </p>

        <div className="mt-12 space-x-4">
          <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Doctor Portal
          </a>
          <a href="/dashboard/patient" className="bg-gray-200 px-6 py-3 rounded-full hover:bg-gray-300">
            Patient Portal
          </a>
        </div>

        <div className="mt-20">
          <img src="/models/cornea_banner.png" alt="3D Eye Banner" className="mx-auto rounded-lg shadow-lg max-w-xl" />
        </div>
      </main>
      <Footer />
    </>
  )
}
