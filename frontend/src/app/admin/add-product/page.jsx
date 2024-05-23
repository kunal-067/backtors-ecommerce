import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import React from 'react'

function AddProduct() {
    return (
        <div className='shadow-md min-h-full p-4'>
            <div className='flex w-full justify-between border-b-[1px] py-2'>
                <h2 className='font-medium text-[22px]'>AddProduct</h2>
                <div className='flex gap-4'>
                    <Button variant='destructive' className='text-[16px] font-medium'>Cancel</Button>
                    <Button variant='secondary' className='bg-blue-500 text-[16px] font-medium text-white hover:bg-blue-600'>Create</Button>
                </div>
            </div>
            <form action="#" className='mt-6'>
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='mb-4'>
                            <Label>Name:</Label>
                            <Input placeHolder='Enter product name' />
                        </div>
                        <div className='mb-4'>
                            <Label>Price:</Label>
                            <Input type='number' placeHolder='Enter product name' />
                        </div>
                        <div className='mb-4'>
                            <Label>Description:</Label><br />
                            <textarea placeholder='Enter a description' className='rounded-md border-[2px]'></textarea>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-between gap-2 flex-1 px-8'>
                        <div className='rounded-sm size-24 border-[2px] '>
                            <Input type='file' placeHolder='Select a file' className='w-full h-full' />
                        </div>
                        <div>
                            <div className='rounded-sm size-24 border-[2px] '>
                            </div>
                            <X  className='text-red-600 cursor-pointer mx-auto mt-2 hover:scale-125 hover:text-red-500 hover:rotate-90 transition-all duration-500'/>
                        </div>
                        <div className='rounded-sm size-24 border-[2px] '>
                        </div>
                        <div className='rounded-sm size-24 border-[2px] '>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mb-4'>
                        <Label>Name:</Label>
                        <Input placeHolder='Enter product name' />
                    </div>
                    <div className='mb-4'>
                        <Label>Name:</Label>
                        <Input placeHolder='Enter product name' />
                    </div>
                    <div className='mb-4'>
                        <Label>Name:</Label>
                        <Input placeHolder='Enter product name' />
                    </div>
                    <div className='mb-4'>
                        <Label>Name:</Label>
                        <Input placeHolder='Enter product name' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct