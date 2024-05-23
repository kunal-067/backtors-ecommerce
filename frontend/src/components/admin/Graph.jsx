'use client'
import { ArrowDown, ArrowUp, Check, Weight } from 'lucide-react';
import React from 'react'
import { Progress } from '../ui/progress';
import { Chart as ChartJS } from "chart.js/auto";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2';


const data = [40, 90, 60, 75, 25, 80, 55];

export function BarGraphCard() {
    const marks = [];
    for (let i = 0; i <= 1000; i += 100) {
        marks.push(i);
    }

    return (
        <div className='shadow-md p-6 rounded-md flex-1'>
            <h2 className='text-[16px] font-semibold text-gray-500 border-b-[0.5px] pb-2'>Sales of the week. <Check className='text-green-600 font-bold float-right' /></h2>
            <div style={{ minWidth: `${data.length * 30}px` }} className='relative h-60 mt-8 w-full'>
                <div className='w-full h-full flex flex-col justify-between absolute top-0 left-0'>
                    {
                        marks.reverse().map((number, index) => (
                            <div key={index} className='w-full flex gap-2 items-center text-gray-300 text-sm relative'>
                                <span className='text-sm text-center font-medium w-[40px]'>{number}</span>
                                <span className='w-full h-[1px] bg-gray-200'></span>
                            </div>
                        ))
                    }
                </div>

                <div className='w-full h-full flex gap-2 justify-evenly items-end absolute top-0 pl-[50px] pr-[10px] z-10'>
                    {
                        data.map((elem, index) => (
                            <div key={index} className='h-full w-5 pb-2 flex items-end'>
                                <span style={{ height: `${elem}%` }} className={`w-3 bg-black rounded-md`}></span>
                                <span style={{ height: `${elem}%` }} className={`w-3 bg-blue-500 rounded-md`}></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export function PieChart() {
    const data = {
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19],
                data: [21, 29],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                ],
                borderRadius: 50,
                borderWidth: 1,
                spacing: 2
            },
            {
                data: [23, 12, 34],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                ],
                borderWidth: 5,
                spacing: 2,
                borderRadius: 50,
            }
        ],
    };

    return (
        <div className="shadow-md p-6 rounded-md flex-1 flex flex-col justify-between">
            <h2 className='text-[16px] font-semibold text-gray-500 border-b-[0.5px] pb-2'>Sales of the week. <Check className='text-green-600 font-bold float-right' /></h2>

            <div className=' size-36 self-center'>
                <Doughnut
                    data={data}
                />
            </div>

            <div className='flex w-full justify-between mt-8'>
                <div>
                    <div className='flex items-center'>
                        <div className=' w-8 h-5 rounded-2xl bg-slate-500'></div>
                        <span className=' font-medium ml-2 text-[15px] text-gray-500'>Daily sale</span>
                    </div>
                    <b className='flex font-bold text-[26px] items-center mt-2'><ArrowDown className=' text-red-600' />778</b>
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className=' w-8 h-5 rounded-2xl bg-slate-500'></div>
                        <span className=' font-medium ml-2 text-[15px] text-gray-500'>Daily sale</span>
                    </div>
                    <b className='flex font-bold text-[26px] items-center mt-2'><ArrowUp className=' text-green-600' />778</b>
                </div>
            </div>
        </div>
    )
}

const data1 = [40, 50, 70, 35]
export function VerticalBarGraph() {
    return (
        <div className='shadow-md p-6 rounded-md flex-1 flex flex-col justify-between'>
            <div>
                <h2 className='text-[16px] font-semibold text-gray-500 border-b-[0.5px] pb-2'>Sales of the week. <Check className='text-green-600 font-bold float-right' /></h2>
                <h1 className='text-center font-bold text-[24px] text-[#737373] mt-6'>56,78,990</h1>
            </div>
            <div className='w-full flex flex-col gap-2 h-full justify-between mt-8'>
                {
                    data1.map((elem, index) => (
                        <div key={index} className='w-full h-fit'>
                            <p className='font-medium text-[14px] text-gray-400'>Sursand (45,00)</p>
                            <div className='w-full h-3 bg-gray-200 rounded-full'>
                                <div style={{ width: `${elem}%` }} className='w-[60%] h-full bg-red-400 rounded-full'></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function LineChart(){
    const data = {
        labels: [1,2,3,4,5,6,7,7,8,9],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.5,
          borderDash:[2,3,5,1],
          spanGaps:true,
        }]
    };
    const options = {
        scales: {
          y: {
            ticks: {
                stepSize: 10, // Distance between each tick
                // callback: function (value, index, values) {
                //   return value % 20 === 0 ? value.toString() : null;
                // },
            grid: {
              display: true, // Hide vertical grid lines
            },
          },
        },
          x: {
            grid: {
              display: false, // Hide horizontal grid lines
            },
          },
        },
      };

    return(
        <div>
            <Line data={data} options={options} />
        </div>
    )
}