import React from 'react'
import { NavLink } from 'react-router-dom';
import Lottie from "lottie-react";
// import heroimage from "../assets/7358602-removebg-preview.png";
import herolottie from "../assets/New-file (4).json"
import About from './About';
import Skil from './Skil';
import Projects from './Projects';



function Home() {
  return (
    <>
    <section className='home-section section'>
    <div className='container md:grid grid-cols-2 items-center gap-2'>
    <div className='home-content flex flex-col justify-center md:items-center gap-3'>
      <h1 className=' text-3xl md:text-5xl'>Hii I'm Anchal</h1>
      <h2 className=' text-2xl md:text-3xl font-bold text-purple-600'>Frontend Developer</h2>
      <div>      <button className='border-2 p-2 rounded-lg '><NavLink to="/Contact">Contact Me</NavLink></button></div>

    </div>
        <div className='home-img'>
        <Lottie animationData={herolottie}></Lottie>
       {/* <img src={heroimage} alt='hero image' height={300} width={400} className=''></img> */}
       </div>
    </div>

    </section>
    <About></About>
    <Skil></Skil>
    <Projects></Projects>
   
    </>
  )
}

export default Home
