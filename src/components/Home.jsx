
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-[#a22262]'>Bonjour, je m'rye</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Emile Fourtane</h1>
            <h2 className='text-4xl sm:test-7xl font-bold text-[#8892b0]'>Je suis un développeur Front-End</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] '>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus porro beatae temporibus a odio tempora delectus esse voluptas quibusdam distinctio atque quam placeat, corrupti, perferendis amet cumque. Enim, ut nemo.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi vitae eveniet, cumque sequi, sint dignissimos pariatur dolor eos modi autem doloribus tempora. Sequi minima vitae voluptatem quam debitis rem. Optio?
            </p>
            <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Mes réalisations  
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 '/> 
            </span>
             </button>
             </div>

        </div>
    </div>
  )
}

export default Home