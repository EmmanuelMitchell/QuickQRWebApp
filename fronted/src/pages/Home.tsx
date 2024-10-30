import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-r from-[#001247] to-indigo-500 text-white"
      style={{ backgroundImage: 'url("qbg.jpg")' }}
    >
      {/* Header */}
      <header className="py-6 shadow-md bg-opacity-80 bg-[#001247]">
        <h1 className="text-3xl font-bold text-center tracking-wide">
          Instant QR Code Creator App
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl bg-white rounded-lg shadow-xl p-10 text-gray-900 space-y-5">
          <h2 className="text-4xl font-semibold">
            Welcome to Instant QR Code Creator App
          </h2>
          <p className="text-lg text-gray-600">
            Generate and scan QR codes for URLs, emails, whatsapp, and more.
            Perfect for businesses, events, and personal use.
          </p>

          <Link
            to="qrcode"
            className="inline-block mt-4 px-8 py-4  bg-[#001247] text-white font-bold rounded-lg shadow-lg hover:bg-[001247] transition duration-200"
          >
            Get Started
          </Link>
          {/* </Link> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001247] text-center py-6">
        <div className="container mx-auto">
          <p className="text-sm">
            © 2024 Instant QR Code Creator App. All rights reserved.
          </p>
          <nav className="flex justify-center space-x-4 mt-3">
            <a href="#about" className="hover:underline text-indigo-300">
              About
            </a>
            <a href="#privacy" className="hover:underline text-indigo-300">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
