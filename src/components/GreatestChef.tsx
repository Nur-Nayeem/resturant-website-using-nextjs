import Image from 'next/image'
import React from 'react'
import chef1 from '@/assets/chef1.png'
import chef2 from '@/assets/chef2.png'
import chef3 from '@/assets/chef3.png'
import { tinos } from '@/app/layout'

const GreatestChef = () => {
    return (
        <div>
            <h1 className={tinos.className + ' text-center mt-44 mb-24 text-7xl text-[#311F09] font-bold'}>Our greatest chef</h1>
            <div className='flex justify-between gap-10'>
                <div className='flex flex-col'>
                    <figure className='min-w-[300px] h-[720px] rounded-4xl bg-[#d1d0d2]'>
                        <Image className='h-full' src={chef1} alt='chef 1' />
                    </figure>
                    <div className='my-10 text-2xl text-center'>
                        <h4 className='font-semibold text-[#311F09]'>Betran Komar</h4>
                        <p className='mt-6 text-[#A08D76]'>Head chef</p>
                    </div>
                </div>
                <div>
                    <figure className='min-w-[300px] h-[720px] rounded-4xl bg-[#ffe8cc]'>
                        <Image className='h-full' src={chef2} alt='chef 2' />
                    </figure>
                    <div className='my-10 text-2xl text-center'>
                        <h4 className='font-semibold  text-[#311F09]'>Ferry Sauwi</h4>
                        <p className='mt-6 text-[#A08D76]'>Chef</p>
                    </div>
                </div>
                <div>
                    <figure className='min-w-[300px] h-[720px]  bg-[#ebe0d9] rounded-4xl'>
                        <Image className='h-full' src={chef3} alt='chef 3' />

                    </figure>
                    <div className='my-10 text-2xl text-center'>
                        <h4 className='font-semibold  text-[#311F09]'>Iswan Dracho</h4>
                        <p className='mt-6 text-[#A08D76]'>Chef</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreatestChef