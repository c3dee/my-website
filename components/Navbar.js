'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    // <nav className="w-full flex justify-center bg-gray-100 border-b">
    //   <ul className="flex gap-6 p-4 text-lg font-medium text-gray-700">
    //     <li><Link href="/">Home</Link></li>
    //     <li><Link href="/about">About</Link></li>
    //     <li><Link href="/projects">Projects</Link></li>
    //     <li><Link href="/contact">Contact</Link></li>
    //   </ul>
    // </nav>
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
  <div className="text-2xl font-extrabold text-indigo-600">Name</div>
  <div className="space-x-4 text-gray-800 text-base font-medium">
    <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
    <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
    <Link href="/projects" className="hover:text-indigo-600 transition">Projects</Link>
    <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
  </div>
</nav>

  );
}
