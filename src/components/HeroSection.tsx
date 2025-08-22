import Image from 'next/image'
import React from 'react'
import hero from '@/assets/hero.png'
import { ralewaySans } from '@/app/layout'

const HeroSection = () => {
    return (
        <div className='flex gap-6 flex-col md:flex-row justify-between mt-20'>
            <div className='w-full md:w-5/10 flex flex-col gap-12'>
                <div className='text-[#FF8A00] bg-[rgba(255,138,0,0.2)] py-2.5 px-8 rounded-[126px] w-max'>Restauran</div>
                <h1 className={ralewaySans.className + ' font-bold text-[80px] leading-[100%]'}>Italian <br />Cuisine</h1>
                <p className='text-xl text-[#5C4529] leading-[200%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                <div className='hero-buttons flex gap-4 items-center mt-2.5 w-max'>
                    <button className='py-5 px-12 bg-[#FF8A00] text-white text-sm md:text-xl font-semibold rounded-[160px]'>Order now</button>
                    <button className='py-5 px-10 bg-[#3FA72F] text-white text-sm md:text-xl font-semibold rounded-[160px]'>Reservation</button>
                </div>
            </div>
            <figure className='w-full md:w-5/10 flex justify-end items-center'>
                <Image className='w-full' src={hero} alt='Food' />
            </figure>
        </div>
    )
}

export default HeroSection