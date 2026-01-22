import React from "react";

const trainers = [
  {
    name: "Aarav Mehta",
    role: "Head Strength Coach",
    bio: "Specialist in strength training and body recomposition with 10+ years of experience transforming beginners into athletes.",
    expertise: ["Strength", "Hypertrophy", "Athletic Performance"],
  },
  {
    name: "Riya Sharma",
    role: "Fat Loss & Conditioning Coach",
    bio: "Expert in sustainable fat loss and metabolic conditioning. Known for helping clients lose 10–20kg safely.",
    expertise: ["Fat Loss", "HIIT", "Conditioning"],
  },
  {
    name: "Karan Verma",
    role: "Mobility & Recovery Coach",
    bio: "Focused on flexibility, injury prevention, and pain-free movement for long-term fitness and recovery.",
    expertise: ["Mobility", "Recovery", "Posture"],
  },
  {
    name: "Neha Kapoor",
    role: "Nutrition & Lifestyle Coach",
    bio: "Designs realistic nutrition plans that fit busy lifestyles. No crash diets. No fake promises.",
    expertise: ["Nutrition", "Habit Building", "Lifestyle"],
  },
];

const Trainers = () => {
  return (
    <section className="relative min-h-screen w-full py-28 bg-linear-to-br from-slate-950 via-pink-950 to-black overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Meet Our <span className="text-pink-600">Elite Trainers</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            Certified professionals. Real-world experience. Proven results.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl text-white transition-all hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]"
            >
              {/* Initials Avatar */}
              <div className="w-16 h-16 rounded-full bg-linear-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                {trainer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-pink-500 text-sm font-semibold mb-4">
                {trainer.role}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {trainer.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {trainer.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover Glow Accent */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-linear-to-tr from-pink-600/10 via-purple-600/10 to-blue-600/10" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Train With The Best 💪
          </h3>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Get matched with a coach who understands your goals and builds a
            plan just for you.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-500 transition shadow-lg">
            Book a Free Consultation
          </button>
        </div>
      </main>
    </section>
  );
};

export default Trainers;
