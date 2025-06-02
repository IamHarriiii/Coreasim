// src/pages/about.js
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';

export default function About() {
  return (
    <div>
      {/* Include the Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center pt-8 pb-6 text-gray-500">
          <p className="text-xl">
            ABOUT US<span className="text-gray-700 font-medium"></span>
          </p>
        </div>

        <div className="my-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 max-w-[300px]">
            {/* Use the correct path for the image */}
            <Image
              src="/assets/about_image.png" // Direct URL path
              alt="Medical professionals"
              className="rounded-lg object-cover"
              width={300} // Specify width
              height={200} // Specify height
            />
          </div>

          <div className="flex flex-col justify-center gap-5 md:w-2/3 text-sm text-gray-600 leading-relaxed">
            <p>
              At CorneoSim, we're revolutionizing corneal surgery planning through advanced biomechanical simulation technology. Our web-based platform transforms standard corneal topography scans into interactive 3D models, allowing ophthalmologists to predict surgical outcomes with unprecedented precision. By leveraging Finite Element Analysis and cutting-edge AI algorithms, we enable surgeons to visualize potential results before ever making an incision.
            </p>

            <p>
              Founded by a team of ophthalmologists, biomedical engineers, and software developers, CorneoSim was born from a shared vision: to reduce surgical complications and improve patient outcomes through personalized simulation. Our technology creates detailed digital twins of each patient's unique corneal structure, empowering doctors to optimize surgical parameters for LASIK, PRK, corneal cross-linking, and other vision correction procedures.
            </p>

            <p>
              We believe patient education is equally important as surgical planning. That's why CorneoSim includes interactive visualization tools that help patients understand their condition and treatment options. By bridging the gap between complex medical data and patient comprehension, we're fostering more informed decisions and better doctor-patient communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}