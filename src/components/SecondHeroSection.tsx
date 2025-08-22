import Image from 'next/image'
import React from 'react'
import hero2 from '@/assets/hero2.png'
import { tinos } from '@/app/layout'

const SecondHeroSection = () => {
    return (
        <div className='flex gap-6 md:gap-12 flex-col md:flex-row justify-between items-center my-32 py-6 lg:py-0'>
            <figure className='w-full md:mx-w-7/12 flex items-center'>
                <Image className='w-full' src={hero2} alt='Food' />
            </figure>
            <div className='w-full md:max-w-5/12 flex flex-col'>
                <h1 className={tinos.className + ' font-bold text-5xl lg:text-[80px] leading-[100%]'}>Welcome to <br /><span className='text-[#FF8A00]'>delizioso</span></h1>
                <p className='text-lg lg:text-xl text-[#5C4529] leading-[200%] sm:mt-6 md:mt-14 max-w-[433px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                <div className='hero-buttons flex gap-4 items-center mt-2.5 sm:mt-10 md:mt-20 w-max'>
                    <button className='py-5 px-12 bg-[#FF8A00] text-white text-sm md:text-xl font-semibold rounded-[160px]'>See our menu</button>

                </div>
            </div>

        </div>
    )
}

export default SecondHeroSection