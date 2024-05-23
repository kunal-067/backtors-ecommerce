import { AlarmClock, LineChart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BlogCard({img}) {
    return (
        <div className='w-[348px]'>
            <div className='relative w-[348px] h-[300px]' style={{backgroundImage:`url(${img})`}}>
                <span className='bg-red-500 text-[#fff] absolute p-1 px-4 top-4 left-4 rounded-sm'>New</span>
            </div>

            <div className='flex flex-col gap-[10px] border-[2px] shadow-sm border-t-0 p-[25px] pb-[35px]'>
                <div className='flex gap-[10px]'>
                    <span className='text-[#8EC2F2] text-[12px] font-[400]'>Google</span>
                    <span className='text-[#737373] text-[12px] font-[400]'>Google</span>
                    <span className='text-[#737373] text-[12px] font-[400]'>Google</span>
                </div>
                <b className='text-[#252B42] text-[25px] font-[400] leading-[30px]'>Loudest à la Madison #1
                    (L&apos;integral)
                </b>
                <p className='text-[#737373] leading-[20px] text-[14px] font-[400] mt-2'>We focus on ergonomics and meeting
                    you where you work. It&apos;s only a
                    keystroke aways
                </p>

                <div className='list-none flex justify-between mt-2'>
                    <li className='flex text-[#737373] text-[12px] font-[400]'><AlarmClock className='text-[#23A6F0] size-[16px] mr-1'/> 22 April 2024</li>
                    <li className='flex text-[#737373] text-[12px] font-[400]'><LineChart className=' text-green-700 mr-1 size-[16px]'/>10 Comments</li>
                </div>

                <a href='#' target='_blank' className='text-[#737373] text-[16px] font-bold flex items-center mt-2 gap-4 p-1 w-fit hover:bg-gray-100'>
                    <span className='mb-[3px]'>Explore</span> 
                    <Image src={'/icons/blue-next.png'} width={12} height={12} alt={'img'}/>
                </a>
            </div>
        </div>
    )
}

export default BlogCard