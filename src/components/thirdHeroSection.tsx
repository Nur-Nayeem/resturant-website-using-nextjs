import Image from 'next/image'
import React from 'react'
import hero3 from '@/assets/hero-3rd.png'
import herobottom from '@/assets/3rd-hero-bottom-circle.png'
import herotop from '@/assets/3rd-hero-top-circle.png'
import { tinos } from '@/app/layout'

const ThirdHeroSection = () => {
    return (
        <div className='flex gap-6 md:gap-20 flex-col-reverse md:flex-row justify-between items-center py-32'>

            <figure className='w-full md:mx-w-6/12 flex items-center justify-center'>
                <div className='relative w-[80%] border-1 border-gray-400 lg:p-20 p-10 rounded-full '>
                    <Image className='w-full rounded-full border-[#f9f0e4] lg:border-[50px] border-[25px]' src={hero3} alt='Food' />
                    <Image className='absolute top-20 right-0 lg:max-w-[100px] lg:max-h-[100px] max-w-[70px] max-h-[70px]' src={herobottom} alt='bottom img' />
                    <Image className='absolute bottom-20 left-0 lg:max-w-[100px] lg:max-h-[100px] max-w-[70px] max-h-[70px]' src={herotop} alt='top img' />
                </div>
            </figure>
            <div className='w-full md:pl-8 md:max-w-5/12 flex flex-col'>
                <h1 className={tinos.className + ' font-bold text-5xl lg:text-[80px] leading-[100%]'}>Let's reserve<br /><span className='text-[#FF8A00]'>a table</span></h1>
                <p className='text-lg lg:text-xl text-[#5C4529] leading-[200%] mt-4 sm:mt-6 md:mt-14 max-w-[433px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                <div className='hero-buttons flex gap-4 items-center mt-6 sm:mt-10 md:mt-20 w-max'>
                    <button className='py-5 px-12 bg-[#FF8A00] text-white text-sm md:text-xl font-semibold rounded-[160px]'>Reservation</button>

                </div>
            </div>

        </div>
    )
}

export default ThirdHeroSection