// import React, { useState, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import * as htmlToImage from "html-to-image";
// import { jsPDF } from "jspdf";

// export default function QRCodeGenerator() {
//   const [activeTab, setActiveTab] = useState("link");
//   const [qrColor, setQrColor] = useState("#000000");
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [file, setFile] = useState<File | null>(null);
//   const [inputValue, setInputValue] = useState("");
//   const qrRef = useRef(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleDownloadPNG = async () => {
//     if (qrRef.current) {
//       const dataUrl = await htmlToImage.toPng(qrRef.current);
//       const link = document.createElement("a");
//       link.href = dataUrl;
//       link.download = "QRCode.png";
//       link.click();
//     }
//   };

//   const handleDownloadSVG = async () => {
//     if (qrRef.current) {
//       const dataUrl = await htmlToImage.toSvg(qrRef.current);
//       const link = document.createElement("a");
//       link.href = dataUrl;
//       link.download = "QRCode.svg";
//       link.click();
//     }
//   };

//   const handleDownloadPDF = async () => {
//     if (qrRef.current) {
//       const dataUrl = await htmlToImage.toPng(qrRef.current);
//       const pdf = new jsPDF();
//       pdf.addImage(dataUrl, "PNG", 15, 40, 180, 180);
//       pdf.save("QRCode.pdf");
//     }
//   };

//   const handleReset = () => {
//     setInputValue("");
//     setFile(null);
//     setQrColor("#000000");
//     setBgColor("#ffffff");
//     setActiveTab("link");
//   };

//   const handleGenerateQRCode = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // Prevent form submission and page reload
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-7xl rounded-lg shadow-lg p-6 space-y-6">
//         <header className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800">
//             QR Code Generator
//           </h1>
//           <p className="text-sm text-gray-600">
//             Generate QR codes for links or emails
//           </p>
//         </header>

//         {/* Tab Navigation */}
//         <div className="flex space-x-4 border-b pb-2">
//           {["link", "email"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 font-semibold text-gray-600 ${
//                 activeTab === tab
//                   ? "text-indigo-600 border-b-2 border-indigo-600"
//                   : "hover:text-indigo-500"
//               }`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Input Form for Link or Email */}
//         <div className="space-y-4 flex justify-between">
//           <form className="space-y-4 flex-1" onSubmit={handleGenerateQRCode}>
//             {activeTab === "link" ? (
//               <div>
//                 <label
//                   htmlFor="url"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Enter URL
//                 </label>
//                 <input
//                   type="url"
//                   id="url"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   placeholder="https://example.com"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//                 />
//               </div>
//             ) : (
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Enter Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="example@email.com"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//                 />
//               </div>
//             )}

//             {/* Color Pickers */}
//             <div className="flex flex-col md:flex-row justify-between p-3">
//               <div className="flex flex-col items-start">
//                 <label className="block text-sm font-medium text-gray-700">
//                   QR Code Color
//                 </label>
//                 <input
//                   type="color"
//                   value={qrColor}
//                   onChange={(e) => setQrColor(e.target.value)}
//                   className="w-20 h-12 border rounded-md"
//                 />
//               </div>
//               <div className="flex flex-col items-start">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Background Color
//                 </label>
//                 <input
//                   type="color"
//                   value={bgColor}
//                   onChange={(e) => setBgColor(e.target.value)}
//                   className="w-20 h-12 border rounded-md"
//                 />
//               </div>
//             </div>

//             {/* File Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload Center Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="w-full border rounded-md p-2"
//               />
//             </div>

//             <div className="flex space-x-2 mt-4">
//               <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
//                 Generate QR Code
//               </button>
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
//               >
//                 Reset
//               </button>
//             </div>
//           </form>

//           {/* QR Code Display */}
//           <div className="flex-1">
//             <section className="flex flex-col items-center">
//               <div ref={qrRef} className="w-48 h-48 bg-white p-2">
//                 <QRCodeCanvas
//                   value={inputValue}
//                   size={200} // Adjusted size for clarity
//                   bgColor={bgColor}
//                   fgColor={qrColor}
//                   marginSize={4} // Replaces includeMargin to add margin around the QR code
//                   imageSettings={
//                     file
//                       ? {
//                           src: URL.createObjectURL(file),
//                           excavate: true,
//                           width: 30, // Adjusted image size for better scanning
//                           height: 30,
//                         }
//                       : undefined
//                   }
//                 />
//               </div>
//               <div className="flex space-x-2 mt-4">
//                 <button
//                   onClick={handleDownloadPNG}
//                   className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
//                 >
//                   Download PNG
//                 </button>
//                 <button
//                   onClick={handleDownloadSVG}
//                   className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
//                 >
//                   Download SVG
//                 </button>
//                 <button
//                   onClick={handleDownloadPDF}
//                   className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
//                 >
//                   Download PDF
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
