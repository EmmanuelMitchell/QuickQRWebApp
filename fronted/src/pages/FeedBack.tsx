import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
    setUserEmail("");
  };

  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('qbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            I'd Love to Hear From You!
          </h1>
          <p className="text-sm text-gray-600">
            Help us improve our QR Code Generator by sharing your thoughts!
          </p>
        </header>

        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about your experience using our app..."
              className="w-full px-4 py-2 border rounded-md resize-none"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email (optional)
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="example@example.com"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#001247] text-white rounded-md hover:bg-blue-800"
          >
            Submit Feedback
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-gray-600 text-sm">Or reach out directly via:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:emmanuelmitchell1998@gmail.com"
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a
              href="https://wa.me/076427304" // Replace with your WhatsApp number
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(-1)} // Navigate back
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-400"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
