import React from 'react'

const Voucher = () => {
  return (
    <>
    <div className='text-center'>
    <div>
     <p>Enter M-pesa code below from the payment you made <br/> (e.g : QAWR95MFHQQQ)</p> 
     <form>
        <input type='text' placeholder='Enter M-pesa Code' required />
     </form>
    </div>

    <div className=''>
        <h3>Voucher Recharge</h3>
    <p>"(Call Admin for Voucher recharge incase your payment is not successful)"</p> 
     <form>
        <input type='text' placeholder='Enter Voucher Code' required />
     </form>
    </div>
    </div>
    </>
  )
}

export default Voucher
