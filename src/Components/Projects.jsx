import React from 'react'
import { NavLink } from 'react-router-dom';
// import linkofweatherapp from "https://github.com/anchal-github123/WeatherApplication";
import weatherinmg from '../assets/freepik__upload__88789-min.png';
import Ecommerceimg from "../assets/rb_4290-min.png";
import Websiteimg from "../assets/rb_4501-min.png";
function Projects() {
  const project=[
    {
      pname:"Weather App",
        pimg:weatherinmg,
      source:"https://github.com/anchal-github123/WeatherApp2",  
      demo:"https://anchal-github123.github.io/WeatherApplication/"
    },
    {
      pname:"Ecommerce",
        pimg:Ecommerceimg,
      source:"https://github.com/anchal-github123/Ecommerce",  
      demo:" https://anchal-github123.github.io/Ecommerce/"
    },
    {
      pname:"Simple Website",
        pimg:Websiteimg,
      source:"https://github.com/anchal-github123/Simplewebsite",  
      demo:"https://anchal-github123.github.io/Simplewebsite/"
    }
]



  return (
    
    <section className='project-section section'>
        <div className='container'>
        <h2 className='text-2xl pb-3'>Projects</h2>
        <div className='project-container grid gap-4 md:grid-cols-3'>
     
        {


          project.map((ele,ind)=>{
        return(

  <div key={ind} className=' rounded-lg bg-slate-950 flex flex-col items-center'>
  <div className='text-purple-600'>{ele.pname}</div>
  <img src={ele.pimg} width={200} height={200}></img>
<div className='flex items-center gap-4 p-4'>
<button className='border p-1 rounded-lg bg-purple-600'>   
<a
      href={ele.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="demo-button">
     
  Demo</a></button>
<button className='border p-1 rounded-lg ' ><a href={ele.source}>Source</a></button>
</div>
</div>
        )
     

      })



        }



        </div>

        </div>
    </section>
  )
}

export default Projects
