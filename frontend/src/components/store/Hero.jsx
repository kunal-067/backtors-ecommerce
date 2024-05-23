import Image from 'next/image'
import React from 'react'
import '@/styles/animations.css'

export function Hero1() {
    return (
        <div className="min-h-[calc(100vh-124px)] w-full bg-[url(/carousel/hero-1.jpg)] bg-cover bg-center font-bold text-[#fff]">
            <div className='ml-[197.5px] pt-[162px]'>
                <p className='text-[16px] leading-[24px]'>SUMMAR 2024</p>
                <h2 className='text-[58px] leading-[80px] mt-8'>NEW COLLECTIONS</h2>
                <p className='text-[20px] leading-[30px] mt-10 text-[#FAFAFA]'>We know how large objects will act but. <br /> things on small scale.</p>

                <button className='customBgAnimateH-1 text-[24px] mt-8 w-fit h-fit leading-[32px] border-[3px] border-[#2DC071] relative text-[#fff] py-[12px] px-[37px] rounded-[5px] hover:text-[#2DC071]'>
                    <div id='animate-h-b-1' className={`w-full rounded-[5px] h-full bg-[#2DC071] absolute top-0 left-0 transition-colors duration-1000`}>
                    </div>
                    Shop Now
                    <div className='absolute z-10 text-nowrap top-0 left-0 py-[12px] px-[37px]'>
                        Shop Now
                    </div>
                </button>
                {/* <button className='text-[24px] leading-[32px] bg-[#2DC071] mt-8 py-[15px] px-[40px] rounded-[5px]'>Shop Now</button> */}
            </div>
        </div>
    )
}

export function Hero2() {
    return (
        <div className='bg-[url(/carousel/hero-2-bg.jpg)] h-[700px] w-full flex text-[#fff] justify-between px-[197.5px]'>
            <div className='pt-[162px]'>
                <p className='text-[16px] leading-[24px]'>SUMMAR 2024</p>
                <h2 className='text-[58px] leading-[80px] mt-8'>Vita Classic <br /> Product</h2>
                <p className='text-[20px] leading-[30px] mt-10 text-[#FAFAFA]'>We know how large objects will act but. <br /> things on small scale.</p>
                <div className='flex font-bold text-[24px] items-center justify-center h-fit mt-8'>$16.48
                    <button className='text-[24px] leading-[32px] bg-[#2DC071] ml-4 py-[15px] px-[40px] rounded-[5px]'>Shop Now</button></div>
            </div>
            <Image src={'/carousel/hero-2.png'} width={510} height={685} alt='img' className='mt-20' />
        </div>
    )
}