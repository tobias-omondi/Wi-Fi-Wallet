import React, { useState } from 'react'
import { EyeClosed, Eye } from 'lucide-react'

const Login = () => {

    const [showPassowrd, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassowrd);
    };

  return (
    <div className='bg-custom-transparent-gradient mb-10 p-5 shadow-lg w-2/3 mx-auto text-center flex flex-col items-center justify-center text-white'>
      <h3>EmbaOne Wifi Login</h3>
      <p>(Enter your Username & Password)</p>
      <form>
        <div>
        <input type='text' placeholder='User Name:' required />
        </div>

        {/* password  with toggle*/}
        <div className='relative'>
        <input type={showPassowrd ? 'text' : 'password'} placeholder='Password' required />
        </div>
        <button type='button' onClick={togglePasswordVisibility} >
            {showPassowrd ? <Eye size={15} /> : <EyeClosed size={15} />}
        </button>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;
