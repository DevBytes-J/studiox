"use client";

import Frame from "./Frame";
import { IoArrowForward } from "react-icons/io5";
import { LuListVideo } from "react-icons/lu";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Frame>
      <section className="bg-[#181818] text-white py-20">
        <div className="max-w-7xl mx-auto md:px-12 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex rounded-full p-[1px] w-fit mb-4 max-[1300px]:mx-auto mx-0"
            style={{
              background:
                "linear-gradient(135deg, #A29C96 0%, transparent 15%), linear-gradient(315deg, #A29C96 0%, transparent 15%)",
            }}
          >
            <div className="flex items-center rounded-full text-[14px] bg-[#1D1D1D] pr-[10px]">
              <span className="text-[#B1B1B1] bg-[#0F0F0F] p-2 rounded-full border border-[#3F3F3F] m-[4px]">
                <LuListVideo />
              </span>
              X Growth Platform
            </div>
          </motion.div>
          {/* ── Mobile / Tablet layout (hidden on desktop) ── */}
          <div className="min-[1300px]:hidden">
            <div className="mb-8 px-6">
              <h1 className="md:text-[36px] text-[24px]  font-medium mb-6 text-[#E2E2E2] leading-tight text-center">
                Built For Serious Creators
              </h1>
              <p className="text-[#BCB5B5] mb-4 text-center md:text-[16px] text-[14px]">
                Whether you're validating ideas, building in public, scaling an
                audience into a business, or monetizing influence, SuperX adapts
                to how serious you are about growth.
              </p>
              <p className="text-[#FFC35B] flex items-center gap-[4px] justify-center">
                Try Superx Now{" "}
                <span className="mt-1">
                  <IoArrowForward />
                </span>
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4  md:mx-16 mx-6">
              {/* Card 1 */}
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgi.png"
                      alt="Traders & Analysts"
                      width={500}
                      height={500}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Traders &amp; Analysts
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">Signal &gt; noise.</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/img2.png"
                      alt="Indie Hackers"
                      width={500}
                      height={500}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="mt-2 p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Indie Hackers
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Ship faster, test in public, and grow with structured
                      content and engagement systems.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgiii.png"
                      alt="Founders"
                      width={500}
                      height={500}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Founders
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Build distribution alongside product with a repeatable
                      growth engine.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgiv.png"
                      alt="Web Creators"
                      width={500}
                      height={500}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="mt-2 p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Web Creators
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Post better. Stay consistent.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div
                className="rounded-2xl p-[1px] h-[300px] md:col-span-2"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgv.png"
                      alt="Influencers"
                      width={500}
                      height={500}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="mt-2 p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Influencers
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Convert attention into income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop layout (unchanged, hidden below lg) ── */}
          <div className="hidden min-[1300px]:flex flex-row gap-4">
            <div className="w-1/3">
              <div>
                <h1 className="text-[36px] font-medium mb-6 text-[#E2E2E2] leading-tight">
                  Built For Serious Creators
                </h1>
                <p className="text-[#BCB5B5] mb-8 max-w-2xl">
                  Whether you're validating ideas, building in public, scaling
                  an audience into a business, or monetizing influence, SuperX
                  adapts to how serious you are about growth.
                </p>
                <p className="text-[#FFC35B] mb-[75px] max-w-2xl flex items-center gap-[4px]">
                  Try Superx Now{" "}
                  <span className="mt-1">
                    <IoArrowForward />
                  </span>{" "}
                </p>
              </div>
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgi.png"
                      alt="Feature 1"
                      width={500}
                      height={500}
                      className=" object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Traders & Analysts
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">Signal &gt; noise.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/feature/hori1.png"
                alt="Feature 1"
                width={6.8}
                height={100}
                className=" object-cover"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/img2.png"
                      alt="Feature 1"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 p-4 ">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Indie Hackers
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Ship faster, test in public, and grow with structured
                      content and engagement systems.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/feature/verti2.png"
                  alt="Feature 1"
                  width={650}
                  height={100}
                  className=" object-cover"
                />
              </div>
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgiii.png"
                      alt="Feature 1"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Founders
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Build distribution alongside product with a repeatable
                      growth engine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/feature/hori1.png"
                alt="Feature 1"
                width={6.8}
                height={100}
                className=" object-cover"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgiv.png"
                      alt="Feature 1"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 p-4 ">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Web Creators
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Post better. Stay consistent.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/feature/verti2.png"
                alt="Feature 1"
                width={650}
                height={100}
                className=" object-cover"
              />
              <div
                className="rounded-2xl p-[1px] h-[300px]"
                style={{
                  background:
                    "linear-gradient(180deg, #363636 0%, #181818 100%)",
                }}
              >
                <div
                  className="rounded-2xl h-full flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, #181818 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    <Image
                      src="/feature/imgv.png"
                      alt="Feature 1"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 p-4 ">
                    <h3 className="text-[#E2E2E2] font-medium mb-1">
                      Influencers
                    </h3>
                    <p className="text-[#BCB5B5] text-sm">
                      Convert attention into income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Frame>
  );
}
