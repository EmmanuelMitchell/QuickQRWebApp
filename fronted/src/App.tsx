import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeGenerator from "./pages/QRCodeGenertore";
import FeedbackPage from "./pages/FeedBack";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRCodeGenerator />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  );
}
