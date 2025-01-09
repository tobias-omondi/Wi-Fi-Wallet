import React from 'react'

const Voucher = () => {
  return (
    <>
    <div className='text-center mt-10 ml-5'>
    <div className='bg-custom-transparent-gradient p-5 text-white'>
     <p>Enter M-pesa code below from the payment you made <br/> (e.g : QAWR95MFHQQQ)</p> 
     <form>
        <input type='text' placeholder='Enter M-pesa Code' required />
        <button type='submit'>RECONNECT</button>
     </form>
    </div>

    <div className='bg-custom-transparent-gradient p-5 text-white mt-10'>
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
