'use client';
import Navbar from '../components/Navbar';


import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Home() {
  const messageRef = useRef();

  useEffect(() => {
    gsap.from(messageRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <>
      <Navbar />
  
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
        {/* ✅ Your Tailwind test message */}
        <div ref={messageRef} className="text-4xl font-bold text-blue-600">
          Tailwind is working!!!!!!!!!!!
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto mt-10">
  <h2 className="text-2xl font-bold text-indigo-600 mb-2">Tailwind Card</h2>
  <p className="text-gray-600">This is a responsive card styled with Tailwind CSS.</p>

  
        {/* 🔄 Main content from default template */}
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* ...rest of your content */}
        </main>
  
        {/* 🔗 Footer */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-300">
          {/* ...footer links */}
        </footer>
      </div>

</div>

    </>

    
  )}
  


//   return (
    
//     <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
//       {/* ✅ Your Tailwind test message */}
//       <div ref={messageRef} className="text-4xl font-bold text-blue-600">
//         Tailwind is working!
//       </div>

//       {/* 🔄 Main content from default template */}
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />

//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono">
//           <li className="mb-2 tracking-tight">
//             Edit{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.js
//             </code>
//           </li>
//           <li className="tracking-tight">Save to see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-neutral-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logo"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>

//           <a
//             className="rounded-full border border-gray-300 dark:border-white/20 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://nextjs.org/docs"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>

//       {/* 🔗 Footer */}
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-300">
//         <a
//           href="https://nextjs.org/learn"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:underline"
//         >
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:underline"
//         >
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:underline"
//         >
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
