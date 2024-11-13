import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
function Contact() {
  return (
    <section>
        <div className='container'>
            <h2 className='text-2xl pb-3'>Contact Me</h2>
            <div className='flex gap-3'>
            <NavLink to="https://www.linkedin.com/in/anchal-nayak-a5615729a"><FaLinkedin className='text-2xl text-blue-600'></FaLinkedin></NavLink>
            <NavLink to="anchalnayak2003@gmail.com"><FaGithub className='text-2xl '></FaGithub></NavLink>
            <NavLink to="https://github.com/anchal-github123"><MdOutlineEmail className='text-2xl text-red-300'></MdOutlineEmail></NavLink>
            </div>
         </div>
    </section>
  )
}

export default Contact
