import React from 'react'

const Contact = () => {
  return (
    <div className='flex w-full h-screen bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)] items-center justify-center'>
      <div className='flex flex-col px-8 py-5 bg-white  text-black rounded-lg  items-center space-y-4'>
      <div><p className='text-2xl font-serif'>Contact information</p></div>
        <div className='flex-1 space-x-4 text-sm'><h3>Phone No : +4917675861216</h3></div>
        <div className='flex-1 space-x-4 text-sm'><h3>EmailAddress : eluriabhinav@gmail.com</h3></div>
        
      </div>
    </div>
  )
}

export default Contact
