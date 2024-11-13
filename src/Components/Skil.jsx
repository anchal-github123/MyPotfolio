import React from 'react';
import { FaHtml5 ,FaCss3Alt,FaJsSquare,FaNpm,FaReact} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
function Skil() {
  const tool=[
    { tlogo:<FaHtml5 className='text-orange-500 text-2xl'></FaHtml5>,
      tname:"HTML",
      tuse:"User Interface"
    },
    { tlogo:<FaCss3Alt className='text-sky-600 text-2xl'></FaCss3Alt>,
      tname:"CSS",
      tuse:"User Interface"
    },
    { tlogo:<FaJsSquare className='text-yellow-500 text-2xl'></FaJsSquare>,
      tname:"Javascript",
      tuse:"Interaction"
    },
    { tlogo:<SiTailwindcss className='text-sky-400 text-2xl'></SiTailwindcss>,
      tname:"Tailwindcss",
      tuse:"Framework"
    },
    { tlogo:
    <SiVite className='text-purple-500 text-2xl'></SiVite>,
      tname:"VITE",
      tuse:"Frontend Tool"
    },
    { tlogo:<FaNpm className='text-red-500 text-2xl'></FaNpm>,
      tname:"NPM",
      tuse:"Package Manger"
    },
    { tlogo:<FaReact className='text-sky-400 text-2xl'></FaReact>,
      tname:"React",
      tuse:"Framework"
    }

  ]
 
  return (
    <section className='skill-section section'>
    <div className='container'>
      <h2 className='text-center text-2xl p-4'>Essential Tools I use</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3'>
      {
        tool.map((ele,ind)=>{
          return(
            <div className='tool-box flex  items-center flex-col bg-slate-900 rounded-lg' key={ind} >
            <div className='logo flex items-center gap-2'> {ele.tlogo}
            <p className='text-white'>{ele.tname}</p>
            </div>
            <div className='tool-content'>
           <p>{ele.tuse}</p>
            </div>
          </div>)
        })
      }
      </div>
    </div>

    </section>
    
  )
}

export default Skil;
