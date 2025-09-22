'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const backgrounds = ['/back1.jpeg', '/back2.jpeg', '/back3.jpeg', '/back4.jpeg'];


export default function SignUp() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
   const getPasswordStrength = () => {
    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return "Strong";
    } else if (password.length >= 6) {
      return "Medium";
    }
    return "Weak";
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      toast.error("You must accept terms and conditions.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!firstName || !lastName || !email || !password || !phone || !confirmPassword) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phone,
          acceptedTerms
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Registration successful! Please check your email to verify your account.');
        // Store any necessary data
        localStorage.setItem('linktel_token', data.token);
        // Redirect to email verification page or dashboard
        router.push('/verify-email');
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred during registration. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const response = await fetch('/api/auth/google/signup', {
        method: 'GET',
        credentials: 'include',
      });
      
      const data = await response.json();
      
      if (response.ok && data.authUrl) {
        window.location.href = data.authUrl;
      } else {
        toast.error('Google signup is not available at the moment.');
      }
    } catch (error) {
      toast.error('Failed to initialize Google signup.');
      console.error('Google signup error:', error);
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
       <main className="flex justify-center items-center flex-grow px-4">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-2xl w-full space-y-6 shadow-lg">
          <button
            onClick={() => router.back()}
            className="relative text-gray-300 hover:text-red-500 mb-4 flex items-center space-x-2 cursor-pointer"
          >
            <FaArrowLeft />
            <span>Back</span>
          </button>

          <h2 className="text-3xl font-bold mb-2 text-blue-300 text-center">
            Create Your Account
          </h2>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white mb-1 text-sm">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="p-3 rounded bg-gray-100 text-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white mb-1 text-sm">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="p-3 rounded bg-gray-100 text-black"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-1 text-sm">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="p-3 rounded bg-gray-100 text-black"
                required
              />
            </div>
            

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white mb-1 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="p-3 rounded bg-gray-100 text-black"
                required
              />
              <p className="text-xs text-gray-400 mt-1">
                We'll contact you using this number.
              </p>
            </div>

            <div className="flex flex-col relative">
              <label htmlFor="password" className="text-white mb-1 text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 rounded bg-gray-100 text-black w-full"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col relative">
              <label
                htmlFor="confirmPassword"
                className="text-white mb-1 text-sm"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="p-3 rounded bg-gray-100 text-black w-full"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

           

            

           
          </div>

          <div className="text-sm">
            <span className="text-gray-300">Password Strength: </span>
            <span
              className={`font-bold ${
                getPasswordStrength() === "Strong"
                  ? "text-green-500"
                  : getPasswordStrength() === "Medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {getPasswordStrength()}
            </span>
          </div>

          
          {/* Terms and Create Account */}
          <div className="space-y-4">
            <label className="relative flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-blue-300 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-300 underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              onClick={handleRegister}
              disabled={!acceptedTerms || loading}
              className={`relative cursor-pointer w-full py-3 rounded ${
                acceptedTerms
                  ? "bg-blue-500 hover:bg-blue-900"
                  : "bg-gray-600 cursor-not-allowed"
              } text-white font-semibold`}
            >
               {loading ? "Registering..." : "Create Account"}
            </button>

            <button
              onClick={handleGoogleSignup}
              disabled={loading}
              className="relative w-full py-3 px-4 rounded bg-white text-black font-semibold hover:bg-gray-200 items-center cursor-pointer justify-center gap-1 flex"
            >
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google Logo"
                  className="w-5 h-5"
                />
              <span>{loading ? 'Loading...' : 'Sign up with Google'}</span>
            </button>

            <p className="relative text-sm text-center cursor-pointer">
              Already have an account?{" "}
              <a href="/login" className="text-red-400 underline">
                Sign In
              </a>
            </p>
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
