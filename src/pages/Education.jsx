import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='flex-1 m-10 text-center space-y-10 animate-slidein'>
      <p className='font-serif text-slate-600 text-sm'>Oct 2018-Sept 2023</p>
      <h1 className='text-3xl font-bold font-serif '>M.Sc Mechatronics</h1>
      <h1 className='text-xl  font-serif '>TECHNISCHE UNIVERSITÄT HAMBURG HARBURG</h1>
      
      <img src="https://ea17-ai.github.io/Portfolio/images/tuhh.png" className='w-full rounded-lg'/>
      </div>
      <hr className='bg-slate-500'/>
      <div className='flex-1 m-10 text-center space-y-10 animate-slidein700'>
      <p className='font-serif text-slate-600 text-sm'>Mar 2012-Mar 2016</p>
      <h1 className='text-3xl font-bold font-serif '>B.Tech Mechatronics</h1>
      <h1 className='text-xl  font-serif '>SRM UNIVERSITY</h1>

      <img src="https://ea17-ai.github.io/Portfolio/images/srm.png" className='w-full  rounded-lg'/>
      </div>

    </div>
  )
}

export default Education
