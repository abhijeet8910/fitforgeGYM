

// const About = () => {
//   return (
//     <section className="min-h-screen bg-linear-to-br from-pink-800/90 to-slate-700/25 backdrop-blur-3xl py-24">
//         <main className="max-w-7xl mx-auto p-6 grid lg:grid-cols-2 space-x-5 space-y-10">
//             <div>
//                 <h1 className="text-7xl font-extrabold font-mono mb-8 leading-tight">Who We Are ?</h1>
//                 <p className="text-2xl">At <span className="text-4xl bg-linear-to-l from-blue-700/25 via-fuchsia-500 to-pink-900/90">FitForge</span>, we believe fitness is not just about looking good—it’s about feeling powerful, confident, and healthy in everyday life.</p>
//             </div>
            



//             <div>
                
//             </div>

//         </main>
//     </section>
//   )
// } 

// export default About


const About = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-slate-950 via-pink-950 to-black py-28 overflow-hidden">
      {/* Ambient Blobs */}
      <div className="absolute -top-32 -left-32 w-100 h-100 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
            Who <span className="text-pink-600">We Are</span>
          </h2>

          <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-xl">
            At{" "}
            <span className="font-bold text-white text-2xl">
              FitForge
            </span>
            , we believe fitness isn’t just about looking good —
            it’s about feeling powerful, confident, and unstoppable
            in everyday life.
          </p>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
            We’re a next-generation fitness studio built for real people
            with real goals. Whether you’re starting from zero or chasing
            elite performance, we design your journey to be safe, smart,
            and sustainable.
          </p>

          {/* Brand Values */}
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5">
              <h4 className="text-white font-semibold mb-1">Our Mission</h4>
              <p className="text-slate-300 text-sm">
                Build stronger bodies and unbreakable confidence.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5">
              <h4 className="text-white font-semibold mb-1">Our Vision</h4>
              <p className="text-slate-300 text-sm">
                Make fitness a lifestyle, not a phase.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual / Story Card */}
        <div className="relative flex justify-center items-center">
          {/* Glow Ring */}
          <div className="absolute w-105 h-105 rounded-full bg-linear-to-tr from-pink-600 via-purple-600 to-blue-600 blur-3xl opacity-30" />

          {/* Glass Card */}
          <div className="relative max-w-md w-full rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-10 shadow-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Built Different 💪
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              We don’t believe in shortcuts, fake promises, or one-size-fits-all
              programs. Every body is unique — and your training should be too.
            </p>

            <p className="text-slate-300 leading-relaxed">
              FitForge blends modern science, expert coaching, and a powerful
              community to help you become the strongest version of yourself —
              physically and mentally.
            </p>

            <button className="mt-8 px-6 py-3 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-500 transition shadow-lg">
              Meet Our Trainers
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;



