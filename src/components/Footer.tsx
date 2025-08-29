import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='container mx-auto py-10 md:px-0 px-2.5'>
            <div className='flex items-start justify-between lg:gap-[60px] gap-[60px] md:gap-4 my-20 md:flex-row flex-col'>
                <div className='max-w-[352px]'>
                    <div className='flex items-center gap-4'>
                        <h2 className='w-10 h-10 rounded-full bg-[#FF8A00] text-white flex items-center justify-center font-semibold text-2xl'>D</h2>
                        <h3 className='text-white text-sm font-semibold'>Delizi<span className='text-[#FF8A00]'>oso</span></h3>
                    </div>
                    <p className='text-[#E3E2E0] text-xl my-11'>Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
                    <div className='flex gap-7'>
                        <div className='bg-[#DDD5D5] rounded-full flex items-center justify-center w-16 h-16 '><TwitterIcon /></div>
                        <div className='bg-[#DDD5D5] rounded-full flex items-center justify-center w-16 h-16 '><InstagramIcon /></div>
                        <div className='bg-[#DDD5D5] rounded-full flex items-center justify-center w-16 h-16 '><FacebookIcon /></div>
                    </div>
                </div>
                <div className='text-xl '>
                    <h3 className='text-[#FF8A00]'>Page</h3>
                    <div className='flex flex-col gap-4 my-4 text-[#E3E2E0]'>
                        <Link href={'/'} >Home</Link>
                        <Link href={'/'} >Menu</Link>
                        <Link href={'/'} >Order online</Link>
                        <Link href={'/'} >Catering</Link>
                        <Link href={'/'} >Reservation</Link>
                    </div>
                </div>
                <div className='text-xl '>
                    <h3 className='text-[#FF8A00]'>Information</h3>
                    <div className='flex flex-col gap-4 my-4 text-[#E3E2E0]'>
                        <Link href={'/'} >About us</Link>
                        <Link href={'/'} >Testimonial</Link>
                        <Link href={'/'} >Event</Link>

                    </div>
                </div>
                <div className='text-xl max-w-[280px]'>
                    <h3 className='text-[#FF8A00]'>Get in touch</h3>
                    <div className='flex flex-col gap-4 my-4 text-[#E3E2E0]'>
                        <p>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                        <p>delizioso@gmail.com</p>
                        <p>+123 4567 8901</p>

                    </div>
                </div>
            </div>
            <p className='text-[#E3E2E0] text-center'>Copyright © 2022 Delizioso</p>
        </div>
    )
}

export default Footer