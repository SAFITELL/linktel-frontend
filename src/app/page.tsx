'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const backgrounds = ['/back.jpeg', '/back1.jpeg', '/back2.jpeg', '/back3.jpeg'];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden ">
      <ToastContainer />
      
      {/*Transitions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgrounds[bgIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.5) blur(3px)',
            }}
          />
        </AnimatePresence>
      </div>

      {/* NAVBAR */}
      <nav className="z-10  bg-opacity-28 bg-gradient-to-r from-[#000000] to-[#1E3A5F] py-4 px-6 md:px-12 text-white">
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
        <div className="hidden md:flex items-center space-x-6 text-lg font-bold ml-29">
          {['Home', 'About Us', 'Careers', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
              <span className={`hover:text-[#35B5AC] ${item === 'Home' ? 'text-[#35B5AC]' : ''}`}>{item}</span>
            </Link>
          ))}
    
        
          <Link href="/signup" className="bg-red-600 px-4 py-2 rounded-md text-white font-bold hover:bg-blue-600 text-lg">Sign Up</Link>
          <Link href="/login" className="bg-white text-blue-800 px-4 py-2 rounded-md font-bold hover:bg-gray-100 text-lg">Login</Link>
        </div>
        <button className="relative md:hidden text-xl text-white  relative" onClick={() => setMenuOpen(!menuOpen)}>
           {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        </div>
      </nav>

      {/*The Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-70 text-white fixed top-0 left-0 w-full z-30 px-6 py-20 font-bold space-y-6 text-center">
          
          {['Home', 'About Us', 'Careers', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
                            <span
                className={`block text-lg cursor-pointer ${
                  item === 'Home' ? 'text-[#35B5AC]' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </span>
            </Link>
          ))}
          <Link href="/signup" className="block bg-red-600 px-4 py-2 font-bold rounded-md text-white">Sign Up</Link>
          <Link href="/login" className="block bg-white text-blue-800 px-4 py-2 rounded-md font-bold">Login</Link>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="z-10 flex-grow flex items-center justify-center text-white px-8 text-center">
        <motion.div
          className="space-y-6 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Bridging the connectivity divide <br /> using innovation and scalable technology.
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            At Safitell, we're creating Africa's smartest telecom marketplace.  
          </p>
          <Link href="/about-us">
            <button className="mt-4 px-6 py-3 bg-[#35B5AC] rounded-md hover:bg-[#2ca198] text-lg text-white">
              Get Started
            </button>
          </Link>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black bg-opacity-60 text-gray-300 text-center py-6 mt-auto z-10">
        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center space-y-3 text-sm">
          <div className="flex space-x-4 text-lg">
            <a href="mailto:mrsamuelmbugua908@gmail.com" className="hover:text-[#35B5AC]"><FaEnvelope /></a>
            <a href="https://twitter.com/linktel" target="_blank" rel="noopener noreferrer" className="hover:text-[#35B5AC]"><FaTwitter /></a>
            <a href="https://instagram.com/linktel" target="_blank" rel="noopener noreferrer" className="hover:text-[#35B5AC]"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/linktel" target="_blank" rel="noopener noreferrer" className="hover:text-[#35B5AC]"><FaLinkedin /></a>
          </div>
          <p className="text-xs text-gray-400 mt-1">&copy; {new Date().getFullYear()} LinkTel. All rights reserved.</p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex justify-center items-center space-x-4 text-sm">
          <a href="mailto:mrsamuelmbugua908@gmail.com" className="hover:text-[#35B5AC]"><FaEnvelope /></a>
          <a href="https://twitter.com/safitell" target="_blank" rel="noopener noreferrer" className="hover:text-[#35B5AC]"><FaTwitter /></a>
          <a href="https://instagram.com/safitell" target="_blank" rel="noopener noreferrer" className="hover:text-[#35B5AC]"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/safitell" target="_blank" rel="noopener noreferrer" className="hover:text-[#35B5AC]"><FaLinkedin /></a>
          <span className="text-gray-400 text-lg">•</span>
          <p className="ml-4">&copy; {new Date().getFullYear()} LinkTel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
