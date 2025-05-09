// import React from 'react';
// import NavBar from '../../Shared/Components/Navbar/Navbar';
// import Footer from '../../Shared/Components/Footer/Footer';

// export default function ContactUs() {
//   return (
//     <>
//       <NavBar />

//       <div className="bg-slate-900 min-h-screen text-white pt-28 pb-32 py-16 flex flex-col items-center justify-center">
//         <div className="max-w-3xl w-full bg-slate-800 rounded-xl p-10 shadow-lg">
//           <h1 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-10">
//             Contact Us
//           </h1>

//           <p className="text-center text-gray-300 mb-6">
//             We'd love to hear from you! Please fill out the form below and we will get in touch with you shortly.
//           </p>

//           <form className="space-y-6">
//             <div>
//               <label className="block text-lg font-semibold mb-2">Your Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-lg font-semibold mb-2">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label className="block text-lg font-semibold mb-2">Message</label>
//               <textarea
//                 rows="5"
//                 className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Write your message"
//               ></textarea>
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold transition duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }






import React, { useState } from 'react';
import NavBar from '../../Shared/Components/Navbar/Navbar';
import Footer from '../../Shared/Components/Footer/Footer';
import axios from 'axios';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message || !subject) {
      setStatus('Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post('https://foot.genoun.com/api/contact', {
        name,
        email,
        message,
        subject,
      });

      if (response.data.success) {
        setStatus('Your message has been sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);

      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <NavBar />

      <div className="bg-slate-900 min-h-screen text-white pt-28 pb-32 py-16 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-slate-800 rounded-xl p-10 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-10">
            Contact Us
          </h1>

          <p className="text-center text-gray-300 mb-6">
            We'd love to hear from you! Please fill out the form below and we will get in touch with you shortly.
          </p>

          {status && (
            <div className="mb-4 text-center text-lg text-yellow-400">
              {status}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-semibold mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded bg-slate-700 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
