import SignatureCanvas from 'react-signature-canvas';
import React, { useState, useRef, RefObject } from 'react';

interface CanvasProps {
  onSave: (signatureData: string) => void;
}

const Canvas: React.FC<CanvasProps> = ({ onSave }) => {
  const signatureCanvasRef: RefObject<SignatureCanvas> = useRef(null);

  const handleClearCanvas = () => {
    if (signatureCanvasRef.current) {
      signatureCanvasRef.current.clear();
    }
  };

  const handleSaveCanvas = () => {
    if (signatureCanvasRef.current) {
      const signatureData = signatureCanvasRef.current.toDataURL();
      onSave(signatureData);
    }
  };

  return (
    <div>
      {/* Signature canvas */}
      <SignatureCanvas
        ref={signatureCanvasRef}
        penColor="black"
        canvasProps={{
          width: 400,
          height: 200,
          className: 'signature-canvas',
        }}
      />

      <div className="flex justify-center mt-4">
        <button
          onClick={handleClearCanvas}
          className="mr-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Clear
        </button>
        <button
          onClick={handleSaveCanvas}
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Canvas;
