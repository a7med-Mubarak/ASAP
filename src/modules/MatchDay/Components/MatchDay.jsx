import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../Shared/Components/Navbar/Navbar';
import Footer from '../../Shared/Components/Footer/Footer';

const MatchDay = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const matchesPerPage = 8;

  useEffect(() => {
    const apiUrl = `https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard`;

    axios.get(apiUrl)
      .then((res) => {
        const events = res.data.events;
        setMatches(events || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching matches:", err);
        setError('An error occurred while loading matches.');
        setLoading(false);
      });
  }, []);

  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);
  const totalPages = Math.ceil(matches.length / matchesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <>
      <NavBar />
      <div className="p-10 min-h-screen bg-gray-50 mt-16">
        <h1 className="text-4xl font-bold text-center mb-10">📅 Match Day</h1>

        {loading ? (
          <p className="text-center text-2xl">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : matches.length === 0 ? (
          <p className="text-center">There are no matches available.</p>
        ) : (
          <>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentMatches.map((match) => {
                const competition = match.competitions[0];
                const home = competition.competitors.find(t => t.homeAway === "home");
                const away = competition.competitors.find(t => t.homeAway === "away");
                const homeTeam = home?.team;
                const awayTeam = away?.team;
                const homeScore = home?.score || "؟";
                const awayScore = away?.score || "؟";
                const date = new Date(match.date).toLocaleString();

                return (
                  <li key={match.id} className="bg-white border rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img src={homeTeam?.logo} alt={homeTeam?.displayName} className="w-10 h-10" />
                        <span className="font-semibold">{homeTeam?.displayName}</span>
                      </div>
                      <span className="text-xl font-bold">🆚</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{awayTeam?.displayName}</span>
                        <img src={awayTeam?.logo} alt={awayTeam?.displayName} className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="mt-4 space-y-1 text-gray-600 text-sm">
                      <p>🕒 {date}</p>
                      <p>🏟️ {competition.venue?.fullName || "none"}</p>
                      <p className="font-bold text-black text-xl bg-emerald-400 text-center">⚽ result: {homeScore} - {awayScore}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
              >
                back
              </button>
              <span className="font-semibold text-lg">
                page {currentPage} on {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
              >
                next ➡️
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MatchDay;
