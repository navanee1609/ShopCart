import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
     let [menuToggle,setMenuToggle] =useState(false)
     let [socialToggle,setSocialToggle]= useState(false)
     let [headerFixed,setHeaderFixed] = useState(false)

    //  addeventListener (for scrolling)

     window.addEventListener('scroll',()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }
     })
  return (
   
    <header>
        {/* header top start */}

        <div>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'> <span>Create Account</span>
                    </Link>
                    <Link to='/login'>Log in</Link>

                </div>

            </div>
        </div>
         



    </header>
  )
}

export default NavItems