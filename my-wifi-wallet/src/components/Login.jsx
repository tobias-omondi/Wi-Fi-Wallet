import React, { useState } from 'react';
import { EyeClosed, Eye } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-custom-transparent-gradient mb-10 p-5 shadow-lg w-full mx-auto text-center flex flex-col items-center justify-center text-white sm:w-3/5'>
      <h3 className='text-2xl font-bold mb-4'>EmbaOne Wifi Login</h3>
      <p className='mb-4'>(Enter your Username & Password)</p>
      <form className='flex flex-col items-center w-full'>
        <div className='mb-4 w-full'>
          <input
            type='text'
            placeholder='User Name:'
            required
            className='w-full p-2 rounded bg-gray-800 text-white'
          />
        </div>

        {/* Password input with toggle */}
        <div className='relative mb-4 w-full'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            required
            className='w-full p-2 rounded bg-gray-800 text-white'
          />
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute right-2 top-1/2 transform -translate-y-1/2'
          >
            {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
          </button>
        </div>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
