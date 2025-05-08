import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Navbar/Navbar';

export default function NotFound() {
  const navigate = useNavigate();

  return <>
  <NavBar/>
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4 text-center">
      <p className="text-gray-400 text-5xl mb-1">404 PAGE NOT FOUND</p>
      <div className="relative inline-flex items-center">
        <h1 className="text-9xl font-bold text-green-500 mr-2">IT’S OUT!</h1>


        <div className="absolute -right-20 top-1 animate-ballMove">
                  <i className="text-5xl fa-regular fa-futbol"></i>
                  <div className="absolute top-1 left-1 w-12 h-12 bg-green-500 opacity-30 blur-xl rounded-full -z-10"></div>
        </div>


      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-10 text-4xl bg-green-500 text-white px-6 p-5 rounded-full hover:bg-green-600 transition duration-300"
      >
        BACK TO HOME
      </button>

      <style>
       
      </style>

    </div>
  </>
}
