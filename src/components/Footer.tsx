import Link from "next/link";
import React from "react";

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-linear-to-br from-slate-950 via-black to-neutral-950 text-white overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              Fit<span className="text-pink-600">Forge</span>
            </h3>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-sm">
              A next-generation fitness studio built to transform your body,
              confidence, and lifestyle. Train smart. Live strong.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#about" className="hover:text-pink-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-pink-500 transition">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-pink-500 transition">
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-pink-500 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>Personal Training</li>
              <li>Strength & Conditioning</li>
              <li>Fat Loss Programs</li>
              <li>Group Classes</li>
              <li>Nutrition Guidance</li>
              <li>Mobility & Recovery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>📍 Ground Floor, Badram, Siwan</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@fitforge.in</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                href=""
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaFacebook/>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram/>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaWhatsapp/>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FitForge. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-pink-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              Refund Policy
            </a>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
