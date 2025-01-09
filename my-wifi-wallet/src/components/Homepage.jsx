import React from 'react';

const Homepage = () => {
  return (
    <div className='mt-10 w-full ml-5'>
      <div className='bg-custom-gradient mb-10 p-5 shadow-lg w-90 mx-auto text-center'>
        <h1 className="font-medium text-2xl">
          EMBAONE WIFI LOGIN
        </h1>
      </div>
      <div className=' flex flex-col items-center justify-center bg-custom-transparent-gradient text-yellow-50 shadow-xl p-5'>
        <h2 className='underline p-5 text-center text-2xl'>HOW TO PURCHASE</h2>
        <div className='text-start text-lg '>
        <p className='p-1'>1. Tap on Your Preferred Package.</p> 
        <p className='p-1'>2. Enter Your Phone Number</p> 
        <p className='p-1'>3. Click "PAY NOW"</p>
        <p className='p-1'>4. Enter M-pesa Pin and WAIT for 30sec for M-pesa Authentication</p> 
        <br/> 
        </div>
        <p className='p-2'>(Customer care Contact 07792216613/ 0748734657)</p>
      </div>
    </div>
  );
};

export default Homepage;
