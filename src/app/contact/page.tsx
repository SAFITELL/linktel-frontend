'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone, FaArrowLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const backgrounds = ['/back1.jpeg', '/back2.jpeg' ];


export default function Contact() {
  const router = useRouter();
  const [bgIndex, setBgIndex] = useState(0);
  

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
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgrounds[bgIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.) blur(3px)',
            }}
          />
        </AnimatePresence>
      </div>

      {/* NAVBAR */}
      <nav className=" z-10  bg-opacity-28 bg-gradient-to-r from-[#000000] to-[#1E3A5F] py-4 px-6 md:px-12 text-white">
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
        </div>
      </nav>
      <div className="flex-grow flex justify-center items-center px-6 py-10 bg-gradient-to-r from-[#000000] to-[#1E3A5F]">
        <form className="w-full max-w-2xl bg-gradient-to-l from-[#000000] to-[#1E3A5F] bg-opacity-60 rounded-xl p-8 space-y-6">
          {/* Back Button inside form */}
          <div className="relative flex items-center space-x-2 text-white hover:text-red-200 cursor-pointer w-fit" onClick={() => router.back()}>
            <FaArrowLeft size={20} />
            <span className="text-sm font-semibold">Back</span>
          </div>
           <div className="relative w-full max-w-2xl bg-gradient-to-r from-[#000000] to-[#1E3A5F] bg-opacity-60 rounded-xl p-8 space-y-6">
            <h1 className="block text-2xl font-bold text-center">You can reach out to us via:</h1>
            <div className="space-y-2 text-center">
            {/* Phone */}
            <Link
                href="tel:07123456768"
                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-blue-500"
            >
                <FaPhone />
                <span>+254792156908 / +254103897494</span>
            </Link>

            {/* Email */}
            <Link
                href="mailto:mrsamuelmbugua@gmail.com"
                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-pink-500"
            >
                <FaEnvelope />
                <span>mrsamuelmbugua@gmail.com</span>
            </Link>

            {/* WhatsApp */}
            <Link
                href="https://wa.me/+254792156908"
                target="_blank"
                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-green-500"
            >
                <FaWhatsapp />
                <span>+254792156908</span>
            </Link>

            {/* Twitter */}
            <Link
                href="https://twitter.com/linktell"
                target="_blank"
                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-blue-500"
            >
                <FaTwitter />
                <span>@linktel</span>
            </Link>

            {/* Instagram */}
            <Link
                href="https://instagram.com/safitell_"
                target="_blank"
                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-pink-500"
            >
                <FaInstagram />
                <span>@safitell_</span>
            </Link>
            </div>
           
           </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Or Send Direct Message</h2>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="relative w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="relative w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Subject</label>
            <select className="relative w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option>General Inquiry</option>
              <option>Sponsorship or Partnership</option>
              <option>Technical Support / App Issues</option>
              <option>Feedback or Suggestions</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              rows={5}
              className="relative w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="relative w-full bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-xl shadow-lg cursor-pointer"
            >
              Send Message
            </button>
          </div>
          <br></br>
           
        </form>
        
      </div>

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