'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { type } from 'os';
import Link from 'next/link';

type datas={
    name:string;
    date:string;
    signatureDataURL:string;
}



function Datatable() {
    const router = useRouter()
    const [formData, setFormData] = useState<datas[]>([]);
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);


    // Fetch form data from local storage when the component mounts
    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setFormData(parsedData);
        } else {
          setFormData([]);
        }
      }, []);
      

    // Function to handle data deletion
    const handleDelete = () => {
        if (deleteIndex !== null) {
            const updatedData = [...formData];
            updatedData.splice(deleteIndex, 1);
            setFormData(updatedData);
            localStorage.setItem('formData', JSON.stringify(updatedData));
            setDeleteIndex(null);
        }
    };

    const handleDownload = (url: string, name: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        link.click();
    };

    // Function to cancel the delete operation
    const handleCancelDelete = () => {
        setDeleteIndex(null);
    };

    return (
        <div>
          {formData.length === 0 ? (
            <div className="flex flex-col items-center justify-center" style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <img className="object-cover object-center rounded" alt="hero" src="/No data-pana.png" style={{ width: '600px', height: '600px' }} />
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => router.push('/add')}>Add Signature</button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center p-4">
                {/* Add Signature button */}
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => router.push('/add')}>Add Signature</button>
              </div>
              {formData.map((data, index) => (
                 <div key={index} className='flex flex-col items-center p-4'>
                 <div className="container mx-auto" style={{ maxWidth: "600px" }}>
                     <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                         <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg " src={data.signatureDataURL} alt="" />
                         <div className="flex flex-col justify-between p-4 leading-normal ml-4">
                             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.date}</h5>
                             <button
                                 type="button"
                                 className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                 onClick={() => setDeleteIndex(index)} // Set the delete index on click
                             >
                                 Delete
                             </button>
                             <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"  onClick={() => handleDownload(data.signatureDataURL, `${data.name}_signature.png`)}>
                                 <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                 <span>Download</span>
                             </button>
                         </div>
                     </a>
                 </div>
             </div>
              ))}
            </>
          )}
      
      {deleteIndex !== null && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <p>Are you sure you want to delete this data?</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded mr-2"
                                    onClick={handleDelete}
                                >
                                    Confirm
                                </button>
                                <button
                                    className="text-black bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                                    onClick={handleCancelDelete}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
      );


}

export default Datatable;









  