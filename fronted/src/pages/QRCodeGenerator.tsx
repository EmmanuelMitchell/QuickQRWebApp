import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useQRCodeContext } from "../context/QRCodeContext";
import { useNavigate } from "react-router-dom";

export default function QRCodeGenerator() {
  const navigate = useNavigate();
  const {
    activeTab,
    setActiveTab,
    qrColor,
    setQrColor,
    bgColor,
    setBgColor,
    // file,
    // setFile,
    inputValue,
    setInputValue,
    qrRef,
    handleImageUpload,
    handleDownloadPNG,
    handleDownloadSVG,
    handleDownloadPDF,
    reset,
  } = useQRCodeContext();

  const handleGenerateQRCode = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent page reload on form submission
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-7xl rounded-lg shadow-lg p-6 space-y-6">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            QR Code Generator
          </h1>
          <p className="text-sm text-gray-600">
            Generate QR codes for links or emails
          </p>
        </header>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")} // Navigate to home page
          className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-300"
        >
          Back to Home
        </button>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b pb-2">
          {["link", "email"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold text-gray-600 ${
                activeTab === tab
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "hover:text-indigo-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Input Form for Link or Email */}
        <div className="space-y-4 flex justify-between">
          <form className="space-y-4 flex-1" onSubmit={handleGenerateQRCode}>
            {activeTab === "link" ? (
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            ) : (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            )}

            {/* Color Pickers */}
            <div className="flex flex-col md:flex-row justify-between p-3">
              <div className="flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">
                  QR Code Color
                </label>
                <input
                  type="color"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  className="w-20 h-12 border rounded-md"
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">
                  Background Color
                </label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-20 h-12 border rounded-md"
                />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Center Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
            >
              Generate QR Code
            </button>
            <button
              type="button"
              onClick={reset}
              className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
            >
              Reset
            </button>
          </form>

          {/* QR Code Display */}
          <div className="flex-1">
            <section className="flex flex-col items-center">
              <div
                ref={qrRef}
                className="w-48 h-48 bg-white p-2 rounded-md border border-gray-200"
              >
                <QRCodeCanvas
                  value={inputValue}
                  size={180}
                  bgColor={bgColor}
                  fgColor={qrColor}
                />
              </div>

              {/* Label for QR Code */}
              {/* {inputValue && (
                <p className="mt-2 text-center text-gray-600">
                  This QR code is for: <strong>{inputValue}</strong>
                </p>
              )} */}

              {/* Download Options */}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={handleDownloadPNG}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                >
                  Download PNG
                </button>
                <button
                  onClick={handleDownloadSVG}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                >
                  Download SVG
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500"
                >
                  Download PDF
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
