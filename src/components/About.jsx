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
                        <p>Salut, je m'appelle Emile Fourtané, j'ai 23 ans, et je suis un passionné du développement web.
                           
                            Franco-suédois et ayant eu une éxperience à l'étranger importante, je mets cette diversité culturelle au cœur de mon travail </p>
                        </div>    
                
                <div>
                    <p>  Mon intérêt pour le web est né de ma fascination pour la façon dont il relie les gens du monde entier et offre d'innombrables possibilités de créativité. 
                        En dehors de mon attrait pour la programmation, vous me trouverez en train de m'adonner à ma passion pour le sport, de voyager, de rencontrer de nouvelles personnes et d'apprendre de leurs histoires fascinantes.
                         J'espère que vous apprécierez explorer mon portfolio et en apprendre davantage sur mon travail.</p>
                     </div>
            </div>

            <div className='tailleX bg-white'></div>
                   


             
        </div>
    </div>
  )
}

export default About;