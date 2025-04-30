import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">CoreaSim</h1>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
        </div>
      </div>
    </nav>
  );
}
