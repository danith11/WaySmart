"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${
          isHome
            ? scrolled
              ? "bg-white/70 backdrop-blur-md shadow"
              : "bg-transparent"
            : "bg-white shadow"
        }
      `}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`text-2xl font-bold ${
            isHome && !scrolled ? "text-white" : "text-blue-900"
          }`}
        >
          WaySmart
        </Link>

        <div className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-md font-medium transition
                ${
                  isHome && !scrolled
                    ? "text-white hover:text-gray-300"
                    : "text-gray-700 hover:text-blue-600"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

