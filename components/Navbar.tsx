"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu2Line } from "react-icons/ri";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Creators", href: "#creators" },
    { name: "Blog", href: "#blog" },
    { name: "ChromeExtension", href: "#extension" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#181818] backdrop-blur-lg border-b border-[#363636]">
        <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="SuperX Logo" width={25} height={25} />
            <span className="text-xl font-bold font-sansation text-white">
              SuperX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#BCB5B5] hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button
              className="px-3 py-3 text-[#FFF2EA] rounded-lg font-medium flex items-center justify-center gap-2 relative overflow-hidden"
              style={{
                backgroundColor: "#141313",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(#141313, #141313), linear-gradient(199.88deg, #351D10 -39.57%, #000000 143.9%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <Image
                src="/nav-button.png"
                alt=""
                width={100}
                height={80}
                className="absolute top-0 left-0 pointer-events-none"
                style={{ mixBlendMode: "screen" }}
              />
              <span className="relative z-10">Get Started Free</span>{" "}
              <ArrowRight className="w-4 h-4 relative z-10" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#FF6453] hover:text-white transition hover:cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <RiMenu2Line size={28} />}
            </button>
          </div>
        </div>

        <div className="absolute -bottom-[9px] left-[4%] right-[4%] flex justify-between pointer-events-none">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-[#A3A3A3] -translate-y-px" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-[#A3A3A3] -translate-y-px" />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#181818] border-l border-[#363636] z-50 lg:hidden flex flex-col pt-20 px-6 shadow-2xl"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-[#BCB5B5] hover:text-white transition"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-6 text-lg mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-[#BCB5B5] hover:text-white transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto mb-8">
                <button
                  className="w-full px-3 py-3 text-[#FFF2EA] rounded-lg font-medium flex items-center justify-center gap-2 relative overflow-hidden"
                  style={{
                    backgroundColor: "#141313",
                    border: "2px solid transparent",
                    backgroundImage:
                      "linear-gradient(#141313, #141313), linear-gradient(199.88deg, #351D10 -39.57%, #000000 143.9%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                >
                  <span className="relative z-10">Get Started Free</span>{" "}
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
