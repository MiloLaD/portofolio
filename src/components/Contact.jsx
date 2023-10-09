import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/87f023d2-03fe-4dc6-9052-3a30462f61e1' className='flex flex-col max-w-[600px] w-full ' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#a22262] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form or shoot me an email - emilefp@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f1] p-2 mb-4 ' type='text' placeholder='Nom' name='name'/>
            <input className='ny-4 p-2 bg-[#ccd6f1] mb-4 ' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f1] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#a22262] px-4 py-3 my-8 mx-auto flex items-center'>Collaborons ! </button>
        </form>

    </div>
  )
}

export default Contact