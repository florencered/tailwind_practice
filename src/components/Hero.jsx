import React from 'react' 
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <div className='text-white md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
    <div className=' mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'> 
    <p className='text-[#00df9a] font-bold p-2'>LET'S GROW OLD TOGETHER</p>  
<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with our world.</h1> 
<div className='justify-center items-center '> 
<p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>Let's join together to </p>
<Typewriter
options={{
    autoStart:true, 
    loop:true,
}}
  onInit={(typewriter) => {
    typewriter.typeString(' Live')
      .pauseFor(2000)
      .deleteAll()
      .start()
    typewriter.typeString(' Love') 
    .pauseFor(2000)
      .deleteAll()
      .start() 
    typewriter.typeString(' Laugh') 
      .pauseFor(2000)
      .deleteAll()
      .start()
  }}
/>
</div> 
<button className='bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto py-3 my-9 text-black text-xl'>Get Started</button>

    </div>
        
    </div>
  )
}
