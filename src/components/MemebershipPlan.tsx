const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    features: [
      "Gym Access",
      "Locker Facility",
      "Free Wi-Fi",
      "1 Fitness Assessment",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    features: [
      "All Basic Features",
      "Personal Trainer (2 sessions)",
      "Group Classes",
      "Nutrition Guide",
      "Steam Bath",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹3,499",
    period: "/month",
    features: [
      "All Pro Features",
      "Unlimited PT Sessions",
      "Priority Support",
      "Diet Plan + Follow-ups",
      "VIP Lounge Access",
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Choose Your <span className="text-emerald-400">Membership</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Flexible plans designed for beginners, athletes, and fitness freaks.
            Upgrade anytime. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 backdrop-blur-xl bg-white/5
                ${
                  plan.popular
                    ? "border-emerald-400 shadow-[0_0_40px_rgba(52,211,153,0.25)] scale-105"
                    : "border-white/10"
                }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-black text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-emerald-400">✔</span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all
                  ${
                    plan.popular
                      ? "bg-emerald-400 text-black hover:bg-emerald-300"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

