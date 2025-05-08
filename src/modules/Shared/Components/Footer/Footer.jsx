import React from 'react'

export default function Footer() {
  return <>

  
<footer className="w-full bg-emerald-950 text-white py-16 ">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row md:justify-between gap-12">

      <div className="md:w-1/3 space-y-3">
        <h2 className="text-xl font-bold">ASAP</h2>
        <p className="text-base text-gray-300">
          Analyze Sports, Anytime, Precisely.
        </p>
        <p className="text-sm text-gray-400">
          A football match analysis platform built with passion as part of our graduation project.
        </p>
      </div>

      <div className="md:w-1/3 space-y-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm text-gray-300">
          WhatsApp: 
          <a 
            href="https://wa.me/201030259267" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline ml-2"
          >
            +20 103 025 9267
          </a>
        </p>
        <p className="text-sm text-gray-300">
          Email: 
          <a 
            href="mailto:a7med22mubarak@gmail.com" 
            className="text-blue-400 hover:underline ml-2"
          >
            a7med22mubarak@gmail.com
          </a>
        </p>
      </div>

      <div className="md:w-1/3 space-y-3">
        <h2 className="text-lg font-semibold">Project Team</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>Ahmed El-Sayed Mubarak</li>
          <li>Tasneem Rashad Fahmy</li>
          <li>Shahed Mohamed Abd-Elsalam</li>
          <li>Mahmoud Samy Mahmoud</li>
          <li>Abd-Elrahman Sherif</li>
        </ul>
      </div>

    </div>

    <div className="border-t border-gray-700 mt-10 pt-4 text-center">
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} ASAP Team. All rights reserved.
      </p>
    </div>
  </div>
</footer>


  
  
  </>
}
