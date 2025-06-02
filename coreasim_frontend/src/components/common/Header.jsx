// src/components/common/Header.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row flex-wrap bg-purple-800 rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          "Transform corneal topography scans into interactive 3D models"
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <Image
            src="/assets/group_profiles.png"
            alt="Profiles"
            width={112}
            height={30}
            className="w-28" // Matches original styling
          />
          <p>
            Simulate Corneal Surgery Outcomes,<br className="hidden sm:block" />
            with Precision and Confidence.
          </p>
        </div>

        <Link
          href="/simulate"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Start Simulation
          <Image
            src="/assets/arrow_icon.svg"
            alt="Arrow"
            width={12}
            height={12}
            className="w-3 inline-block"
          />
        </Link>
      </div>

      <div className="md:w-1/2 relative">
        <Image
          src="/assets/header_img.png"
          alt="Medical Professionals"
          width={500}
          height={300}
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </header>
  );
}