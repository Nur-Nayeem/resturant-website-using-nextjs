import Image from 'next/image'
import React from 'react'
import nodddle from '@/assets/food/noddle.png'
import two from '@/assets/food/food-2.png'
import three from '@/assets/food/food-3.png'
import four from '@/assets/food/food-4.png'
import five from '@/assets/food/food-5.png'
import six from '@/assets/food/food-6.png'
import { Star } from 'lucide-react'

const FoodCard = ({ img }: any) => {
    return (
        <div className='max-w-[344px] bg-[rgba(208,204,199,0.12)] rounded-3xl p-8 mt-14'>
            <div className='flex flex-col items-center gap-5 text-center'>
                <figure className='w-[270px] h-[270px]'>
                    <Image className='w-full h-full' src={img} alt='noddle' />
                </figure>
                <div>
                    <h2 className='font-semibold text-3xl text-[#311F09]'>Spaghetti</h2>
                    <div className='flex items-center justify-center mt-1.5'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
                <p className='text-sm text-[#59442B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. </p>
            </div>
            <div className='flex items-center justify-between mt-7'>
                <span className='text-2xl font-semibold text-[#311F09]'>$12.05</span>
                <button className='px-6 py-2.5 bg-[#FF8A00] text-white font-semibold rounded-[160px]'>Order now</button>

            </div>

        </div>
    )
}

export default FoodCard