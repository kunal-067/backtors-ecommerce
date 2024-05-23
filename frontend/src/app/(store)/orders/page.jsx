import OrdesProdCard from '@/components/store/products/OrdesProdCard'
import { ArrowRight, ArrowUp01Icon, Droplet, LockKeyhole, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Oders() {
    return (
        <>
        <div className='text-center bg-gray-50 px-8 pt-8 md:px-32'>
            <h2 className='text-[34px] font-medium leading-[42px]'>Your shopping bag</h2>
            <p className='text-[20px] font-medium text-[#000000ad] border-b-[2px] py-[20px] w-fit mx-auto'>Review of 3 items $169.00</p>

            <div className='flex justify-around gap-4 flex-wrap px-4 py-8'>
                <Card />
                <Card />
                <Card />
            </div>

            <div className='flex flex-col gap-4 py-6'>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </div>

            <div className='text-center p-4 pb-10'>
                <h2 className='text-[20px] font-[500] py-2 border-b-[2px] w-fit mb-8 mx-auto'>YOU MAY ALSO LIKE THIS</h2>
                <div className='flex gap-4 justify-between'>
                    <OrdesProdCard/>
                    <OrdesProdCard/>
                    <OrdesProdCard/>
                    <OrdesProdCard/>
                    <OrdesProdCard/>
                </div>
            </div>
        </div>
            <CheckoutCard/>
            </>
    )
}

function OrderCard(){
    return(
        <div className='flex flex-wrap bg-white justify-between p-3 rounded-md'>
        <div className='flex'>
        <div className='size-[200px] flex justify-center items-center bg-[#FCBCBD]'>
            <Image src={'/products/order-1.png'} width={128} height={160} alt='Image' />
        </div>
        <div className='p-8 pt-2'>
            <h2 className='text-[40px] font-[400]'>Print ethno tank</h2>
            <p className='texr-[20px] opacity-60 text-left'>#71324235225</p>

            <div className='flex gap-4'>
                <span className='flex items-end opacity-60 text-[14px] gap-x-1 border-b-[1px] border-black font-medium p-1'><Droplet className='size-4 mb-[2px] fill-black' /> Black</span>
                <span className='flex items-end opacity-60 text-[14px] gap-x-1 border-b-[1px] border-black font-medium p-1'><Droplet className='size-4 mb-[2px] fill-black' /> Black</span>
                <span className='flex items-end opacity-60 text-[14px] gap-x-1 border-b-[1px] border-black font-medium p-1'><Droplet className='size-4 mb-[2px] fill-black' /> Black</span>
            </div>
        </div>
        </div>
        <div className='flex flex-col justify-between p-5 mr-10'>
            <b className='text-[28px] font-[500]'>₹ 270.99</b>
            <X className=' self-end mb-4' />
        </div>
    </div>
    )
}
function Card({ message, title }) {
    return (
        <div className='flex w-[375px] items-center'>
            <LockKeyhole className=' size-10' />
            <div className='ml-4'>
                <h2 className='text-[18px] font-medium leading-[26.63px] spacing-[0.03em] text-left'>SECURE SHOPPING</h2>
                <p className='text-[16px] font-medium opacity-80 text-left'>
                    We use the latest SSL security technology
                    to encrypt all personal Information.
                </p>
            </div>
        </div>
    )
}
function CheckoutCard(){
    return(
        <div className="flex justify-between bg-white md:px-32 p-8 pb-16 shadow-md mt-5">
            <ShoppingCart className=' font-bold size-10 mt-2 mr-4'/>
            <div className='flex flex-col w-[55%] pr-8'>
                <h2 className='text-[24px] font-[500] border-b-[1px] mb-3'>Estimation</h2>
               
                <div className='flex justify-between'>
                    <p className=' opacity-60 font-[400] text-[16px]'>Orders</p>
                    <span className=' font-[Combo] text-[20px] font-[600] opacity-80'>₹ 450</span>
                </div>

                <div className='flex justify-between'>
                    <p className=' opacity-60 font-[400] text-[16px]'>Orders</p>
                    <span className=' font-[Combo] text-[20px] font-[600] opacity-80'>₹ 450</span>
                </div>

              
                <div className='flex justify-between'>
                    <p className=' opacity-60 font-[400] text-[16px]'>Orders</p>
                    <span className=' font-[Combo] text-[20px] font-[600] opacity-80'>₹ 450</span>
                </div>

             
                <div className='flex justify-between'>
                    <p className=' opacity-60 font-[400] text-[16px]'>Orders</p>
                    <span className=' font-[Combo] text-[20px] font-[600] opacity-80'>₹ 450</span>
                </div>
            </div>

            <div className='flex flex-col justify-between text-right w-[40%] pt-4'>
                <h3 className='text-[24px] font-[400] opacity-70'>TOTAL</h3>
                <h1 className='text-[40px] font-[400]'>₹ 6780</h1>
                <button className='flex px-8 w-fit self-end -mb-6 opacity-80 py-3 items-center hover:bg-[#f9c4c4] transition-colors duration-500 bg-[#FBDFDB] text-[18px] font-medium'>
                    PROCEED TO CHECKOUT <ArrowRight className='ml-3'/> 
                </button>
            </div>
        </div>
    )
}
export default Oders