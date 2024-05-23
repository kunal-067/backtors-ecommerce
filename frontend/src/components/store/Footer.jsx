import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const links = [{
    title: 'About Us',
    src: '#'
}, {
    title: 'Contact Us',
    src: '#'
}, {
    title: 'Our services',
    src: '#'
}, {
    title: 'Blogs',
    src: '#'
}, {
    title: 'Carriers',
    src: '#'
}]
function Footer() {
    return (
        <div>
            <div className='flex justify-between  py-[40px] bg-[#FAFAFA] px-[195px] mt-20 shadow-sm'>
                <h2 className='text-[#252B42] text-[24px] leading-[32px] font-bold'>Bandage</h2>
                <div className='flex text-[#23A6F0]'>
                    <a href="#"><Facebook className='size-[32px] fill-[#23A6F0] m-2' /></a>
                    <a href="#"><Instagram className='size-[32px] m-2 drop-shadow-2xl' /></a>
                    <a href="#"><Twitter className='size-[32px] m-2 fill-[#23A6F0]' /></a>
                </div>
            </div>
            <div className='h-[272px] bg-[#fff] flex mt-20 px-[195px] justify-between'>
                <FootCols links={links} />
                <FootCols links={links} />
                <FootCols links={links} />
                <FootCols links={links} />

                <div>
                    <h2 className='text-[#252B42] text-[16px] leading-[24px] font-bold mb-[10px]'>Get in Touch</h2>
                    <div className='h-[32px]'>
                        <input className='border-2 border-gray-300 bg-gray-100 p-3 rounded-l-sm border-r-0' type='mail' placeholder='Your mail' />
                        <button className='bg-[#23A6F0] text-[#E6E6E6] font-semibold p-3 border-2 border-[#23A6F0] rounded-r-sm hover:opacity-70'>Subscribe</button>
                        <p className='text-[12px] leading-[28px] text-gray-500 font-bold'>Get in touch by subscring it</p>
                    </div>
                </div>

            </div>
            <div className='bg-[#FAFAFA] py-[25px] px-[195px] text-[#737373] font-bold text-[14px]'>Made with love by <a href="#">Kunal Shroff</a></div>
        </div>
    )
}

function FootCols({ head, links }) {
    return (
        <div className=' list-none'>
            <h2 className='text-[#252B42] text-[16px] leading-[24px] font-bold mb-[10px]'>Company Info</h2>
            {
                links?.map((link, index) => (
                    <li className='text-[14px] font-bold leading-[24px] text-[#737373]' key={index} ><a href={link.src}>{link.title}</a></li>
                ))
            }
        </div>
    )
}

export default Footer