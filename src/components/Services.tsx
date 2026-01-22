// import React from 'react'

// const Services = () => {
//   return (
//     <section className='min-h-screen w-full  bg-linear-to-br from-pink-800/90 to-slate-700/25 backdrop-blur-3xl'>
//         <main className='max-w-7xl mx-auto grid lg:grid-cols-2 space-x-4 space-y-10 p-6'>
//             <div>Text</div>
//             <div>Image</div>

//         </main>
//     </section>
//   )
// }

// export default Services


import React from "react";

const services = [
  {
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your body, goals, and lifestyle. Every session is designed to push your limits safely and effectively.",
  },
  {
    title: "Strength & Conditioning",
    description:
      "Build real strength, endurance, and power with scientifically structured programs used by athletes and professionals.",
  },
  {
    title: "Fat Loss Programs",
    description:
      "Burn fat, boost metabolism, and reshape your body with smart training and sustainable routines that actually work.",
  },
  {
    title: "Group Classes",
    description:
      "High-energy group workouts that keep you motivated, consistent, and accountable — without losing personal attention.",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Custom diet strategies based on your body type, goals, and preferences. No crash diets. No fake promises.",
  },
  {
    title: "Mobility & Recovery",
    description:
      "Improve flexibility, prevent injuries, and recover faster with guided mobility routines and recovery protocols.",
  },
];

const Services = () => {
  return (
    <section className="relative min-h-screen w-full py-28 bg-linear-to-br from-slate-950 via-purple-950 to-black overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            Everything you need to transform your body, mind, and lifestyle —
            all under one roof.
          </p>
        </div>

        {/* Zig-Zag Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 items-center gap-10 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Number / Accent */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="text-7xl font-extrabold text-white/10 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Glass Card */}
              <div
                className={`rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-10 shadow-2xl ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-relaxed text-lg">
                  {service.description}
                </p>

                <button className="mt-6 px-6 py-3 rounded-xl bg-pink-600/90 text-white font-semibold hover:bg-pink-500 transition shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;
