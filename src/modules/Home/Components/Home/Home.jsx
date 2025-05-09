import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Analysis from '../../../../assets/images/Easy-tagging-actions-1.jpg';
import matchDay from '../../../../assets/images/match day.png';
import VideoAnalysis from '../../../../assets/images/Once-Video-Analyser-tracking-video-for-web.mp4';
import NavBar from '../../../Shared/Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Shared/Components/Footer/Footer';

export default function Home() {
  let navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  

  const handleSendMessage = async () => {
    setLoading(true);
    try {
      const res = await axios.post('https://foot.genoun.com/api/chatbot/message', { message });
      setResponse(res.data.data.message);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse("Error processing message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="relative w-full h-screen bg bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <div className="relative z-10 flex items-center h-full md:px-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="md:text-6xl font-extrabold text-emerald-600">Welcome to ASAP . . .</h1>
            <p className="text-4xl text-emerald-700">
              Your Ultimate Destination for Football Match Analysis, Gamer Ranking and more ...
            </p>
            <div>
              <button
                className="btn-read"
                onClick={() => {
                  document.getElementById('readMore')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 edit">
        <div id="readMore" className="m-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <img src={Analysis} alt="ASAP Analysis" className="rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-950">
                Football video analysis all-in-one program
              </h1>
              <h5 className="pt-4 text-lg md:text-2xl font-bold text-gray-700">
                ASAP is a dual-function system that specializes in both gamer ranking and detailed football match analysis, ensuring a complete performance assessment. ASAP is a user-friendly
              </h5>
              <button className="btn-analysis" onClick={() => navigate('/Analysis')}>
                Analysis Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="edit">
        <div id="todayMatches" className="m-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-950">
                Stay Updated with Today's Matches
              </h1>
              <h5 className="pt-4 text-lg md:text-2xl font-bold text-gray-700">
                Explore all matches scheduled for today – including kickoff times, teams, and pre-match insights. Stay in the loop and never miss a moment!
              </h5>
              <button className="btn-analysis" onClick={() => navigate('/matchday')}>
                View Matches
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={matchDay} alt="Today's Matches" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 edit">
        <div className="m-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <video src={VideoAnalysis} autoPlay loop muted className="rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-950">
                Elite level automatic tracking features
              </h1>
              <h5 className="pt-4 text-lg md:text-2xl font-bold text-gray-700">
                Automatic player tracking with a variety of drawings thanks to advanced AI keyframing technology. Best of all, it’s extremely easy-to-use. You just need one click – Once Sport Analyser does the video tracking for you.
              </h5>
              <button className="btn-analysis" onClick={() => navigate('/Analysis')}>
                Analysis Now
              </button>
            </div>
          </div>
        </div>
      </div>

        <div className="fixed bottom-0 right-0 m-6 p-4 bg-white shadow-lg rounded-lg z-50 max-w-md w-full break-words">
          <div className="chatbot-container">
            <h2 className="text-lg font-bold">Football Chatbot</h2>
            <div className="space-y-4">
              <div className="chatbot-response">
                <p className="break-words">{response}</p>
              </div>
              <div className="chatbot-input flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me something about football..."
                  className="p-2 border border-gray-300 rounded flex-1"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-500 text-white rounded ml-2" 
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
}
