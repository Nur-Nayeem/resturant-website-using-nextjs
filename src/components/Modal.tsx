'use client'
import { tinos } from '@/app/layout';
import { Calendar, Circle, ShoppingCart, Square, TimerIcon, UserRound, X } from 'lucide-react';
import { useEffect } from 'react';

import flag1 from '@/assets/flags/bangladesh.png'
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import Checkbox from './CheckBox';
import TextArea from './TextArea';

export default function Modal({ isOpen, onClose }: any) {
    useEffect(() => {
        // Close the modal if ESC is pressed
        const handleKeyDown = (e: any) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!isOpen) return null;

    const Occations = ['Birthday', 'Marrige', 'Party'];
    const Country = ['BD', 'US', 'IN', 'USE', 'PK'];

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
            <button
                type="button"
                onClick={onClose}
                className="absolute top-0 bg-gray-500 text-white py-4 px-4 rounded-full"
            >
                <X />
            </button>

            <div className="max-w-6xl bg-white p-8 rounded-lg shadow-lg w-full max-h-[85vh] overflow-y-auto">
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <h2 className='w-10 h-10 rounded-full bg-[#FF8A00] text-white flex items-center justify-center font-semibold text-2xl'>D</h2>
                        <h3 className='text-[#311F09] text-sm font-semibold'>Delizi<span className='text-[#FF8A00]'>oso</span></h3>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='hidden relative'>
                            <ShoppingCart className='w-6 h-6' />
                            <div className='bg-[#FF3838] text-white text-[6px] w-3 h-3 flex items-center justify-center rounded-full absolute -top-1 -right-1'>3</div>
                        </div>

                        <button className='flex flex-col font-bold text-[#311F09] md:hidden'>
                            <div className='flex w-8 h-4 items-center'><Square /><Square /></div>
                            <div className='flex w-8 h-4 items-center'><Square /> <Circle className='text-[#FF8A00] ' /></div>
                        </button>
                        <button className='hidden md:block py-3 px-8 bg-[#FF8A00] text-white text-sm font-semibold rounded-[133px]'>Sign in</button>
                        <button className='hidden md:block py-3 px-8 bg-[#3FA72F] text-white text-sm font-semibold rounded-[133px]'>Sign up</button>

                    </div>
                </nav>
                <h2 className={tinos.className + " text-2xl font-semibold my-10 text-center text-[80px]"}>Reservation</h2>
                <div className='bg-[rgba(138,234,255,0.4)] py-12 text-center rounded-[20px] text-[#5C4529] mb-12'>Due to limited availability, we can hold this table for you for <span className='text-[#311F09] font-semibold'>5:00 minutes</span></div>

                <h3 className='font-semibold text-2xl mb-4'>Date Order</h3>
                <div className='flex md:flex-row flex-col gap-10'>
                    <form className='w-full md:w-1/2 flex flex-col gap-10'>
                        <div className='w-full'>
                            <TextInput type='text' placeholder='First name' />
                        </div>
                        <div>
                            <TextInput type='text' placeholder='Last name' />
                        </div>
                        <div className='flex'>
                            <SelectInput list={Country} w="w-[120px]" />
                            <TextInput type='text' placeholder='Phone Number' />
                        </div>
                        <div>
                            <TextInput type='email' placeholder='Email address' />
                        </div>
                        <div>
                            <SelectInput list={Occations} />
                        </div>
                        <div>
                            <TextArea placeholder='Add a special request' />

                        </div>

                        <div>
                            <Checkbox />
                        </div>
                        <button className="bg-[#FF8A00] px-32 py-9 text-2xl text-white rounded-[20px] cursor-pointer">Confirm reservation</button>
                    </form>
                    <div className='w-full md:w-1/2'>
                        <div className='flex flex-col p-9 bg-[rgba(208,204,199,0.1)] gap-6 text-xl'>
                            <h4 className='text-2xl font-semibold'>Reservation detail</h4>
                            <div className='flex gap-2'><Calendar /> <span>Saturday, 28 february 2022</span></div>
                            <div className='flex gap-2'><TimerIcon /> <span>04:30 pm</span></div>
                            <div className='flex gap-2'><UserRound /> <span>2 people (Standar seating)</span></div>
                        </div>
                        <div className='flex flex-col gap-9 text-xl'>
                            <h3 className='text-2xl font-semibold'>Restaurant informations</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
