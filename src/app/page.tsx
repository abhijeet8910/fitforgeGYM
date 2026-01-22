import About from "@/components/About";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Membership from "@/components/MemebershipPlan";
import MemebershipPlan from "@/components/MemebershipPlan";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import Trainers from "@/components/Trainers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <ChooseUs/>
      <Services/>
      <Membership/>
      <Trainers/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
