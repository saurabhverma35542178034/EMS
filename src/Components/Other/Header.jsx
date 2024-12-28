import React, { useState } from 'react'

const Header = ({data}) => {

  const LogOut=()=>{
    localStorage.setItem('loggedInUser', "");
    window.location.reload();
  }
  const[userName , setUsername]= useState("userX");
  // if(!data)
  // {
  //   setUsername("Admin");
  // }
  // else
  // {
  //   setUsername(data.firstName);
  // }
  return (
    <div className='flex items-end justify-between text-2xl'>
      <h2 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>{userName}</span></h2>
      <button onClick={LogOut} className='bg-red-500 text-lg font-medium text-white px-2 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
