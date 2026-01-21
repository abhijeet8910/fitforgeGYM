import About from "@/components/About";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <ChooseUs/>
    </div>
  );
}
