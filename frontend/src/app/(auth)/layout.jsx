import Image from 'next/image'
import React from 'react'

function Layout({children}) {
  return (
    <>
    <div className='flex h-[100vh] w-[100vw] bg-slate-200'>
        <div className='w-[60%] h-full flex justify-center items-center bg-white'>
            {children}
        </div>
        <div className='w-[40%] bg-[#ffede1] h-full flex items-end justify-start pb-10'>
            <div className="size-[530px] bg-[url(/cart-man.png)] bg-center bg-cover -ml-28">
            </div>
        </div>
    </div>
    <div className='bg-[#FFCEAE] h-[1px] w-full absolute bottom-10'></div>
    </>
  )
}

export default Layout