import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <header className="container mx-auto px-2.5 my-12">
      <NavBar />
      <HeroSection />
    </header>

  );
}
