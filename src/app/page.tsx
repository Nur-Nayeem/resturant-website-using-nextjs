import CustomerSay from "@/components/CustomerSay";
import FoodMenu from "@/components/FoodMenu";
import GreatestChef from "@/components/GreatestChef";
import HeroSection from "@/components/HeroSection";
import OpenSection from "@/components/OpenSection";
import SecondHeroSection from "@/components/SecondHeroSection";
import ThirdHeroSection from "@/components/thirdHeroSection";

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-2.5 my-12">
        <HeroSection />
      </section>
      <section className="bg-[rgba(63,198,110,0.1)] px-2.5">
        <SecondHeroSection />
      </section>
      <section className="container mx-auto px-2.5 my-12">
        <FoodMenu menuTitle='Our popular menu' />
      </section>
      <section className="bg-[#fffbf5] px-2.5">
        <ThirdHeroSection />
      </section>
      <section className="container mx-auto px-2.5 my-12">
        <GreatestChef />
        <CustomerSay />
        <OpenSection />
      </section>
    </div>

  );
}
