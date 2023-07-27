'use client'
import React, { useState } from 'react';
import Canvas from './Canvas';
import { useRouter } from 'next/navigation'

const CreationForm = () => {
  const router = useRouter()

  const [showCanvasModal, setShowCanvasModal] = useState(false);
  const [name, setName] = useState('');
  const [signatureDataURL, setSignatureDataURL] = useState('');

  const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };

  const handleAddSignature = () => {
    setShowCanvasModal(true);
  };

  const handleCanvasClose = () => {
    setShowCanvasModal(false);
  };

  const handleCanvasSave = (signatureData: React.SetStateAction<string>) => {
    setSignatureDataURL(signatureData);
    setShowCanvasModal(false);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();


    const submissionId = Date.now().toString();

    console.log('Name:', name);
    console.log('Signature Data URL:', signatureDataURL);
    console.log('Submission ID:', submissionId);
    if (signatureDataURL) {
      localStorage.setItem('signatureImage', signatureDataURL);
    }

    const date = new Date().toLocaleDateString();


    const formData = {
      id: submissionId,
      name,
      signatureDataURL,
      date,
    };

    // Retrieve existing form submissions from local storage
    const existingFormData = JSON.parse(localStorage.getItem('formData')!) || [];
    existingFormData.push(formData);

    // Save the updated form submissions to local storage
    localStorage.setItem('formData', JSON.stringify(existingFormData));

    // Reset the form fields and signature data
    setName('');
    setSignatureDataURL('');
    router.push('/homepage')
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="container mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
          </div>
          <div className="mb-6">
            <button type="button" onClick={handleAddSignature} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Signature</button>
          </div>
          {signatureDataURL && (
            <div className="mt-4">
              <p className="text-center">Your Signature:</p>
              <img
                src={signatureDataURL}
                alt="Signature"
                className="mx-auto mt-2 border border-gray-300 rounded-lg"
                style={{ width: "400px", height: "200px" }}
              />
            </div>
          )}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      {showCanvasModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-md p-6">
            <button onClick={handleCanvasClose}>Close</button>
            <Canvas onSave={handleCanvasSave} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreationForm;
