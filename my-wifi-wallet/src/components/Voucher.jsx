import React from 'react';

const Voucher = () => {
  return (
    <>
      <div className='text-center mt-10 w-full'>
        <div className='bg-custom-transparent-gradient mb-10 p-1 shadow-lg w-96 mx-auto text-center flex flex-col items-center justify-center text-white'>
          <p className='mb-4'>
            Enter M-pesa code below from the payment you made <br /> (e.g : QAWR95MFHQQQ)
          </p>
          <form className='flex flex-col items-center w-full'>
            <input
              type='text'
              placeholder='Enter M-pesa Code'
              required
              className='w-60 p-2 mb-4 rounded bg-gray-800 text-white'
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              RECONNECT
            </button>
          </form>
        </div>

        <div className='bg-custom-transparent-gradient mb-10 p-1 shadow-lg w-96 mx-auto text-center flex flex-col items-center justify-center text-white'>
          <h3 className='text-2xl font-bold mb-4'>Voucher Recharge</h3>
          <p className='mb-4'>(Call Admin for Voucher recharge in case your payment is not successful)</p>
          <form className='flex flex-col items-center w-full'>
            <input
              type='text'
              placeholder='Enter Voucher Code'
              required
              className='w-60 p-2 mb-4 rounded bg-gray-800 text-white'
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              ACTIVATE YOUR VOUCHER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Voucher;
