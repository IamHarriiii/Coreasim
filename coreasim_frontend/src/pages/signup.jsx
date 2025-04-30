import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Head from 'next/head';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('Registered (dummy). Integrate with backend later.');
  };

  return (
    <>
      <Head>
        <title>Signup – CoreaSim</title>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-16 px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Signup</h1>
        <form className="w-full max-w-md bg-white shadow-md rounded p-6" onSubmit={handleSignup}>
          <input type="text" name="name" placeholder="Name" value={formData.name}
                 onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email}
                 onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </main>
      <Footer />
    </>
  );
}
