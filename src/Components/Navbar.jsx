import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
    const[mobileopen,setMobileopen]=useState(false);
    function mobileNavBar()
    {
        setMobileopen(!mobileopen)
    }
    const navlink=[
        {
        link:"Home",
        path:"/"
    },
    {
        link:"About",
        path:"/About"
    },
    {
        link:"Skill",
        path:"/Skil"
    },
    {
        link:"Project",
        path:"/Projects"
    },
    {
        link:"Contact",
        path:"/Contact"
    }
   ]
  return (
    
    <section className='nav-section section'>
        <div className='container'>
            <nav className='flex justify-between'>
                <div className='logo'>
                <h3 className=' text-xl font-medium '>Potfolio</h3>

                </div>
                <ul className='hidden md:flex gap-10 text-lg'>
                  {
                    navlink.map((ele,ind)=>{
                        return(<li key={ind}><NavLink to={ele.path}>{ele.link}</NavLink></li>)
                    })
                  }
                </ul>
                <button className='md:hidden' onClick={mobileNavBar}>
                {mobileopen? <RxCross2 className='text-xl'></RxCross2>:<FaBarsStaggered></FaBarsStaggered>}
                </button>
                
            </nav>
        

                { mobileopen&& <div className='fixed z-30 bg-black w-full'>
                    <ul className='flex flex-col gap-8 text-lg  pt-2'>
                  {
                    navlink.map((ele,ind)=>{
                        return(<li key={ind}><NavLink to={ele.path}>{ele.link}</NavLink></li>)
                    })
                  }
                </ul>

                </div>}
           </div>
    </section>
  )
}

export default Navbar;
