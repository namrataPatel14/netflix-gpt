import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute flex w-full bg-gradient-to-r from-black h-full top-0 left-0 z-20'>
      <div className=' max-w-xs w-screen self-center mb-10 ml-16 '>
        <h1 className=' text-white text-3xl font-semibold'>{title}</h1>
          <p className='text-white text-xs my-3  mr-10'>{overview}</p>
          <div className='flex mt-5'>
              <button className=' bg-white text-black text-lg px-10 py-2  rounded hover:bg-opacity-50'>Play</button>
              <button className='mx-2 bg-gray-500 text-white px-10 py-2  text-lg bg-opacity-50 rounded'>More Info</button>
          </div>
      </div>
        
    </div>
  )
}

export default VideoTitle