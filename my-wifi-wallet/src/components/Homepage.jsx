import React from 'react';

const Homepage = () => {
  return (
    <div className='mt-5 w-full max-w-full'>
      {/* Login Section */}
      <div className='bg-custom-gradient mb-10 shadow-lg w-full mx-auto'>
        <h1 className="text-2xl text-center text-neutral-100">EMBAONE WIFI LOGIN</h1>
      </div>

      {/* How to Purchase Section */}
      <div className='bg-custom-transparent-gradient mb-10 p-5 shadow-lg w-full mx-auto text-center flex flex-col items-center justify-center text-white'>
        <h2 className='underline p-5 text-center text-2xl'>HOW TO PURCHASE:</h2>
        <div className='text-start text-lg w-full md:text-center'>
          <p className='p-1'>1. Tap on Your Preferred Package.</p> 
          <p className='p-1'>2. Enter Your Phone Number</p> 
          <p className='p-1'>3. Click "PAY NOW"</p>
          <p className='p-1'>4. Enter M-pesa Pin and WAIT for 30 seconds for M-pesa Authentication</p> 
        </div>
        <p className='p-2'>(Customer care Contact: 07792216613 / 0748734657)</p>
      </div>
    </div>
  );
};

export default Homepage;
