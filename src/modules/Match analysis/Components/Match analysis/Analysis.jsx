// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import axios from 'axios';
// import NavBar from '../../../Shared/Components/Navbar/Navbar';
// import Footer from '../../../Shared/Components/Footer/Footer';

// export default function MatchAnalysis() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: {
//       'video/*': ['.mp4', '.mov', '.avi'],
//       'image/*': ['.jpg', '.jpeg', '.png']
//     },
//     onDrop: (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       if (file) {
//         setSelectedFile(file);
//         setResult(null);
//         console.log("Selected file:", file); 
//       } else {
//         alert('Please select a valid image or video file.');
//       }
//     }
//   });

//   const handleAnalyze = async () => {
//     if (!selectedFile) {
//       alert('Please select a file first!');
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await axios.post('https://foot.genoun.com/api/videos/analyze', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.data?.success) {
//         setResult(response.data.data);
//       } else {
//         alert('Analysis failed.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred during analysis.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       {/* Dropzone Section */}
//       <div className="dropzone-container flex justify-center items-center py-16 mt-32 flex-col gap-6">
//         <div
//           {...getRootProps()}
//           className="border-2 border-dashed border-gray-500 p-12 rounded-lg w-4/5 md:w-2/3 text-center"
//         >
//           <input {...getInputProps()} />
//           <p className="text-lg text-gray-500">
//             Drag & Drop a file here, or click to select
//           </p>
//         </div>

//         {/* Upload Button */}
//         <div className="mt-4">
//           <label className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-md cursor-pointer shadow-md">
//             Choose File
//             <input
//               type="file"
//               accept="video/*,image/*"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   setSelectedFile(file);
//                   setResult(null);
//                   console.log("Selected file:", file);
//                 }
//               }}
//               className="hidden"
//             />
//           </label>
//         </div>
//       </div>

//       {/* Analyze Now Button */}
//       <div className="text-right mt-10 mr-16">
//         <button
//           className="btn-analysis bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md shadow-md"
//           onClick={handleAnalyze}
//           disabled={loading}
//         >
//           {loading ? 'Analyzing...' : 'Analysis Now'}
//         </button>
//       </div>

//       <hr />
//       <hr />

//       {/* Results */}
//       <div>
//         <h1 className="text-center font-bold text-3xl my-10">
//           {result ? 'Analysis Result' : 'Upload a file to see the analysis result'}
//         </h1>

//         {result && (
//           <div className="text-center text-lg">
//             <p><strong>Players:</strong> {result.detections.players}</p>
//             <p><strong>Goalkeepers:</strong> {result.detections.goalkeepers}</p>
//             <p><strong>Referees:</strong> {result.detections.referees}</p>
//             <p><strong>Balls:</strong> {result.detections.balls}</p>
//             {result.annotated_frame && (
//               <div className="mt-6">
//                 <img
//                   src={`data:image/jpeg;base64,${result.annotated_frame}`}
//                   alt="Annotated Frame"
//                   className="mx-auto rounded-md shadow-md"
//                 />
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// }





























// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import axios from 'axios';
// import NavBar from '../../../Shared/Components/Navbar/Navbar';
// import Footer from '../../../Shared/Components/Footer/Footer';

// export default function MatchAnalysis() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: {
//       'video/*': ['.mp4', '.mov', '.avi'],
//       'image/*': ['.jpg', '.jpeg', '.png']
//     },
//     onDrop: (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       if (file) {
//         setSelectedFile(file);
//         setResult(null);
//         console.log("Selected file:", file); 
//       } else {
//         alert('Please select a valid image or video file.');
//       }
//     }
//   });

//   const handleAnalyze = async () => {
//     if (!selectedFile) {
//       alert('Please select a file first!');
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('video', selectedFile); // 

//     try {
//       const response = await axios.post('https://foot.genoun.com/api/videos/analyze', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.data?.success) {
//         setResult(response.data.data);
//       } else {
//         alert('Analysis failed.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred during analysis.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       {/* Dropzone Section */}
//       <div className="dropzone-container flex justify-center items-center py-16 mt-32 flex-col gap-6">
//         <div
//           {...getRootProps()}
//           className="border-2 border-dashed border-gray-500 p-12 rounded-lg w-4/5 md:w-2/3 text-center"
//         >
//           <input {...getInputProps()} />
//           <p className="text-lg text-gray-500">
//             Drag & Drop a file here, or click to select
//           </p>
//         </div>

//         {/* Upload Button */}
//         <div className="mt-4">
//           <label className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-md cursor-pointer shadow-md">
//             Choose File
//             <input
//               type="file"
//               accept="video/*,image/*"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   setSelectedFile(file);
//                   setResult(null);
//                   console.log("Selected file:", file);
//                 }
//               }}
//               className="hidden"
//             />
//           </label>
//         </div>
//       </div>

//       {/* Analyze Now Button */}
//       <div className="text-right mt-10 mr-16">
//         <button
//           className="btn-analysis bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md shadow-md"
//           onClick={handleAnalyze}
//           disabled={loading}
//         >
//           {loading ? 'Analyzing...' : 'Analysis Now'}
//         </button>
//       </div>

//       <hr />
//       <hr />

//       {/* Results */}
//       <div>
//         <h1 className="text-center font-bold text-3xl my-10 ">
//           {result ? 'Analysis Result' : 'Upload a file to see the analysis result'}
//         </h1>

//         {result && (
//           <div className="text-center text-lg">
//             <p><strong>Players:</strong> {result.detections.players}</p>
//             <p><strong>Goalkeepers:</strong> {result.detections.goalkeepers}</p>
//             <p><strong>Referees:</strong> {result.detections.referees}</p>
//             <p><strong>Balls:</strong> {result.detections.balls}</p>
//             {result.annotated_frame && (
//               <div className="mt-6">
//                 <img
//                   src={`data:image/jpeg;base64,${result.annotated_frame}`}
//                   alt="Annotated Frame"
//                   className="mx-auto rounded-md shadow-md"
//                 />
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// }




















// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import axios from 'axios';
// import NavBar from '../../../Shared/Components/Navbar/Navbar';
// import Footer from '../../../Shared/Components/Footer/Footer';

// export default function MatchAnalysis() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: {
//       'video/*': ['.mp4', '.mov', '.avi'],
//       'image/*': ['.jpg', '.jpeg', '.png']
//     },
//     onDrop: (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       if (file) {
//         setSelectedFile(file);
//         setResult(null);
//         console.log("Selected file:", file); 
//       } else {
//         alert('Please select a valid image or video file.');
//       }
//     }
//   });

//   const handleAnalyze = async () => {
//     if (!selectedFile) {
//       alert('Please select a file first!');
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('video', selectedFile); 

//     try {
//       const response = await axios.post('https://foot.genoun.com/api/videos/analyze', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.data?.success) {
//         setResult(response.data.data);
//       } else {
//         alert('Analysis failed.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred during analysis.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       {/* Overlay while loading */}
//       {loading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-96 p-6 rounded-md shadow-md text-center">
//             <p className="text-xl font-semibold text-gray-800">loading... </p>
//             <div className="mt-4 animate-spin mx-auto rounded-full h-10 w-10 border-t-4 border-green-600 border-solid"></div>
//           </div>
//         </div>
//       )}

//       {/* Dropzone Section */}
//       <div className="dropzone-container flex justify-center items-center py-16 mt-32 flex-col gap-6">
//         <div
//           {...getRootProps()}
//           className="border-2 border-dashed border-gray-500 p-12 rounded-lg w-4/5 md:w-2/3 text-center"
//         >
//           <input {...getInputProps()} />
//           <p className="text-lg text-gray-500">
//             Drag & Drop a file here, or click to select
//           </p>
//         </div>

//         {/* Upload Button */}
//         <div className="mt-4">
//           <label className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-md cursor-pointer shadow-md">
//             Choose File
//             <input
//               type="file"
//               accept="video/*,image/*"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   setSelectedFile(file);
//                   setResult(null);
//                   console.log("Selected file:", file);
//                 }
//               }}
//               className="hidden"
//             />
//           </label>
//         </div>
//       </div>

//       {/* Analyze Now Button */}
//       <div className="text-right mt-10 mr-16">
//         <button
//           className="btn-analysis bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md shadow-md"
//           onClick={handleAnalyze}
//           disabled={loading}
//         >
//           {loading ? 'Analyzing...' : 'Analysis Now'}
//         </button>
//       </div>

//       <hr />
//       <hr />

//       {/* Results */}
//       <div>
//         <h1 className="text-center font-bold text-3xl my-20">
//           {result ? 'Analysis Result' : 'Upload a file to see the analysis result'}
//         </h1>

//         {result && (
//           <div className="text-center text-lg">
//             <p><strong>Players:</strong> {result.detections.players}</p>
//             <p><strong>Goalkeepers:</strong> {result.detections.goalkeepers}</p>
//             <p><strong>Referees:</strong> {result.detections.referees}</p>
//             <p><strong>Balls:</strong> {result.detections.balls}</p>
//             {result.annotated_frame && (
//               <div className="mt-6">
//                 <img
//                   src={`data:image/jpeg;base64,${result.annotated_frame}`}
//                   alt="Annotated Frame"
//                   className="mx-auto rounded-md shadow-md"
//                 />
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// }











import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import NavBar from '../../../Shared/Components/Navbar/Navbar';
import Footer from '../../../Shared/Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

export default function MatchAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['.mp4', '.mov', '.avi'],
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setSelectedFile(file);
        setResult(null);
        toast.success('File selected successfully.');
      } else {
        toast.error('Please select a valid image or video file.');
      }
    }
  });

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.warning('Please select a file first!');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('video', selectedFile); // ← API expects this field name

    try {
      const response = await axios.post('https://foot.genoun.com/api/videos/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data?.success) {
        setResult(response.data.data);
        toast.success('Analysis completed!');
      } else {
        toast.error('Analysis failed.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during analysis.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            toastClassName="bg-green-600 text-white font-semibold rounded-md shadow-md"
            bodyClassName="text-sm"
            />

      {/* Overlay while loading */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-md shadow-md text-center">
            <p className="text-xl font-semibold text-gray-800">loading...</p>
            <div className="mt-4 mx-auto animate-spin rounded-full h-10 w-10 border-t-4 border-green-600 border-solid"></div>
          </div>
        </div>
      )}

      {/* Dropzone Section */}
      <div className="dropzone-container flex justify-center items-center py-16 mt-32 flex-col gap-6">
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-500 p-12 rounded-lg w-4/5 md:w-2/3 text-center"
        >
          <input {...getInputProps()} />
          <p className="text-lg text-gray-500">
            Drag & Drop a file here, or click to select
          </p>
        </div>

        {/* Upload Button */}
        <div className="mt-4">
          <label className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-md cursor-pointer shadow-md">
            Choose File
            <input
              type="file"
              accept="video/*,image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setSelectedFile(file);
                  setResult(null);
                  toast.success('File selected successfully.');
                }
              }}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Analyze Now Button */}
      <div className="text-right mt-10 mr-16">
        <button
          className="btn-analysis bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md shadow-md"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analysis Now'}
        </button>
      </div>

      <hr />
      <hr />

      {/* Results */}
      <div>
        <h1 className="text-center font-bold text-3xl text-green-500 my-8">
          {result ? 'Analysis Result' : 'Upload a file to see the analysis result'}
        </h1>

        {result && (
          <div className="text-center text-lg ">
            <p><strong>Players:</strong> {result.detections.players}</p>
            <p><strong>Goalkeepers:</strong> {result.detections.goalkeepers}</p>
            <p><strong>Referees:</strong> {result.detections.referees}</p>
            <p><strong>Balls:</strong> {result.detections.balls}</p>
            {result.annotated_frame && (
              <div className="mt-6">
                <img
                  src={`data:image/jpeg;base64,${result.annotated_frame}`}
                  alt="Annotated Frame"
                  className="mx-auto rounded-md shadow-md"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
