import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo/logo.png";

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
   
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>


        {/* header top start */}

        <div className={`header-top d-md-none ${socialToggle ? "open" : ""} `} >
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'> <span>Create Account</span>
                    </Link>
                    <Link to='/login'>Log in</Link>

                </div>

            </div>
        </div>

        {/* header middle */}


        <div className="header-bottom">
        <div className="container">
            <div className="header-wrapper">
                {/* logo  */}
                        <div className="logo-search-acte">
                        <div className="logo">
                            <Link to="/">
                            <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        


    </header>
  )
}

export default NavItems