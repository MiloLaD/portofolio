import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-[#0a192f] h-screen text-gray-300 '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid-cols-2 gap-8 '>
                
                
                <div className=' pb-8 pl-4'>
                    <p className='text-4xl font-bold py-3 inline border-b-4 border-[#a22262]'>À propos</p>
                </div>
                <div>  </div>  
            </div>
                
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-4xl font-bold'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  dicta veritatis ut aliquid inventore ducimus aspernatur animi? </p>
                        </div>    
                
                <div>
                    <p> Lorem ipsum dolor sit, amet consectetur aiae ducimus earum ratione, totam quis fuga eligendi quibusdam.</p>
                     </div>
            </div>

            <div className='tailleX bg-white'></div>
                   


             
        </div>
    </div>
  )
}

export default About;