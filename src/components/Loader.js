import React from 'react'

const Loader = () => {
  return (
    <div className='h-full w-full px-5'>
        <div className='animate-pulse w-52 h-5 bg-slate-600 m-1 flex-1 mt-20 mb-5'></div>
        <div className='animate-pulse flex'>
            <div className=' px-10 py-5 bg-slate-600 h-64 m-1 flex-1 rounded xs:h-48'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
        </div>
        <div className='animate-pulse w-64 h-5 bg-slate-600 m-1 flex-1 mt-20 mb-5'></div>
        <div className='animate-pulse flex'>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
            <div className=' px-10 py-5 bg-slate-600 h-64  m-1 flex-1 rounded xs:h-48 xs:hidden'></div>
        </div>
    </div>
  )
}

export default Loader