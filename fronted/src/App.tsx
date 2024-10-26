import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeGenerator from "./pages/QRCodeGenerator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QRCodeGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}
