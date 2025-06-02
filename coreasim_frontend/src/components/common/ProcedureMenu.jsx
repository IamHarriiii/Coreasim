//coreasim_frontend\src\components\common\ProcedureMenu.jsx


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

const procedureData = [
  {
    name: 'LASIK',
    description: 'Laser-Assisted In Situ Keratomileusis for vision correction.',
    image: '/assets/lasik_final.jpg',
  },
  {
    name: 'PRK',
    description: 'Photorefractive Keratectomy for surface-level vision correction.',
    image: '/assets/prk_icon.png',
  },
  {
    name: 'Corneal Cross-Linking',
    description: 'Strengthening the cornea to treat keratoconus.',
    image: '/assets/cross-linking-icon.svg',
  },
]

const ProcedureMenu = ({ selectedProcedure = null }) => {
  useEffect(() => {
    if (selectedProcedure) {
      const element = document.getElementById(selectedProcedure.toLowerCase().replace(/\s+/g, '-'))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [selectedProcedure])

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="procedures">
      <h1 className="text-3xl font-medium">Explore Surgical Procedures</h1>
      <p className="text-center text-sm max-w-lg mx-auto">
        Select a procedure to simulate its impact on corneal biomechanics and predict post-surgery outcomes.
      </p>

      <div className="flex justify-center gap-8 pt-8 w-full overflow-x-auto px-4 sm:px-0">
        {procedureData.map((item, index) => (
          <Link
            key={index}
            id={item.name.toLowerCase().replace(/\s+/g, '-')}
            href={`/simulations/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            className={`flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500 ${
              selectedProcedure === item.name ? 'ring-2 ring-indigo-500 rounded-lg p-2' : ''
            }`}
          >
            <Image className="w-16 sm:w-24 mb-2" src={item.image} alt={`${item.name} Icon`} width={96} height={96} />
            <p className="font-medium text-center">{item.name}</p>
            <p className="text-center text-gray-600 text-[10px] sm:text-xs max-w-xs">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProcedureMenu
