import FoodMenu from "@/components/FoodMenu";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import SecondHeroSection from "@/components/SecondHeroSection";
import ThirdHeroSection from "@/components/thirdHeroSection";


export default function Home() {
  return (
    <div>
      <header className="container mx-auto px-2.5 my-12">
        <NavBar />
        <HeroSection />

      </header>
      <section className="bg-[rgba(63,198,110,0.1)] px-2.5">
        <SecondHeroSection />
      </section>
      <section className="container mx-auto px-2.5 my-12">
        <FoodMenu />
      </section>
      <section className="bg-[#fffbf5] px-2.5">
        <ThirdHeroSection />
      </section>
    </div>

  );
}
