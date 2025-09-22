'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const backgrounds = ['/back1.jpeg', '/back2.jpeg' ];


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        // Store the token in localStorage or secure cookie
        localStorage.setItem('linktel_token', data.token);
        // Redirect to dashboard or home page
        router.push('/dashboard');
      } else {
        toast.error(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('/api/auth/google', {
        method: 'GET',
        credentials: 'include',
      });
      
      const data = await response.json();
      
      if (response.ok && data.authUrl) {
        window.location.href = data.authUrl;
      } else {
        toast.error('Google login is not available at the moment.');
      }
    } catch (error) {
      toast.error('Failed to initialize Google login.');
      console.error('Google login error:', error);
    }
  };

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
        </div>
      </nav>
      <main className="flex-grow flex items-center justify-center px-6 bg-black">
        <div className=" relative bg-gradient-to-r from-[#000000] to-[#1E3A5F] p-8 rounded-xl shadow-lg w-full max-w-md">
          {/* Back Arrow */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-sm text-gray-300 hover:text-red-500 mb-4 cursor-pointer"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <h2 className="text-2xl text-center font-semibold mb-6">Login to Your Account</h2>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-gray-300">Email</label>
              <div className="relative">
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-4 py-2 rounded-md  text-white placeholder-gray-500 focus:outline-none focus:ring focus:border-red-500 bg-gray-700"
                placeholder="you@example.com"
              />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring focus:border-red-500 bg-gray-700 pr-10"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`relative cursor-pointer w-full bg-red-700 hover:bg-red-800 transition px-4 py-2 rounded-md font-semibold ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="relative text-sm text-center mt-4">
            <a href="#" className="text-gray-300 hover:text-blue-200">
              Forgot Password?
            </a>
          </div>
          
           <div className="text-sm text-center mt-4">
            <p>
              OR
            </p>
          </div>
          <br></br>
        <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="relative cursor-pointer w-full py-3 px-4 rounded bg-white text-black font-semibold hover:bg-gray-200 items-center justify-center gap-1 flex"
            >
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google Logo"
                  className="w-5 h-5"
                />
              <span>{loading ? 'Loading...' : 'Sign in with Google'}</span>
            </button>

          <div className="text-sm text-center mt-6 text-gray-300">
            I have no account yet?{' '}
            <a href="/register" className="relative text-red-500 hover:underline cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
      </main>
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
