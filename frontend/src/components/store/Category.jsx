// import React from 'react'

// function CategoryCard({ img, className, title }) {
//     return (
//         <div className={`bg-[url(${img || ''})] ${className}`}>
//             <button className='text-[#ffffff] text-[16px] font-bold leading-[24px] px-[48px] py-[12px]'>{title}</button>
//         </div>
//     )
// }


function CategoryCard({ img, className, title }) {
    return (
        <div className={`bg-cover bg-center ${className || ''} relative h-full`} style={{backgroundImage :`url(${img})`}}>
            <button className='bg-[#ffffff] text-[16px] text-[#252B42] font-bold leading-[24px] px-[48px] py-[12px] absolute bottom-4 left-4'>{title}</button>
        </div>
    )
}

export default CategoryCard