import React from 'react';
import NavBar from '../../Shared/Components/Navbar/Navbar';
import Footer from '../../Shared/Components/Footer/Footer';

export default function AboutUs() {
  return (
    <>
      <NavBar />

      <div className="bg-slate-900 min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full bg-slate-800 rounded-xl p-10 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-10">
            About ASAP
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 text-center">
            ASAP is a cutting-edge platform designed to bring intelligent football match analysis directly to your fingertips.
            Whether you're a coach, a player, or a passionate fan — we help you understand the game deeper through visual analysis powered by Artificial Intelligence.
          </p>

          <div className="space-y-4">
            <p className="text-gray-400">
              ⚽ <span className="text-green-400 font-bold">AI-Powered Match Analysis:</span> We use advanced algorithms to extract insights from football videos/images and provide detailed breakdowns.
            </p>

            <p className="text-gray-400">
              📊 <span className="text-green-400 font-bold">Gamer Ranking:</span> Our platform tracks and ranks players' performance based on real metrics.
            </p>

            <p className="text-gray-400">
              💡 <span className="text-green-400 font-bold">User-Friendly Design:</span> From the front-end to the backend, ASAP is designed for speed, clarity, and ease of use.
            </p>

            <p className="text-gray-400">
              👨‍💻 <span className="text-green-400 font-bold">Built by Students, for Football Lovers:</span> ASAP is a graduation project combining AI, UI/UX, Frontend, Backend, and Flutter technologies.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
