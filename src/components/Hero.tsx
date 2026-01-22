// import Image from "next/image"
// import Button from "./ui/Button"
// import image from './../../public/logo.png'




// const Hero = () => {
//   return (
//     <section className="min-h-screen py-24 bg-linear-to-br from-slate-600/40 via-blue-900/75 to-slate-900/30 backdrop-blur-md overflow-hidden">
//         <main className="max-w-7xl mx-auto p-6 w-full grid lg:grid-cols-2 space-x-5 space-y-10">
//             <div className="mt-20">
//               <h1 className=" font-extrabold font-sans leading-loose"><span className="text-pink-700 lg:text-7xl md:text-6xl sm:text-6xl">Transform {' '}</span><span className="lg:text-6xl md:text-5xl sm:text-4xl">Your <br /> Body, <br /></span><span className="text-pink-700 lg:text-7xl md:text-6xl sm:text-5xl">Transform {' '}</span> <span className="lg:text-6xl md:text-5xl sm:text-4xl">Your <br />Life.</span></h1>
//               <p className="mt-6 font-sm font-semibold leading-relaxed mb-20">Join a community-driven gym built to help you get stronger, leaner, and more confident—no matter your fitness level.</p>

//               {/* CTA Button */}
//               <Button text = 'Join Now or Book a Demo '/>

//             </div>
//             <div className="bg-linear-to-tl from-pink-950/90 via-blue-900/75 to-pink-900/30 backdrop-blur-2xl  flex justify-center items-center rounded-full">
//                 <Image src={image} alt={'hero'} className='w-full h-full rounded-full '/>
//             </div>
//         </main>
//     </section>
//   )
// }

// export default Hero

import Image from "next/image";
import Button from "./ui/Button";
import image from "./../../public/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-black overflow-hidden">
      {/* Ambient Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-100 h-100 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="font-extrabold tracking-tight leading-[1.05]">
            <span className="block text-pink-600 text-5xl sm:text-6xl lg:text-7xl">
              Transform
            </span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl">
              Your Body,
            </span>
            <span className="block text-pink-600 text-5xl sm:text-6xl lg:text-7xl mt-2">
              Transform
            </span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl">
              Your Life.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-slate-300 text-lg leading-relaxed">
            Join a community-driven gym built to help you get stronger, leaner,
            and more confident — no matter your fitness level.
          </p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button text="Join Now" />
            <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              Book a Free Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-10 flex items-center gap-6 text-slate-400 text-sm">
            <div>
              <span className="text-white font-bold">100+</span> Members
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div>
              <span className="text-white font-bold">4.9★</span> Google Rating
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div>
              <span className="text-white font-bold">10+</span> Expert Trainers
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center items-center">
          {/* Glow Ring */}
          <div className="absolute w-90 h-90 sm:w-105 sm:h-105 rounded-full bg-linear-to-tr from-pink-600 via-purple-600 to-blue-600 blur-2xl opacity-40" />

          {/* Glass Circle */}
          <div className="relative w-75 h-75 sm:w-90 sm:h-90 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-center">
            <Image
              src={image}
              alt="Gym Logo"
              className="w-[80%] h-[80%] object-contain rounded-4xl"
              priority
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;

