import React, { useState } from 'react';

const Login = ({handlelogin}) => {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handlelogin(Email,Pass);
    console.log(Email);
    console.log(Pass);
    setEmail('');
    setPass('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Welcome Back</h2>
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-600">Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="mt-2 p-4 border-2 border-black-700 rounded-full text-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 transition-all text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium text-gray-600">Password</label>
            <input
              value={Pass}
              onChange={(e) => setPass(e.target.value)}
              required
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="mt-2 p-4 border-2 border-gray-300 rounded-full text-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 transition-all text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white font-bold bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
