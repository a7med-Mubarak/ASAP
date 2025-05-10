// import * as React from 'react';
// import { useState } from 'react';
// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';
// import Chatbot from '../../../Shared/Components/Chatbot/Chatbot';

// export default function Chatbot() {

//     let navigate = useNavigate();
//     const [message, setMessage] = useState('');
//     const [response, setResponse] = useState('');
//     const [loading, setLoading] = useState(false);
  
    
  
//     const handleSendMessage = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.post('https://foot.genoun.com/api/chatbot/message', { message });
//         setResponse(res.data.data.message);
//       } catch (error) {
//         console.error("Error sending message:", error);
//         setResponse("Error processing message");
//       } finally {
//         setLoading(false);
//       }
//     };


//   return <>
// <div className="fixed bottom-0 right-0 m-6 p-4 bg-white shadow-lg rounded-lg z-50 max-w-md w-full break-words">
//   <div className="chatbot-container">
//     <h2 className="text-lg font-bold">Football Chatbot</h2>
//     <div className="space-y-4">
//       <div className="chatbot-response">
//         <p className="break-words">{response}</p>
//       </div>
//       <div className="chatbot-input flex items-center">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Ask me something about football..."
//           className="p-2 border border-gray-300 rounded flex-1"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="p-2 bg-blue-500 text-white rounded ml-2"
//           disabled={loading}
//         >
//           {loading ? "Sending..." : "Send"}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// </>
// }
