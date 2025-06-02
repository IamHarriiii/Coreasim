// src/pages/education.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';

export const metadata = {
  title: 'Educational Resources | CorneoSim',
  description: 'Understand corneal procedures, explore interactive models, and learn how CorneoSim helps predict surgical outcomes.',
};

const Education = () => {
  const [activeTab, setActiveTab] = useState('patient-education');
  const router = useRouter();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleViewDetails = (procedureName) => {
    const path = `/procedures/${procedureName.toLowerCase().replace(/\s+/g, '-')}`;
    router.push(path);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Educational Resources
          </h1>
          <p className="mt-4 text-xl text-indigo-100 mx-auto max-w-4xl">
            Understand corneal procedures, explore interactive models, and learn how CorneoSim helps predict surgical outcomes.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <nav className="-mb-px flex space-x-8 border-b border-gray-200" aria-label="Tabs">
          {['patient-education', 'doctor-resources', 'faq'].map(tab => (
            <button
              key={tab}
              className={`${activeTab === tab
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'patient-education' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900">Understanding Your Cornea</h2>
              <p className="mt-4 text-lg text-gray-500">
                The cornea is the clear, dome-shaped surface of your eye that plays a crucial role in focusing light.
              </p>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">Common Corneal Procedures</h3>
              {[
                {
                  title: 'LASIK (Laser-Assisted In Situ Keratomileusis)',
                  desc: 'Reshapes the cornea to correct vision. A flap is created and laser energy is used.',
                  key: 'LASIK'
                },
                {
                  title: 'PRK (Photorefractive Keratectomy)',
                  desc: 'Removes the outer layer of the cornea. A laser reshapes the tissue underneath.',
                  key: 'PRK'
                },
                {
                  title: 'Corneal Cross-Linking',
                  desc: 'Strengthens corneal tissue using UV light and riboflavin. Used to treat keratoconus.',
                  key: 'Corneal Cross-Linking'
                }
              ].map(proc => (
                <div key={proc.key} className="border-t border-b border-gray-200 py-6">
                  <h4 className="text-xl font-semibold text-gray-900">{proc.title}</h4>
                  <p className="mt-2 text-gray-600">{proc.desc}</p>
                  <div className="mt-4 flex items-center">
                    <div className="bg-gray-100 w-20 h-20 rounded"></div>
                    <button
                      className="ml-4 text-indigo-600 hover:text-indigo-800"
                      onClick={() => handleViewDetails(proc.key)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">How CorneoSim Works</h3>
                </div>
                <dl className="border-t border-gray-200 divide-y divide-gray-200">
                  {[
                    "Your doctor uploads your corneal topography scan.",
                    "CorneoSim creates a digital twin of your cornea.",
                    "The system simulates surgery outcomes.",
                    "AI provides recommendations for optimal settings.",
                    "Your doctor reviews the predictions and explains them to you."
                  ].map((step, i) => (
                    <div key={i} className={`bg-${i % 2 === 0 ? 'white' : 'gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                      <dt className="text-sm font-medium text-gray-500">Step {i + 1}</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{step}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'doctor-resources' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Resources for Doctors</h2>
            <p className="mt-4 text-lg text-gray-500">
              Professional resources to help you get the most out of CorneoSim.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Finite Element Analysis in Corneal Surgery Planning",
                  journal: "Journal of Refractive Surgery, 2024"
                },
                {
                  title: "AI Applications in Ophthalmology",
                  journal: "American Journal of Ophthalmology, 2023"
                },
                {
                  title: "Digital Twins for Personalized Medicine",
                  journal: "Journal of Medical Systems, 2024"
                }
              ].map((paper, idx) => (
                <div key={idx} className="bg-white shadow rounded-lg p-6">
                  <h4 className="text-md font-medium text-gray-900">{paper.title}</h4>
                  <p className="text-sm text-gray-500">{paper.journal}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-12 space-y-6">
              {[
                {
                  q: "What is CorneoSim and how does it work?",
                  a: "It creates a digital twin of your cornea and simulates surgical outcomes."
                },
                {
                  q: "How accurate are the simulations?",
                  a: "Validated via clinical studies with over 90% prediction accuracy."
                },
                {
                  q: "Is my data secure?",
                  a: "Yes. HIPAA & GDPR compliant with encryption."
                },
                {
                  q: "What procedures can it simulate?",
                  a: "LASIK, PRK, cross-linking, implants, and inlays."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-b pb-4">
                  <dt className="text-lg font-medium text-gray-900">{item.q}</dt>
                  <dd className="mt-2 text-base text-gray-600">{item.a}</dd>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;