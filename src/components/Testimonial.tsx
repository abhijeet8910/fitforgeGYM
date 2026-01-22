import React from "react";

const testimonials = [
  {
    name: "Rohit Malhotra",
    role: "Software Engineer",
    quote:
      "I joined FitForge weighing 96kg and barely able to run for 5 minutes. In 6 months, I lost 18kg and gained real confidence. The trainers actually care here — it’s not just a business.",
    result: "–18kg fat loss in 6 months",
  },
  {
    name: "Ananya Patel",
    role: "Marketing Professional",
    quote:
      "This is the first gym where I stayed consistent for more than 3 months. The environment is motivating, the coaches are supportive, and the programs actually work.",
    result: "Dropped 2 dress sizes",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    quote:
      "FitForge completely changed my lifestyle. I feel stronger, healthier, and more energetic at 42 than I did at 30. Best decision I’ve made for myself.",
    result: "Gained strength + energy",
  },
  {
    name: "Neha Arora",
    role: "College Student",
    quote:
      "I was scared of gyms before joining FitForge. The trainers made me feel safe, confident, and capable. Now I actually look forward to working out.",
    result: "Built confidence + consistency",
  },
];

const Testimonials = () => {
  return (
    <section className="relative min-h-screen w-full py-28 bg-linear-to-br from-slate-950 via-indigo-950 to-black overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Real <span className="text-pink-600">Stories</span>. Real Results.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            Thousands have transformed their bodies and lives at FitForge.
            Here’s what some of them have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl text-white transition-all hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]"
            >
              {/* Quote Icon */}
              <div className="text-5xl text-pink-500/30 leading-none mb-4">
                “
              </div>

              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                {t.quote}
              </p>

              {/* Result Badge */}
              <div className="inline-block mb-6 px-4 py-1 rounded-full bg-pink-600/20 border border-pink-600/30 text-pink-400 text-xs font-semibold">
                {t.result}
              </div>

              {/* Author */}
              <div className="mt-auto">
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-linear-to-tr from-pink-600/10 via-purple-600/10 to-blue-600/10" />
            </div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className="mt-24 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-extrabold text-pink-600">5,000+</div>
              <div className="text-slate-300 mt-2">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-pink-600">4.9★</div>
              <div className="text-slate-300 mt-2">Google Rating</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-pink-600">10+</div>
              <div className="text-slate-300 mt-2">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-pink-600">12,000+</div>
              <div className="text-slate-300 mt-2">Transformations</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Your Transformation Starts Here 💪
          </h3>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Join FitForge today and become our next success story.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-500 transition shadow-lg">
            Join Now
          </button>
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
