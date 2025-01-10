import React from 'react';

const Homepage = () => {
  return (
    <div className='w-screen'>
      {/* Login Section */}
      <div className='bg-custom-gradient mb-14 shadow-lg mx-auto w-6/12 sm:mb-16'>
        <h1 className="text-1xl text-center text-neutral-100 sm:p-3 sm:text-2xl">EMBAONE WIFI LOGIN</h1>
      </div>

      {/* How to Purchase Section */}
      <div className='bg-custom-transparent-gradient mb-14 sm:mb-16 p-3 shadow-lg w-9/12 mx-auto flex flex-col items-center justify-center text-white'>
        <h2 className='underline p-5 text-center text-2xl'>HOW TO PURCHASE:</h2>
        <div className='text-start text-lg w-full md:text-start'>
          <p className='p-1 text-sm'>1. Tap on Your Preferred Package.</p> 
          <p className='p-1 text-sm'>2. Enter Your Phone Number</p> 
          <p className='p-1 text-sm'>3. Click "PAY NOW"</p>
          <p className='p-1 text-sm'>4. Enter M-pesa Pin and WAIT for 30 seconds for M-pesa Authentication</p> 
        </div>
        <p className='p-2 text-center'>(Customer care Contact: 07792216613 / 0748734657)</p>
      </div>
    </div>
  );
};

export default Homepage;
