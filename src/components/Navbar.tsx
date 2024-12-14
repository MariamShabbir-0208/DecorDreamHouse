"use client"
import { useState } from 'react';
import Image from 'next/image';
import fulllogo from "@/../public/images/fulllogo.png"
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
  
        {/* Logo */}
        <Image src={fulllogo} alt='logo' width={ 185} height={41}/>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
        <Link href={"/"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors">Home</button></Link>
        <Link href={"/shop"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors">Shop</button></Link>
        <Link href={"/contact"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</button></Link>
        <Link href={"/blog"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors"></button>Blog</Link>
        </div>
        <div>  
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-yellow-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>


        {/* Icons Section */}
        <div className="hidden md:flex space-x-6">
          <button className="text-gray-600 hover:text-yellow-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A15.945 15.945 0 0112 16c3.866 0 7.328 1.343 9.879 3.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-yellow-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-yellow-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.401 2M7 16h10M5 21a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zM7 16l4-8h6l1.5 6H8.401"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
        <Link href={"/"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors">Home</button></Link>
        <Link href={"/shop"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors">Shop</button></Link>
        <Link href={"/contact"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors">Contact</button></Link>
        <Link href={"/blog"} ><li></li><button className="text-gray-600 hover:text-yellow-600 transition-colors"></button>Blog</Link>
          
        </div>



      )}
   </nav>
     );
}
