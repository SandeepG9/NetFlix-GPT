import React, { useState } from 'react'
import Signup from './Signup'
import { useRef } from 'react'

const Login = () => {

 const [isSignin,setSignin] = useState(true)
  
 function toggleSignin(event)
 {
    event.preventDefault()
    setSignin(!isSignin)
 }

  return (
    <div>
      <div className='w-40 absolute z-10'><img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" /></div>
      <div><img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg" alt="" /></div>
      <div className='flex justify-center items-center '>
        <div className=' bg-black pt-5 pb-5 pl-5 pr-5 bg-opacity-80 w-96 z-10 flex items-center justify-center rounded-md mt-52'>
            <form action="">
            <h1 className='text-white p-2 text-3xl font-bold mb-2'>{isSignin?"Sign Up":"Sign In"}</h1>

                {isSignin && (<Signup/>)
                }
                    <input type="text" className='w-80  rounded-md border-white m-2  p-4' placeholder='Enter email Id or phone number' />
                <br />
                    <input type="password" className='w-80  rounded-md border-white m-2 transparent p-4' placeholder='Enter password' />
                <br />
                <button className='bg-red-600 text-white text-lg bg-opacity-100 p-2 m-2 w-80 rounded-md '>{isSignin?"Sign Up":"Sign In"}</button>
                <p className='m-2 p-2 text-white'>Click here for <span className='hover:cursor-pointer text-red-400 '><button className='list-none' onClick={toggleSignin}>{isSignin?"Sign In":"Sign Up"}</button></span> </p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login