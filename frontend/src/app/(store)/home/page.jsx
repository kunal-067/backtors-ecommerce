import CategoryCard from '@/components/store/Category'
import { Hero1, Hero2 } from '@/components/store/Hero'
import ScreenProdCard from '@/components/store/products/ScreenProdCard'
import Image from 'next/image'
import React from 'react'
import BlogCard from '@/components/main/blogs/Blog'

function Home() {
  return (
    <div>
      {/* hero section here */}
      <div className='relative'>
        <div className='absolute flex justify-between px-10 top-1/2 w-full text-[#fff] text-[76px]'>
          <Image src={'/icons/prev.png'} width={24} height={24} alt='prev-icon' />
          <Image src={'/icons/next.png'} width={24} height={24} alt='next-icon' />
        </div>

        <div className='flex w-full justify-center absolute bottom-5'>
          <span className='w-[63px] h-[10px] bg-[#fff] mr-[2px]'></span>
          <span className='w-[63px] h-[10px] opacity-50 bg-[#fff] mr-[2px]'></span>
          <span className='w-[63px] h-[10px] opacity-50 bg-[#fff] '></span>
        </div>

        <Hero1 />
      </div>

      {/* category section */}
      <div className='text-center pt-14 pb-14  bg-[#FAFAFA]'>
        <h2 className='font-bold text-[24px] leading-[32px]'>EDITOR&apos;S PICK</h2>
        <p className='text-[#737373] font-[400] text-[14px]'>Problems trying to resolve conflict between</p>

        <div className='flex flex-wrap mt-[48px] gap-6 h-[500px] justify-center mx-auto '>
          <CategoryCard img={'/category/men.png'} title={'MEN'} className='w-[510px]' />
          <CategoryCard img={'/category/women.png'} title={'WOMEN'} className='w-[240px]' />
          <div className='flex flex-col w-[240px] h-[500px] gap-6'>
            <CategoryCard img={'/category/accessory.png'} title={'ACESSORIES'} />
            <CategoryCard img={'/category/kid.png'} title={'KIDS'} />
          </div>
        </div>
      </div>

      {/* products strat from here */}
      <div className='text-center pt-10'>
        <h3 className='text-[#737373] text-[20px] font-[400]'>Features Products</h3>
        <h2 className='font-bold text-[24px] leading-[32px]'>BESTSELLER PRODUCTS</h2>
        <p className='text-[#737373] font-[400] text-[14px]'>Problems trying to resolve conflict between</p>

        <div className='h-[615px] flex mx-auto w-fit flex-wrap gap-[30px] mt-10'>
          <ScreenProdCard img={'/products/prod-1.png'} name={'Product-1'} brand={'Prodos Naruto'} mrp={1200} price={799} />
          <ScreenProdCard img={'/products/prod-2.png'} name={'Product-2'} brand={'Narutos Lumana'} mrp={1900} price={1299} />
          <ScreenProdCard img={'/products/prod-3.png'} name={'Product-3'} brand={'Prodos Naruto'} mrp={900} price={499} />
          <ScreenProdCard img={'/products/prod-4.png'} name={'Product-4'} brand={'Narutos Lumana'} mrp={1790} price={1099} />
        </div>

        <div className='h-[615px] flex mx-auto w-fit flex-wrap gap-[30px] mt-10'>
          <ScreenProdCard img={'/products/prod-5.png'} name={'Product-5'} brand={'Prodos Naruto'} mrp={1200} price={799} />
          <ScreenProdCard img={'/products/prod-6.png'} name={'Product-6'} brand={'Narutos Lumana'} mrp={1900} price={1299} />
          <ScreenProdCard img={'/products/prod-7.png'} name={'Product-7'} brand={'Prodos Naruto'} mrp={1200} price={799} />
          <ScreenProdCard img={'/products/prod-8.png'} name={'Product-8'} brand={'Narutos Lumana'} mrp={1900} price={1299} />
        </div>
      </div>

      {/* carousel second section */}
      <div className='relative'>
        <div className='absolute flex justify-between px-10 top-1/2 w-full text-[#fff] text-[76px]'>
          <Image src={'/icons/prev.png'} width={24} height={24} alt='prev-icon' />
          <Image src={'/icons/next.png'} width={24} height={24} alt='next-icon' />
        </div>

        <div className='flex w-full justify-center absolute bottom-5'>
          <span className='w-[63px] h-[10px] bg-[#fff] mr-[2px]'></span>
          <span className='w-[63px] h-[10px] opacity-50 bg-[#fff] mr-[2px]'></span>
        </div>

        <Hero2 />
      </div>

      {/* large prod display */}
      <div className='w-full flex'>
        <div className="h-full flex justify-center items-center pl-20">
          <Image src={'/products/asian-women.png'} width={604} height={582} className='' alt='img' />
        </div>
        <div className='pt-[162px] pl-28 font-bold'>
          <p className='text-[16px] leading-[24px] text-[#BDBDBD]'>SUMMAR 2024</p>
          <h2 className='text-[50px] leading-[50px] text-[#252B42] mt-6'>Part of neural <br /> Universe</h2>
          <p className='text-[20px] leading-[30px] text-[#737373] mt-8 font-medium'>We know how large objects will act but. <br /> things on small scale.</p>
          <div className='customBgAnimate1 flex font-bold text-[24px] items-center justify-center h-fit mt-8'>
            <button className='customBgAnimate1 text-[24px] leading-[32px] border-[3px] border-[#2DC071] relative text-[#fff] py-[12px] px-[37px] rounded-[5px] hover:text-[#2DC071]'>
              <div id='animate-b-1' className={`w-full h-full bg-[#2DC071] absolute top-0 left-0 -z-10 transition-colors duration-1000`}>
              </div>
              BUY NOW
            </button>

            <button className='customBgAnimate2 text-[24px] leading-[32px] border-[3px] border-[#2DC071] relative text-[#2DC071] ml-4 rounded-[5px] hover:text-[#fff] py-[12px] px-[37px] transition-colors duration-1000'>
              <div id='animate-b-2' className={`w-full h-full absolute top-0 left-0 -z-10 transition-colors duration-1000`}>
              </div>
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* blog section */}
      <div className='pt-14'>
        <div className='text-center'>
        <h3 className='text-[#23A6F0] text-[20px] font-[700]'>Practice Advice</h3>
        <h2 className='font-bold text-[40px] leading-[32px] text-[#252B42] mt-3'>Featured Posts</h2>
        <p className='text-[#737373] font-[400] text-[16px] mt-5'>Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        <div className='flex flex-wrap gap-[20px] justify-center mt-16'>
          <BlogCard img={'/blogs/blog-1.png'} />
          <BlogCard img={'/blogs/blog-2.png'} />
          <BlogCard img={'/blogs/blog-3.png'} />
        </div>
      </div>

    </div>
  )
}

export default Home