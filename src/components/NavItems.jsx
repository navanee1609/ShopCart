import React, { useState } from 'react'

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
    <div>NavItems</div>
  )
}

export default NavItems