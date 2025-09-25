"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../next-seo.config";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaGlobe, FaDollarSign, FaTools, FaLock } from "react-icons/fa";

const backgrounds = ["/back.jpeg", "/back1.jpeg", "/back2.jpeg", "/back3.jpeg"];

export default function Page() {
  const [bgIndex, setBgIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const solutions = [
    { title: "SMS & Messaging", desc: "Send messages across all major African carriers with smart routing and guaranteed delivery." },
    { title: "Voice & IVR", desc: "Programmable voice calls and IVR menus to engage customers interactively with clear analytics." },
    { title: "USSD & Airtime/Data", desc: "Create interactive USSD menus, top-up airtime, or deliver data bundles programmatically with ease." },
  ];

  const whyLinktel = [
    { icon: <FaGlobe />, title: "Carrier-Agnostic & Reliable", desc: "Direct integrations with Safaricom, Airtel, MTN, and Telkom for smart failover routing, best pricing, and uptime." },
    { icon: <FaTools />, title: "Built for African Developers", desc: "Easy-to-use REST APIs, comprehensive SDKs, and mobile money integration (M-Pesa, Airtel Money, MTN MoMo)." },
    { icon: <FaDollarSign />, title: "Affordable & Transparent", desc: "Competitive rates with no hidden fees, subscriptions, or minimum commitments." },
    { icon: <FaLock />, title: "Compliant & Sovereign", desc: "Data sovereignty with local hosting, GDPR/PDPA compliance and built-in consent management." },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {typeof window !== "undefined" && <DefaultSeo {...defaultSEOConfig} />}

      {/* Background slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgrounds[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6) blur(1px)",
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-30" />
      </div>
      <nav className="z-10 bg-black bg-opacity-70 backdrop-blur-md py-4 px-6 md:px-12 shadow-sm">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
        <svg
                  width="50"
                  height="50"
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="rainbow-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF0000" />
                      <stop offset="16.6%" stopColor="#FF7F00" />
                      <stop offset="33.3%" stopColor="#FFFF00" />
                      <stop offset="50%" stopColor="#00FF00" />
                      <stop offset="66.6%" stopColor="#0000FF" />
                      <stop offset="83.3%" stopColor="#4B0082" />
                      <stop offset="100%" stopColor="#8B00FF" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="150"
                    cy="130"
                    r="90"
                    stroke="url(#rainbow-ring)"
                    strokeWidth="20"
                    fill="none"
                  />
                </svg>

                <p
                  className="text-4xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #FF0000 0%, #FF7F00 10%, #FFFF00 20%, #00FF00 0%, #8B00FF 60%)",
                    backgroundSize: "200% auto",
                  }}
                >
                  LinkTel
              </p>

        </Link>
      
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-white font-semibold">
            {["Home", "Solutions", "Pricing", "Developers"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#35B5AC]">{item}</Link>
            ))}
            <Link href="/login" className="px-4 py-2 rounded-md text-gray-800 bg-white hover:bg-gray-100">Log in</Link>
            <Link href="/signup" className="px-4 py-2 rounded-md bg-[#35B5AC] text-white font-bold hover:bg-[#2ca198]">Get it Now — It’s Free</Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl !text-white !z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white fixed top-0 left-0 w-full z-40 px-6 py-20 font-bold space-y-6 text-center">
          {["Home", "Solutions", "Pricing", "Developers"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <span className="block text-lg cursor-pointer">{item}</span>
            </Link>
          ))}
          <Link href="/login" className="block px-4 py-2 rounded-md">Log in</Link>
          <Link href="/signup" className="block bg-[#35B5AC] px-4 py-2 rounded-md text-white">Get it Now — It’s Free</Link>
          <button
            onClick={() => window.location.reload()}
            className="block bg-red-600 px-4 py-2 rounded-md text-white w-full mt-4"
          >
            Exit
          </button>
        </div>
      )}

      <main className="relative z-10 flex-grow flex flex-col md:flex-row items-start justify-between w-full max-w-7xl px-8 py-16">
        <div className="text-left max-w-xl space-y-6 md:ml-12">
          <motion.p className="text-gold font-semibold" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>20M+ Users</motion.p>
          <motion.h1 className="text-6xl font-bold text-white" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>LinkTel: Africa's Unified Communications Platform</motion.h1>
          <motion.p className="text-gray-200 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Seamlessly connect across Africa with a single API for SMS, Voice, USSD, Airtime and Data. Deliver reliable messaging, programmable voice and interactive USSD menus, all while ensuring data sovereignty and compliance.
          </motion.p>
          <div className="flex items-center space-x-4 mt-6">
            <Link href="/signup">
              <button className="px-6 py-3 bg-red-900 text-white rounded-md font-bold cursor-pointer hover:bg-gray-800 transform transition-transform duration-300 hover:scale-105">Get Started</button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 bg-white border border-gray-400 rounded-md font-bold text-black cursor-pointer hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105">Book a Demo →</button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative mt-12 md:mt-0 flex justify-center">
          <div className="relative w-[350px] h-[500px] bg-gradient-to-tr from-orange-500 to-pink-500 rounded-3xl shadow-xl overflow-hidden">
            <Image src="/item.jpg" alt="Person" fill className="object-cover" />

            {/* Floating tags */}
            <motion.div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-800" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>How is the fit?</motion.div>
            <motion.div className="absolute top-16 left-6 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-800" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}>Do you like the design?</motion.div>
            <motion.div className="absolute bottom-6 right-6 bg-white p-3 rounded-xl shadow-md flex items-center space-x-3" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }}>
              <Image src="/shoe.jpeg" alt="Shoe" width={70} height={70} className="rounded-md" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Nike Shoes Jordan</p>
                <p className="text-gray-600 font-bold">$849.99</p>
              </div>
            </motion.div>

            <div className="absolute top-6 right-6 bg-white px-4 py-3 rounded-xl shadow-md text-right">
              <p className="text-xs uppercase text-gray-500">Up to</p>
              <p className="text-2xl font-bold text-gray-900">60%</p>
              <p className="text-xs text-gray-500">More sales this week</p>
            </div>
          </div>
        </div>
      </main>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Solutions</h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">A unified platform to connect, communicate, and scale across Africa. Single API, multiple channels, total control.</p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
          {solutions.map((card, i) => (
            <motion.div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow duration-300 hover:scale-105" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY LINKTEL */}
      <section id="why-linktel" className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 md:py-32 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why LinkTel?</h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">LinkTel empowers African developers and businesses with a reliable, scalable, and compliant communications platform — all through a single unified API.</p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}>
          {whyLinktel.map((card, i) => (
            <motion.div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start space-y-4 hover:shadow-xl transition-shadow duration-300 hover:scale-105" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">{card.icon}<span>{card.title}</span></h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-black text-white py-10 mt-auto border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center space-x-3">
        <svg
                  width="50"
                  height="50"
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="rainbow-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF0000" />
                      <stop offset="16.6%" stopColor="#FF7F00" />
                      <stop offset="33.3%" stopColor="#FFFF00" />
                      <stop offset="50%" stopColor="#00FF00" />
                      <stop offset="66.6%" stopColor="#0000FF" />
                      <stop offset="83.3%" stopColor="#4B0082" />
                      <stop offset="100%" stopColor="#8B00FF" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="150"
                    cy="130"
                    r="90"
                    stroke="url(#rainbow-ring)"
                    strokeWidth="20"
                    fill="none"
                  />
                </svg>

                {/* Gradient Text */}
                <p
                  className="text-4xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #FF0000 0%, #FF7F00 10%, #FFFF00 20%, #00FF00 0%, #8B00FF 60%)",
                    backgroundSize: "200% auto",
                  }}
                >
                  LinkTel
              </p>

        </Link>
            </div>
            <p className="text-sm text-white">Bridging the connectivity divide using innovation and scalable technology.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Product", "Solutions", "Pricing", "Developers"].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase()}`} className="hover:text-[#35B5AC]">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect with Us</h4>
            <div className="flex space-x-4 text-lg">
              <a href="mailto:support@linktel.com" className="hover:text-[#35B5AC]"><FaEnvelope /></a>
              <a href="https://twitter.com/linktel" target="_blank" rel="noreferrer" className="hover:text-[#35B5AC]"><FaTwitter /></a>
              <a href="https://instagram.com/linktel" target="_blank" rel="noreferrer" className="hover:text-[#35B5AC]"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/linktel" target="_blank" rel="noreferrer" className="hover:text-[#35B5AC]"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">&copy; {new Date().getFullYear()} LinkTel. All rights reserved.</div>
      </footer>
    </div>
  );
}

