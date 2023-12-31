import React from 'react';


const Analytics = () => {
  return (
    <div className='w-full bg-white py-10  px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
            <img className='w-[500px] mx-auto my-4'src='/images/laptop.jpg' alt='working laptop'/> 
            <div className='flex flex-col justify-center'>
               <p className='text-[#00df9a] font-bold text-3xl'>CONNECT WITH PEOPLE SOCIALLY</p> 
               <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Connect with your peers centrally</h1>  
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis, error quaerat cumque quasi, aliquam et velit sed itaque quo atque veniam quis numquam laborum minus a repudiandae ea ipsa?</p> 
               <button className= 'text-[#13d296] bg-black  w-[200px] rounded-md font-bold mx-auto md:mx-0 py-3 my-9 text-2xl'>Let's Connect</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics