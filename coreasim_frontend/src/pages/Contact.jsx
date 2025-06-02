// src/pages/contact.js
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';

export default function Contact() {
  return (
    <div>
      {/* Include the Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center text-2xl pt-10 text-gray-500">
          <p>
            CONTACT US<span className="text-gray-700 font-semibold"></span>
          </p>
        </div>

        <div className="my-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            {/* Use the correct path for the image */}
            <Image
              src="/assets/contact_image.png" // Direct URL path
              alt="Contact"
              className="rounded-lg object-cover"
              width={600} // Specify width
              height={400} // Specify height
            />
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/2 text-sm text-gray-600 md:pl-8">
            <div className="space-y-4">
              <p className="text-base">
                <strong>Tel:</strong> (415) 555-0132 <br />
                <strong>Email:</strong> corneosim@eyecare.com
              </p>

              <p className="text-base leading-relaxed">
                For ophthalmology consultations and corneal surgery planning, please contact our support team.
              </p>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-3 rounded-full w-full md:w-auto md:self-start mt-2 font-medium">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}