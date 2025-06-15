'use client';

import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold text-blue-600">Tailwind is working!</h1>
      </div>
    </>
  );
}

