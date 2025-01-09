import React from 'react';

const Packages = () => {
  return (
    <div className='bg-custom-transparent-gradient mb-10 p-5 shadow-lg w-full mx-auto text-center flex flex-col items-center justify-center text-white sm:w-3/5'>
      <h2 className='text-2xl font-bold mb-4'>Packages</h2>
      <p className='mb-4'>Choose from our affordable packages below:</p>
      
      {/* Example Package Cards */}
      <div className='flex flex-col sm:flex-row justify-center w-full'>
        {/* Package 1 */}
        <div className='bg-gray-800 p-4 m-2 rounded shadow-md flex flex-col items-center w-full sm:w-1/3'>
          <h3 className='text-xl font-semibold mb-2'>DAILY</h3>
          <p className='mb-2 text-green-800'>Get 3mbps.</p>
          <p className='font-bold'>ksh10/2Hours</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
            Select
          </button>
        </div>

        {/* Package 2 */}
        <div className='bg-gray-800 p-4 m-2 rounded shadow-md flex flex-col items-center w-full sm:w-1/3'>
          <h3 className='text-xl font-semibold mb-2'>DAILY</h3>
          <p className='mb-2 text-green-900'>Get 3mbps.</p>
          <p className='font-bold'>ksh20/12HOURS</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
            Select
          </button>
        </div>

        {/* Package 3 */}
        <div className='bg-gray-800 p-4 m-2 rounded shadow-md flex flex-col items-center w-full sm:w-1/3'>
          <h3 className='text-xl font-semibold mb-2'>DAILY</h3>
          <p className='mb-2 text-green-800'>GET 3MBPS.</p>
          <p className='font-bold'>ksh30/24HOURS</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
