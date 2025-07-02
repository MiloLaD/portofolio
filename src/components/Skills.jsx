import React from 'react';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JS from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import Reacting from '../assets/react.png'
import NextJs from '../assets/nextJs.png'

const Skills = () => {
  return (
<div name='skills'className='bg-[#0a192f] w-full h-screen  text-gray-300'>
        {/*container*/}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#a22262]  py-1'>Experience</p>
                <p className='py-4'>Voici les technologies avec lesquelles j'ai travaillé</p>
        </div>
 
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='ny-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
                <p className='ny-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JS} alt='HTML icon' />
                <p className='ny-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Reacting} alt='HTML icon' />
                <p className='ny-4'>REACT JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
                <p className='ny-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NextJs} alt='HTML icon' />
                <p className='ny-4'>NEXT JS</p>
            </div>
            
        </div>
    
    
    
    </div>
            
            
</div>
  )
}

export default Skills