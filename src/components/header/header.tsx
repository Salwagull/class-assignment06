import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md mt-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link href="/">
            <Image
              src="/images/logo1.svg"
              alt="Company Logo"
              width={130.6}
              height={30.38}
              className="w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-black hover:text-gray-700 transition">
            Home
          </Link>
          <Link href="/courses" className="text-black hover:text-gray-700 transition">
            Courses
          </Link>
          <Link href="/services" className="text-black hover:text-gray-700 transition">
            Services
          </Link>
          <Link href="/achievement" className="text-black hover:text-gray-700 transition">
            Achievement
          </Link>
          <Link href="/aboutus" className="text-black hover:text-gray-700 transition">
            About Us
          </Link>
          <Link href="/testimonial" className="text-black hover:text-gray-700 transition">
            Testimonial
          </Link>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-200 hover:text-gray-800 transition"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition"
          >
            Sign Up
          </Link>
        </div> 
      </div>
    </header>
  );
};

export default Header;
