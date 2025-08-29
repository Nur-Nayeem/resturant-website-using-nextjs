import React from 'react'

const OpenSection = () => {
    return (
        <div className="w-full bg-[url('/openBg.png')] bg-cover bg-center py-20 rounded-[80px] relative">
            <div className="w-full h-full rounded-[80px] bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.72)] to-[rgba(0,0,0,0)] absolute top-0"></div>
            <h2 className='text-white font-bold text-[80px] text-center relative z-10'>we are open from</h2>
            <div className='text-white text-center my-12 relative z-10'>
                <h3 className='text-[40px] font-semibold'>Monday-Sunday</h3>
                <p className='text-xl'>Launch : Mon-Sun : 11:00am-02:00pm</p>
                <p className='text-xl'>Dinner : sunday : 04:00pm-08:00pm</p>
            </div>
            <div className='flex items-center justify-center gap-5 relative z-10 sm:flex-row flex-col'>
                <button className='py-5 px-12 bg-[#FF8A00] text-white text-sm md:text-xl font-semibold rounded-[160px]'>Order now</button>

                <button className='py-5 px-12 bg-white  text-sm md:text-xl font-semibold rounded-[160px]'>Reservation</button>

            </div>
        </div>
    )
}

export default OpenSection