"use client";

import React from "react";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`relative w-full mt-5 z-30 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 ">
          <div>
            <Link href={"/"} className="text-[28px] font-bold text-blue-900">
              WaySmart
            </Link>
          </div>

          <div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium transition duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
