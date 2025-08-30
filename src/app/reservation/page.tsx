'use client'
import Image from "next/image";
import reservationImg from '@/assets/reservation.png'
import CustomDateInput from "@/components/Date";
import CustomTimeInput from "@/components/Time";
import CustomNumberSelect from "@/components/PartySizeInput";
import { tinos } from "../layout";
import { useState } from "react";
import Modal from "@/components/Modal";


export default function ReservationPage() {

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="flex w-[100vw] items-center justify-between my-36 md:flex-row flex-col">
            <figure className="w-full md:w-1/2 border-[30px] md:border-[69px] bg-[rgba(208,204,199,0.2)] border-[rgb(208,204,199,0)] rounded-r-full">

                <Image className="pl-28 w-full" src={reservationImg} alt="reservation img" />
            </figure>
            <div className=" flex flex-col gap-12 lg:mr-56">
                <h1 className={tinos.className + " text-center  text-[80px] font-bold"}>Book a table</h1>


                <form className="w-full mx-auto flex flex-col gap-10">
                    <CustomDateInput />
                    <CustomTimeInput />
                    <CustomNumberSelect />

                </form>
                <button onClick={toggleModal} className="bg-[#FF8A00] mx-2.5 md:mx-0 py-9 text-2xl text-white font-semibold rounded-[20px] cursor-pointer w-full">Book now</button>

                <Modal isOpen={isModalOpen} onClose={toggleModal} />


            </div>

        </div>
    )
}