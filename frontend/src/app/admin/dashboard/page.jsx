import { BarGraphCard, LineChart, PieChart, VerticalBarGraph } from '@/components/admin/Graph'
import { ArrowUp, CircleDollarSign } from 'lucide-react'
import React from 'react'

function Dashboard() {
  return (
    <>
      <div className='flex flex-wrap justify-between gap-6'>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>

      <div className='flex mt-4 py-4 gap-6 flex-wrap'>
        <BarGraphCard/>
        <PieChart/>
        <VerticalBarGraph/>
      </div>
      <div>
        <LineChart/>
      </div>
    </>
  )
}

function MiniCard({ className }) {
  return (
    <div className={`${className}, shadow-md rounded-md p-4 flex-1`}>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-[18px] font-bold text-gray-700 text-nowrap'>Total Sales</h2>
          <p className='text-[14px] font-medium text-[#737373]'>Last 30 days</p>
        </div>

        <CircleDollarSign className=' size-12 text-yellow-600 ml-10' />
      </div>

      <div className='flex items-center text-[24px] font-semibold mt-2'>
        <ArrowUp className='text-green-500' />
        $756.79
      </div>
    </div>
  )
}



export default Dashboard