import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'



function Checkout() {
    return (
        <div className='flex w-full gap-8 p-8 md:px-28 bg-gray-100 h-fit'>
            <div className='w-[890px]'>
                <h2 className='text-[14px] font-medium mb-4'>Delivery Information</h2>

                {/* top fillup form  */}
                <div className='bg-[#fff] p-4 flex flex-col gap-3'>
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <Label>Name</Label>
                            <Input placeHolder='Enter your name' />
                        </div>
                        <div className='flex-1'>
                            <Label>Name</Label>
                            <Input placeHolder='Enter your name' />
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <Label>Name</Label>
                            <Input placeHolder='Enter your name' />
                        </div>
                        <div className='flex-1'>
                            <Label>Name</Label>
                            <Input placeHolder='Enter your name' />
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <Label>Name</Label>
                            <Input placeHolder='Enter your name' />
                        </div>

                        <div className='flex gap-2 w-[49%]'>
                            <div className='flex-1'>
                                <Label>Name</Label>
                                <Input placeHolder='Enter your name' />
                            </div>
                            <div className='flex-1'>
                                <Label>Name</Label>
                                <Input placeHolder='Enter your name' />
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <Label>Name</Label>
                            <Input placeHolder='Enter your name' />
                        </div>
                        <div className='flex-1 opacity-0'>
                            <Label>Name</Label>
                            <Input className='hidden' placeHolder='Enter your name' />
                        </div>
                    </div>
                </div>

                <h2 className='text-[14px] font-medium my-4'>Schedule Delivery  <Switch className='align-middle ml-4' /></h2>
                <div className='bg-[#fff] p-4'>
                    <div className='flex-1'>
                        <Label>Name</Label>
                        <Input placeHolder='Enter your name' />
                    </div>
                    <div className='flex-1'>
                        <Label>Name</Label>
                        <Input placeHolder='Enter your name' />
                    </div>
                </div>

                <h2 className='text-[14px] font-medium my-4'>Payment Method</h2>
                <div className='bg-[#fff] p-4 opacity-70 py-6'>
                    <RadioGroup defaultValue="cos" className='flex justify-between'>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="onlone" id="option-one" />
                            <Label htmlFor="option-one" className='ml-2'>Online Payment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cos" id="option-two" />
                            <Label htmlFor="option-two" className='ml-2'>Cash on Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pos" id="option-three" />
                            <Label htmlFor="option-three" className='ml-2'>POS on Delivery</Label>
                        </div>
                    </RadioGroup>
                </div>

            </div>

            <div className='w-[584px] h-full'>
                <h2 className='text-[14px] font-medium mb-4'>Order Summary</h2>

                <div className='w-full h-[630px] bg-[#fff] flex flex-col justify-between'>
                    <div>
                        <div className='flex items-center justify-between p-4'>
                            <div className='flex'>
                                <div className='flex justify-center items-center size-16'>
                                    <Image src={'/products/prod-5.png'} width={100} height={100} alt='image' className='h-full w-auto' />
                                </div>
                                <div className=' text-[14px] font-medium ml-4'>
                                    <h2>Portable Device</h2>
                                    <p className='opacity-50'>Brand JK</p>
                                    <h2 className=' font-bold'>₹ 560</h2>
                                </div>
                            </div>
                            <div className='flex items-center border-[2px] p-1 font-medium text-[18px] opacity-80'>
                                <Minus className='size-5' />
                                <span className='mx-3'>01</span>
                                <Plus className='size-5' />
                            </div>
                        </div>

                        <div className='flex items-center justify-between p-4'>
                            <div className='flex'>
                                <div className='flex justify-center items-center size-16'>
                                    <Image src={'/products/prod-5.png'} width={100} height={100} alt='image' className='h-full w-auto' />
                                </div>
                                <div className=' text-[14px] font-medium ml-4'>
                                    <h2>Portable Device</h2>
                                    <p className='opacity-50'>Brand JK</p>
                                    <h2 className=' font-bold'>₹ 560</h2>
                                </div>
                            </div>
                            <div className='flex items-center border-[2px] p-1 font-medium text-[18px] opacity-80'>
                                <Minus className='size-5' />
                                <span className='mx-3'>01</span>
                                <Plus className='size-5' />
                            </div>
                        </div>

                        <div className='flex items-center justify-between p-4'>
                            <div className='flex'>
                                <div className='flex justify-center items-center size-16'>
                                    <Image src={'/products/prod-5.png'} width={100} height={100} alt='image' className='h-full w-auto' />
                                </div>
                                <div className=' text-[14px] font-medium ml-4'>
                                    <h2>Portable Device</h2>
                                    <p className='opacity-50'>Brand JK</p>
                                    <h2 className=' font-bold'>₹ 560</h2>
                                </div>
                            </div>
                            <div className='flex items-center border-[2px] p-1 font-medium text-[18px] opacity-80'>
                                <Minus className='size-5' />
                                <span className='mx-3'>01</span>
                                <Plus className='size-5' />
                            </div>
                        </div>
                    </div>

                    <div className='text-[14px] font-medium px-10 pb-6'>
                        <div className='border-b-[2px] border-t-[2px] py-2'>
                            <p className='flex justify-between mb-2'>
                                <span className='opacity-60'>SUBTOTAL</span>
                                <span className='opacity-1'>₹244</span>
                            </p>
                            <p className='flex justify-between'>
                                <span className='opacity-60'>SUBTOTAL</span>
                                <span className='opacity-1'>₹244</span>
                            </p>
                        </div>
                        <p className='flex justify-between py-2'>
                            <span className='opacity-60'>TOTAL</span>
                            <span className='opacity-1'>₹464</span>
                        </p>
                        <Button className='w-full rounded-none mt-4'>Conform Order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout