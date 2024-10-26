import React, { createContext, useContext, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";

interface QRCodeContextProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  qrColor: string;
  setQrColor: (color: string) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  qrRef: React.RefObject<HTMLDivElement>;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDownloadPNG: () => Promise<void>;
  handleDownloadSVG: () => Promise<void>;
  handleDownloadPDF: () => Promise<void>;
  reset: () => void;
}

const QRCodeContext = createContext<QRCodeContextProps | undefined>(undefined);

export const QRCodeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState("link");
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [file, setFile] = useState<File | null>(null);
  const [inputValue, setInputValue] = useState("");
  const qrRef = useRef<HTMLDivElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDownloadPNG = async () => {
    if (qrRef.current) {
      const dataUrl = await htmlToImage.toPng(qrRef.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "QRCode.png";
      link.click();
    }
  };

  const handleDownloadSVG = async () => {
    if (qrRef.current) {
      const dataUrl = await htmlToImage.toSvg(qrRef.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "QRCode.svg";
      link.click();
    }
  };

  const handleDownloadPDF = async () => {
    if (qrRef.current) {
      const dataUrl = await htmlToImage.toPng(qrRef.current);
      const pdf = new jsPDF();
      pdf.addImage(dataUrl, "PNG", 15, 40, 180, 180);
      pdf.save("QRCode.pdf");
    }
  };

  const reset = () => {
    setActiveTab("link");
    setQrColor("#000000");
    setBgColor("#ffffff");
    setFile(null);
    setInputValue("");
  };

  return (
    <QRCodeContext.Provider
      value={{
        activeTab,
        setActiveTab,
        qrColor,
        setQrColor,
        bgColor,
        setBgColor,
        file,
        setFile,
        inputValue,
        setInputValue,
        qrRef,
        handleImageUpload,
        handleDownloadPNG,
        handleDownloadSVG,
        handleDownloadPDF,
        reset,
      }}
    >
      {children}
    </QRCodeContext.Provider>
  );
};

export const useQRCodeContext = () => {
  const context = useContext(QRCodeContext);
  if (!context) {
    throw new Error("useQRCodeContext must be used within a QRCodeProvider");
  }
  return context;
};
