import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute flex w-full bg-gradient-to-r from-black h-full top-0 left-0 z-20'>
      <div className=' max-w-xs w-full self-center mb-10 ml-16 md:ml-5 md:mb-0 sm:mb-0 sm:ml-5'>
        <h1 className=' text-white text-3xl font-semibold md:text-lg sm:text-lg'>{title}</h1>
        <p className='text-white text-xs my-3 mr-10 md:my-2 sm:my-2'>{overview}</p>
        <div className='flex mt-5 md:mt-4 sm:mt-4'>
          <button className=' bg-white text-black text-lg px-10 py-2 md:py-1 md:text-base md:px-8 sm:py-1 sm:text-base sm:px-8 rounded hover:bg-opacity-50'>Play</button>
          <button className='mx-2 bg-gray-500 text-white px-10 py-2 md:py-1 md:text-base md:px-8 sm:py-1 sm:text-base sm:px-8 text-lg bg-opacity-50 rounded'>More Info</button>
        </div>
      </div>

    </div>
  )
}

export default VideoTitle