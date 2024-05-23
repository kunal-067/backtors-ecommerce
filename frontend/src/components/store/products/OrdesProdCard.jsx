import { Droplet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function OrdesProdCard() {
    return (
        <div className='flex flex-col gap-2 cursor-pointer p-2 rounded-md hover:border-[2px]'>
            <div className='size-[180px] flex justify-center items-center bg-[#FCBCBD]'>
                <Image src={'/products/order-1.png'} width={130} height={160} alt='image' />
            </div>
            <p className='flex font-[combo] text-[16px] justify-between'>Product - 1 <Droplet className=' size-[16px] fill-black' /></p>
            <p className='text-[18px] font-[Combo] font-[600] text-left'>₹ 450</p>
        </div>
    )
}

export default OrdesProdCard