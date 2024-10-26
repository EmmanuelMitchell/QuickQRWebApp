export default function QRCodeDisplay({
  qrColor,
  setQrColor,
  bgColor,
  setBgColor,
  onImageChange,
}: any) {
  return (
    <section className="flex flex-col items-center space-y-4">
      <div
        className="w-48 h-48 flex items-center justify-center text-gray-500"
        style={{
          backgroundColor: bgColor,
          color: qrColor,
        }}
      >
        {/* Placeholder for QR Code Image */}
        QR Code Image
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
          Download PNG
        </button>
        <button className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
          Download SVG
        </button>
        <button className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
          Download PDF
        </button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <label className="text-sm font-medium text-gray-700">QR Color</label>
        <input
          type="color"
          value={qrColor}
          onChange={(e) => setQrColor(e.target.value)}
        />
        <label className="text-sm font-medium text-gray-700">
          Background Color
        </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <label className="text-sm font-medium text-gray-700">
          Upload Center Image
        </label>
        <input type="file" accept="image/*" onChange={onImageChange} />
      </div>
    </section>
  );
}
