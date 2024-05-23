import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'

function Signup() {
    return (
        <div className='shadow-xl p-10 rounded-xl w-[498px] h-[547px]'>
            <h2 className='text-[#F47458] text-3xl font-bold mb-10'>Logo here</h2>
            <p className='opacity-50 text-[14px] font-[400]'>Welcome Here !!</p>
            <h2 className='text-[56px] font-bold mb-4'>Sign Up</h2>

            <div className='flex flex-col w-full gap-4'>
                <div>
                    <Label>Phone</Label>
                    <Input className='rounded-none mt-2 border-0 bg-[#FFF6F4]' placeHolder='Enter your phone' />
                </div>
                <div>
                    <Label>Phone</Label>
                    <Input className='rounded-none mt-2 border-0 bg-[#FFF6F4]' placeHolder='Enter your phone' />
                </div>
            </div>

            <div className='flex flex-col w-full justify-center items-center gap-4 mt-10'>
                <Button className='bg-[#F47458] rounded-full align-middle text-white font-medium'>Sign In <ArrowRight className='ml-4 mt-1 size-5 ' /></Button>

                <p>
                    <span className='opacity-50'>Aready have an account</span>
                    <span className='text-[#F47458] ml-2'><a href="#">Sign Ip</a></span>
                </p>
            </div>
        </div>
    )
}

export default Signup