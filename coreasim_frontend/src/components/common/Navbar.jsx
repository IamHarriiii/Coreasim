//coreasim_frontend\src\components\common\Navbar.jsx


'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [token, setToken] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token')
      setToken(!!storedToken)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(false)
    router.push('/')
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400 px-4 sm:px-10">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={140} height={40} className="cursor-pointer" />
      </Link>

      <ul className="hidden md:flex items-center gap-5 font-medium">
        <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
        <li><Link href="/Simulations" className="hover:text-blue-700">Simulation</Link></li>
        <li><Link href="/Reports" className="hover:text-blue-700">Reports</Link></li>
        <li><Link href="/Education" className="hover:text-blue-700">Education</Link></li>
        <li><Link href="/About" className="hover:text-blue-700">About Us</Link></li>
        <li><Link href="/Contact" className="hover:text-blue-700">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-4 relative">
        {token ? (
          <div className="group relative cursor-pointer flex items-center gap-2">
            <Image src="/assets/profile_pic.png" alt="Profile" width={32} height={32} className="rounded-full" />
            <Image src="/assets/dropdown_icon.png" alt="Dropdown" width={10} height={10} />

            <div className="absolute top-12 right-0 hidden group-hover:block bg-white rounded shadow p-4 z-50 w-40 text-gray-600 text-sm">
              <p className="cursor-pointer hover:text-black mb-2" onClick={() => router.push('/reports')}>Reports</p>
              <p className="cursor-pointer hover:text-black" onClick={handleLogout}>Logout</p>
            </div>
          </div>
        ) : (
          <Link href="/Login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-light hidden md:block hover:bg-blue-700 transition">
              Create Account
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
