import Image from "next/image"
import Button from "./ui/Button"
import image from './../../public/gym3.jpg'

//To Do List
//1.Design
//2.Mobile view
//3.more modern approach
//4. aDd one more button


const Hero = () => {
  return (
    <section className="min-h-screen py-24 bg-linear-to-br from-slate-600/40 via-blue-900/75 to-slate-900/30 backdrop-blur-md">
        <main className="max-w-7xl mx-auto p-6 w-full grid lg:grid-cols-2 space-x-5 space-y-10">
            <div className="">
              <h1 className=" font-extrabold font-sans leading-tight"><span className="text-pink-700 lg:text-7xl md:text-6xl sm:text-6xl">Transform {' '}</span><span className="lg:text-6xl md:text-5xl sm:text-4xl">Your <br /> Body, <br /></span><span className="text-pink-700 lg:text-7xl md:text-6xl sm:text-5xl">Transform {' '}</span> <span className="lg:text-6xl md:text-5xl sm:text-4xl">Your <br />Life.</span></h1>
              <p className="mt-6 font-sm font-semibold leading-relaxed mb-20">Join a community-driven gym built to help you get stronger, leaner, and more confident—no matter your fitness level.</p>

              {/* CTA Button */}
              <Button text = 'Join Now'/>

            </div>
            <div className="bg-linear-to-tl from-pink-950/90 via-blue-900/75 to-pink-900/30 backdrop-blur-2xl rounded-3xl flex justify-center items-center">
                <Image src={image} alt={'hero'} className='w-full h-full rounded-full '/>
            </div>
        </main>
    </section>
  )
}

export default Hero
