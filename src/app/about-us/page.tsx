import Image from "next/image";
import img1 from '@/assets/aboutus-img1.png'
import img2 from '@/assets/aboutus-img2.png'
import img3 from '@/assets/aboutus-img3.png'
import { tinos } from "../layout";

export default function AboutUs() {
    return (
        <div className="container mx-auto md:px-0 px-2.5 ">
            <div className=" flex justify-between items-center md:flex-row flex-col">

                <figure className="md:w-[50%] w-full  border-[70px] border-[rgba(208,204,199,0.2)] rounded-full">
                    <Image src={img1} alt="image1" />
                </figure>


                <div className="max-w-[480px] md:w-[50%]">
                    <h2 className={tinos.className + " text-[#311F09] font-bold text-[80px] leading-none mb-14"}><span className="text-[#FF8A00]">Our</span><br />restautant</h2>
                    <p className="text-[#5C4529] text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
            </div>


            <div className=" flex justify-between items-center md:flex-row flex-col">


                <div className="max-w-[480px] md:w-[50%]">
                    <p className="text-[#5C4529] text-xl leading-9">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>


                <figure className="md:w-[50%] w-full  border-[70px] border-[rgba(208,204,199,0.2)] rounded-full">
                    <Image src={img2} alt="image1" />
                </figure>

            </div>


            <div className="my-32 flex justify-between items-start  md:items-center md:flex-row flex-col">
                <figure className="">
                    <Image className="lg:w-[55%] md:w-[75%] w-full" src={img3} alt="chef" />
                </figure>
                <div className="">
                    <div className="lg:mb-24 mb-12">
                        <h2 className={tinos.className + " text-[#311F09] font-bold text-5xl lg:text-[80px] leading-none mb-10"}><span className="text-[#FF8A00]">Owner</span> &<br />Executive Chef</h2>
                        <p className="text-2xl lg:text-[40px] font-semibold">Ismail Marzuki</p>
                    </div>
                    <p className="max-w-[500px] text-xl lg:text-3xl font-light italic leading-12 text-[#5C4529]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem</p>
                </div>

            </div>
        </div>
    )
}