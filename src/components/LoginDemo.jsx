import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();

const LoginDemo = () => {
  let handleLogin =()=>{
    signInWithPopup(auth, provider)
  }
  return (
    <div className='p-5 m-5'>
      <button className='bg-primary px-4 text-white'>Login</button>
    </div>
  )
}

export default LoginDemo