import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/new-1.png'
import img2 from '@/assets/leftlast.png'
import img3 from '@/assets/left-second.png'
import img4 from '@/assets/left-3.png'
import img5 from '@/assets/right1.png'
import img6 from '@/assets/right2.png'
import img7 from '@/assets/right3.png'
import { tinos } from '@/app/layout'

const CustomerSay = () => {
    return (
        <div className="bg-[url('/bg-section.png')] h-full bg-no-repeat bg-cover p-10" >
            <h1 className={tinos.className + ' text-center text-7xl text-[#311F09] font-bold my-10'}>Our customers say</h1>
            <div>
                <div className='flex flex-col items-center text-center  max-w-[60%] mx-auto pt-6'>
                    <figure className='max-w-[240px]'>
                        <Image src={img1} alt='new1' />
                    </figure>
                    <h4 className='mt-11'>Starla Virgoun</h4>
                    <p>Financial advisor</p>
                    <div className='w-full relative mt-4'>
                        <span className='text-6xl absolute top-0 left-10'>“</span> <br />
                        <p className='max-w-[500px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p><br />
                        <span className='text-6xl absolute bottom-0 right-10'>“</span>
                        <br />
                    </div>
                </div>
                <div className='max-w-[80%] mx-auto relative bottom-35'>
                    <figure className='w-[7%] h-[7%] absolute top-0 left-0'>
                        <Image src={img2} alt='new2' />
                    </figure >
                    <figure className='w-[11%] h-[11%] absolute top-24 left-[10%]'>
                        <Image src={img3} alt='new2' />
                    </figure>
                    <figure className='w-[12%] h-[12%] absolute top-48 left-[20%]'>
                        <Image src={img4} alt='new2' />
                    </figure>
                    <div className='w-[24%] h-[24%] absolute z-10 top-55 left-[40%] border-[20px] rounded-full border-[rgba(255,138,0,0.1)]'>
                        <figure className=' border-[10px]  md:border-[20px] rounded-full border-[rgba(255,138,0,0.4)]'>
                            <Image src={img1} alt='new2' />
                        </figure>
                    </div>
                    <figure className='w-[12%] h-[12%] absolute top-48 right-[20%]'>
                        <Image src={img5} alt='new2' />
                    </figure>
                    <figure className='w-[11%] h-[11%] absolute top-24 right-[10%]'>
                        <Image src={img6} alt='new2' />
                    </figure>
                    <figure className='w-[7%] h-[7%] absolute top-0 right-0'>
                        <Image src={img7} alt='new2' />
                    </figure>
                </div>
            </div>
        </div>


    )
}

export default CustomerSay