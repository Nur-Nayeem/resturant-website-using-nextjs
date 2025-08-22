import Link from 'next/link'
import React from 'react'
import googleIcon from '@/assets/icons/google.png'
import authImg from '@/assets/authImg.png'
import Image from 'next/image'
import { ralewaySans } from '@/app/layout'

const LoginPage = () => {
    return (
        <div className='container m-auto flex items-center justify-center h-screen'>
            <div className='relative flex items-center md:gap-12 lg:gap-24 justify-between rounded-sm'>
                <div className='hidden w-10 h-10 rounded-full bg-[#FF8A00] text-white lg:flex items-center justify-center font-semibold text-lg absolute top-10 left-10'>D</div>
                <div className='w-full md:w-6/12 lg:w-5/12 md:pl-24'>
                    <h2 className={ralewaySans.className + ' font-bold text-[40px] text-[#311F09] mb-4'}>Login</h2>
                    <p className='font-normal text-[14px] mb-8'>Don't have an account? <Link href={`/auth/signup`} className='text-[#0094FF]'>Sign up</Link></p>
                    <form action="#" className='flex flex-col gap-8 '>
                        <input className='bg-[#fafaf9] w-full py-4 px-8 rounded-xl outline-0' type="text" placeholder='Email address' />

                        <input className='bg-[#fafaf9] w-full py-4 px-8 rounded-xl outline-0' type="password" placeholder='Password' />

                        <div className='flex items-center justify-between'>
                            <div className='flex gap-3'>
                                <input type="checkbox" name="remember" id="remember" />
                                <span>Remember  me</span>
                            </div>
                            <Link href={`#`} >Forget Password?</Link>
                        </div>
                        <button className='py-4 bg-[#FF8A00] text-white rounded-xl'>Login</button>
                        <button className='flex items-center justify-center py-4 border-1 border-[#B6A38B] gap-5 rounded-xl'>
                            <Image className='w-[28px] h-[28px]' src={googleIcon} alt='Google' />
                            <p>Login with google</p>
                        </button>
                    </form>
                </div>
                <figure className='hidden md:block w-6/12 '>
                    <Image className='w-full h-full' src={authImg} alt='Auth Image' />
                </figure>
            </div>
        </div>
    )
}

export default LoginPage