import { Circle, RectangleEllipsis, ShoppingCart, Square } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <h2 className='w-10 h-10 rounded-full bg-[#FF8A00] text-white flex items-center justify-center font-semibold text-2xl'>D</h2>
                <h3 className='text-[#311F09] text-sm font-semibold'>Delizi<span className='text-[#FF8A00]'>oso</span></h3>
            </div>
            <div className='hidden md:flex gap-2 lg:gap-10 text-sm'>
                <Link href={`/`} className='text-[#311F09] hover:text-[#FF8A00] transition-all duration-300' >Home</Link>
                <Link href={`/`} className='text-[#311F09] hover:text-[#FF8A00] transition-all duration-300' >menu</Link>
                <Link href={`/`} className='text-[#311F09] hover:text-[#FF8A00] transition-all duration-300' >About us</Link>
                <Link href={`/`} className='text-[#311F09] hover:text-[#FF8A00] transition-all duration-300' >Order Online</Link>
                <Link href={`/`} className='text-[#311F09] hover:text-[#FF8A00] transition-all duration-300' >Reservation</Link>
                <Link href={`/`} className='text-[#311F09] hover:text-[#FF8A00] transition-all duration-300' >Contact us</Link>
            </div>
            <div className='flex items-center gap-7'>
                <div className='relative'>
                    <ShoppingCart className='w-6 h-6' />
                    <div className='bg-[#FF3838] text-white text-[6px] w-3 h-3 flex items-center justify-center rounded-full absolute -top-1 -right-1'>3</div>
                </div>
                <button className='flex flex-col font-bold text-[#311F09] md:hidden'>
                    <div className='flex w-8 h-4 items-center'><Square /><Square /></div>
                    <div className='flex w-8 h-4 items-center'><Square /> <Circle className='text-[#FF8A00] ' /></div>
                </button>
                <button className='hidden md:block py-3 px-8 bg-[#3FA72F] text-white text-sm font-semibold rounded-[133px]'>Login</button>
            </div>
        </nav>
    )
}

export default NavBar