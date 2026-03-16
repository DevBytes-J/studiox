"use client";

import { ArrowRight } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Frame from "./Frame";
import { PiMedalFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Frame>
      <section className="relative  bg-[#181818] text-[#f5f5f5] font-sans selection:bg-orange-500/30 mt-[70px]">
        <div className="relative max-w-7xl mx-auto md:px-6 lg:px-12 pt-17 flex flex-col">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex z-10 flex-col max-[1300px]:items-center items-start max-[1300px]:text-center text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex rounded-full p-[1px] w-fit mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #A29C96 0%, transparent 15%), linear-gradient(315deg, #A29C96 0%, transparent 15%)",
              }}
            >
              <div className="flex items-center rounded-full text-[14px] bg-[#1D1D1D] pr-[10px]">
                <span className="text-[#B1B1B1] bg-[#0F0F0F] p-2 rounded-full border border-[#3F3F3F] m-[4px]">
                  <BsTwitterX />
                </span>
                X Growth Platform
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[40px] md:text-[56px] tracking-tighter leading-none mb-10 text-[#E2E2E2] "
            >
              The All-in-One Growth
              <br />
              OS for Serious 𝕏 Creators
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#B1B1B1] md:text-[16px] px-6 text-[14px] leading-relaxed mb-12"
            >
              Create smarter. Engage strategically. Scale predictably.
              <br />
              SuperX combines content, analytics, engagement, automation,
              <br className="lg:block hidden" />
              and monetization into one unified growth system for 𝕏.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex max-[1300px]:flex-col flex-row gap-10 lg:gap-4 justify-between items-center w-full"
            >
              <div className="flex flex-col max-[1300px]:items-center items-start ">
                <button
                  className="w-full py-3 text-[#FFF2EA] rounded-lg font-medium mb-8 flex items-center justify-center gap-2 relative overflow-hidden"
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
                    src="/pricing/glow2.png"
                    alt=""
                    width={100}
                    height={80}
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{ mixBlendMode: "screen" }}
                  />
                  <span className="relative z-10">Get Started Free</span>{" "}
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </button>
                <div className="text-[#8A8585] text-[12px] font-medium flex items-center gap-1 mt-3">
                  <span className="text-[#00A405]">
                    <PiMedalFill size={20} />
                  </span>
                  Featured on Chrome Webstore
                </div>
                {/* VERTICAL CONNECTOR (The line with nodes on both ends) */}
                <div className="max-[1300px]:hidden block">
                  <div className="relative left-[3px] top-full mt-4 w-3 h-3 rounded-full bg-[#363636]" />
                  <div className="relative left-[8px] top-full w-[1px] h-[220px] bg-[#363636]" />
                  <div className="relative left-[3px] top-full  w-3 h-3 rounded-full bg-[#363636]" />
                </div>
                <div className="flex max-[1300px]:flex-col flex-row items-center gap-4 lg:gap-2 max-[1300px]:mt-0 mt-4 max-[1300px]:mb-10 mb-20">
                  <div className="flex ">
                    <Image
                      src="/hero/reviews.png"
                      alt="User Avatar 1"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="flex flex-col max-[1300px]:items-center items-start">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <IoIosStar
                          key={i}
                          className="w-[9.5px] h-[9.5px] text-[#FFA500]"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#8A8585]">
                      Loved by 1458+ creators
                    </span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className=""
              >
                <Image
                  src="/hero/blur2.png"
                  alt=""
                  width={1100}
                  height={400}
                  className="absolute top-8 left-190 -translate-x-1/2 -z-10 opacity-70 max-[1300px]:hidden"
                />
                <Image
                  src="/hero/bg-col.png"
                  alt=""
                  width={1000}
                  height={400}
                  className="absolute top-70 left-200 -translate-x-1/2  z-0 opacity-70  max-[1300px]:hidden"
                />
                <div className="relative overflow-hidden -mb-21 max-[1300px]:mb-0 mx-0 max-[1300px]:mx-6">
                  <Image
                    src="/hero/hero-dash.png"
                    alt="Dashboard preview"
                    width={860}
                    height={300}
                    className=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>{" "}
        </div>
      </section>
    </Frame>
  );
}
