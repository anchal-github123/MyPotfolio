import React from 'react'
import aboutimg from "../assets/7358653-removebg-preview.png"
function About() {
  return (
    
    <section className='about-section section bg-slate-950 rounded-xl'>
   <div className='conatiner'>
   <h2 className='text-center text-2xl p-3 '>About Me</h2>
    <div className='md:grid grid-cols-2 items-center gap-2'>

        <div className='about-img flex justify-center'>
          <img src={aboutimg} alt="image of a girl" height={200} width={350}></img>
        </div>
        <div className='about-content flex flex-col justify-center items-center gap-2'>
        <h3 className='text-xl text-purple-600'><span></span>Frontend Developer</h3>
        <p className='text-gray-300 text-sm md:text-base'>"I'm Anchal Nayak, a frontend developer with a passion for creating dynamic, user-friendly web applications.I focus on clean code and responsive design to bring seamless user experiences to life. I enjoy continuously enhancing my skills to stay on the cutting edge of frontend technologies."</p>
        <div>      <button className='border-2 p-2 rounded-lg '><a href="anchal_resume.docx">Download CV</a></button></div>
        </div>
      
    </div>
</div>
    </section>
  )
}

export default About
