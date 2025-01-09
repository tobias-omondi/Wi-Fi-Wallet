import React from 'react'

const Voucher = () => {
  return (
    <>
    <div className='text-center mt-10 w-full'>
    <div className='bg-custom-transparent-gradient mb-10 p-5 shadow-lg w-2/3 mx-auto text-center flex flex-col items-center justify-center text-white'>
     <p>Enter M-pesa code below from the payment you made <br/> (e.g : QAWR95MFHQQQ)</p> 
     <form>
        <input type='text' placeholder='Enter M-pesa Code' required />
        <button type='submit'>RECONNECT</button>
     </form>
    </div>

    <div className='bg-custom-transparent-gradient mb-10 p-5 shadow-lg w-2/3 mx-auto text-center flex flex-col items-center justify-center text-white'>
        <h3>Voucher Recharge</h3>
    <p>"(Call Admin for Voucher recharge incase your payment is not successful)"</p> 
     <form>
        <input type='text' placeholder='Enter Voucher Code' required />
        <button type='SUBIMIT' >ACTIVATE YOUR VOUCHER</button>
     </form>
    </div>
    </div>
    </>
  )
}

export default Voucher
