import { tinos } from '@/app/layout'
import Image from 'next/image'
import React from 'react'
import FoodCard from './FoodCard'
import one from '@/assets/food/noddle.png'
import two from '@/assets/food/food-2.png'
import three from '@/assets/food/food-3.png'
import four from '@/assets/food/food-4.png'
import five from '@/assets/food/food-5.png'
import six from '@/assets/food/food-6.png'
import hero from '@/assets/hero.png'
import hero2 from '@/assets/hero2.png'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'

const FoodMenu = () => {
    return (
        <div>
            <h1 className={tinos.className + ' text-center text-[#311F09] text-[80px] font-bold'}>Our popular menu</h1>
            <div className='flex gap-4 items-center flex-wrap  justify-center sm:justify-between mt-14'>
                <button className='py-4 px-11  rounded-[160px] bg-[#311F09] text-white'>All catagory</button>
                <button className='py-4 px-11  rounded-[160px] bg-[rgba(208,204,199,0.1)]'>Dinner</button>
                <button className='py-4 px-11  rounded-[160px] bg-[rgba(208,204,199,0.1)]'>Lunch</button>
                <button className='py-4 px-11  rounded-[160px] bg-[rgba(208,204,199,0.1)]'>Dessert</button>
                <button className='py-4 px-11  rounded-[160px] bg-[rgba(208,204,199,0.1)]'>Drink</button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
                <FoodCard img={one} />
                <FoodCard img={two} />
                <FoodCard img={three} />
                <FoodCard img={four} />
                <FoodCard img={hero2} />
                <FoodCard img={hero} />
                <FoodCard img={five} />
                <FoodCard img={six} />
            </div>
            <div className='flex gap-4 items-center justify-center my-20'>
                <div className='w-[55px] h-[55px] flex items-center justify-center bg-[#311F09] text-white mr-3.5 rounded-xl'>
                    <ChevronLeft />
                </div>
                <div className='bg-[rgba(255,138,0,0.1)] w-[55px] h-[55px] flex items-center justify-center text-[#FF8A00] rounded-xl'>1</div>
                <div className='bg-[rgba(255,138,0,0.1)] w-[55px] h-[55px] flex items-center justify-center text-[#FF8A00] rounded-xl'>2</div>
                <div className='bg-[rgba(255,138,0,0.1)] w-[55px] h-[55px] flex items-center justify-center text-[#FF8A00] rounded-xl'>3</div>
                <div className=' w-[55px] h-[55px] flex items-center justify-center text-[#B7A28B]'><Ellipsis /></div>
                <div className='w-[55px] h-[55px] flex items-center justify-center bg-[#311F09] text-white ml-3.5 rounded-xl'>
                    <ChevronRight />
                </div>
            </div>

        </div>
    )
}

export default FoodMenu