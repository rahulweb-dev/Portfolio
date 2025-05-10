"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); // to track active tab

  const menuItems = ["Home", "Biography", "Skills", "Portfolio"];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/rahul.png"
              alt="Rahul Logo"
              width={48}
              height={48}
              className="h-full w-full"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setActive(item)}
                className={`relative uppercase text-sm font-medium transition duration-300 ${
                  active === item ? "text-red-500" : "text-black"
                } hover:text-red-500`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-red-500 transform transition-transform duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium uppercase transition duration-300 ${
                active === item ? "text-red-500 bg-gray-100" : "text-black"
              } hover:bg-gray-100 hover:text-red-500`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
