"use client";

import Image from "next/image";
import Frame from "./Frame";
import { HiLightBulb } from "react-icons/hi";
import { CgArrowRightR } from "react-icons/cg";
import { FaAt, FaPencilAlt } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";
import { RiChatSmile2Line } from "react-icons/ri";
import { MdAccountTree } from "react-icons/md";
import { motion } from "framer-motion";

interface Feature {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageSide: "left" | "right";
  icon: any;
  items: {
    title: string;
    description: string;
  }[];
}

const features: Feature[] = [
  {
    tag: "Daily Viral Inspiration",
    title: "Start every day with proven ideas.",
    description:
      "SuperX surfaces high-performing posts in your niche daily so you’re never guessing what to create next.",
    image: "/content/group1.png",
    imageSide: "right",
    icon: HiLightBulb,
    items: [
      {
        title: "Niche-Specific Curation",
        description: "Only viral posts relevant to your space.",
      },
      {
        title: "Performance-Backed Selection",
        description: "Ideas validated by real engagement.",
      },
      {
        title: "Daily Momentum",
        description: "Open the app knowing exactly what to post.",
      },
    ],
  },
  {
    tag: "Trend-Based Inspiration",
    title: "Stay ahead of what’s rising.",
    description:
      "Spot emerging conversations, formats, and angles before they peak.",
    image: "/content/group2.png",
    imageSide: "left",
    icon: CgArrowRightR,
    items: [
      {
        title: "Real-Time Trend Signals",
        description: "See what's accelerating now, not yesterday.",
      },
      {
        title: "Format Awareness",
        description: "Identify structures gaining traction.",
      },
      {
        title: "Early-Mover Advantage",
        description: "Create before saturation hits.",
      },
    ],
  },
  {
    tag: "Rewrite with AI",
    title: "Refine Faster. Sound Sharper.",
    description:
      "SuperX removes your posts instantly without losing your tone.",
    image: "/content/group3i.png",
    imageSide: "right",
    icon: FaPencilAlt,
    items: [
      {
        title: "Tone-Matched Variations",
        description: "Keeps your personality intact.",
      },
      {
        title: "Instant Optimization",
        description: "Upgrade clarity, hooks, and flow in seconds.",
      },
      {
        title: "Less Editing, More Publishing",
        description: "Move from draft to done faster.",
      },
    ],
  },
  {
    tag: "Smart Scheduler",
    title: "Post When Reach Is Highest. Every Time.",
    description:
      "SuperX analyzes your audience behavior and publishes when it matters most.",
    image: "/content/group4i.png",
    imageSide: "left",
    icon: FaRegCalendarDays,
    items: [
      {
        title: "Audience Activity Mapping",
        description: "Know when your followers are active.",
      },
      {
        title: "Automatic Timing Decisions",
        description: "No manual guesswork.",
      },
      {
        title: "Consistency Engine",
        description: "Maintain output without burnout.",
      },
    ],
  },
  {
    tag: "Engagement Growth Engine",
    title: "Turn Engagement Into Predictable Growth.",
    description: "SuperX shows you where to engage for maximum visibility.",
    image: "/content/group5.png",
    imageSide: "right",
    icon: MdOutlinePeopleAlt,
    items: [
      {
        title: "Strategic Engagement Feed",
        description: "See posts worth replying to right now.",
      },
      {
        title: "Visibility-Boosting Replies",
        description: "Craft responses designed for reach.",
      },
      {
        title: "Engagement-to-Follower Tracking",
        description: "Measure growth from interaction.",
      },
    ],
  },
  {
    tag: "Unified Mentions Hub",
    title: "Never miss a high-value interaction.",
    description:
      "SuperX centralizes conversations so you stay responsive and visible.",
    image: "/content/group6.png",
    imageSide: "left",
    icon: FaAt,
    items: [
      {
        title: "Cross-Account View",
        description: "All mentions in one place with full context.",
      },
      {
        title: "Streamlined Responses",
        description: "Reply faster without context switching.",
      },
    ],
  },
  {
    tag: "Deep Growth Intelligence",
    title: "Know exactly what’s working and why.",
    description:
      "SuperX goes beyond surface metrics to reveal the patterns driving your growth.",
    image: "/content/group7i.png",
    imageSide: "right",
    icon: BiBarChart,
    items: [
      {
        title: "Performance Breakdown",
        description: "See why posts succeed or fail.",
      },
      {
        title: "Audience Behavior Insights",
        description: "Understand what triggers engagement.",
      },
      {
        title: "Double-Down Signals",
        description: "Identify winning themes and scale them.",
      },
    ],
  },
  {
    tag: "Direct Message Growth Engine",
    title: "Turn engagement into real conversations at scale.",
    description:
      "SuperX helps you send personalized, rate-safe DMs to the right people automatically, without risking spam flags or account damage.",
    image: "/content/group8.png",
    imageSide: "left",
    icon: RiChatSmile2Line,
    items: [
      {
        title: "Smart Personalization",
        description: "Bulk outreach that doesn’t feel bulk.",
      },
      {
        title: "Dynamic Variables",
        description:
          "Use [first], [name], and [handle] to personalize every message automatically.",
      },
      {
        title: "Live Preview Mode",
        description: "See exactly how each DM will appear before sending.",
      },
    ],
  },
];

export default function UnifiedFeatures() {
  return (
    <Frame>
      <section className="bg-[#181818] text-white py-[80px]">
        <div className="max-w-[1240px] mx-auto md:px-10 px-10">
          <div className="flex flex-col justify-center items-center">
            <div
              className="flex rounded-full p-[1px] w-fit"
              style={{
                background:
                  "linear-gradient(135deg, #A29C96 0%, transparent 15%), linear-gradient(315deg, #A29C96 0%, transparent 15%)",
              }}
            >
              <div className="flex items-center rounded-full text-[14px] bg-[#1D1D1D] pr-[10px]">
                <span className="text-[#B1B1B1] bg-[#0F0F0F] p-2 rounded-full border border-[#3F3F3F] m-[4px]">
                  <MdAccountTree />
                </span>
                Features
              </div>
            </div>
            <h2 className="md:text-[36px] text-[28px] font-medium text-[#E2E2E2] text-center mb-[59px]">
              The Complete Operating System <br /> For Growing on X
            </h2>
          </div>
          {features.map((feature, idx) => (
            <div key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex max-[1300px]:flex-col flex-row gap-10 mb-10 md:mx-16 lg:mx-0 mx-0 ${
                  feature.imageSide === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Side */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: feature.imageSide === "right" ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative flex-1 rounded-2xl p-6 overflow-hidden"
                  style={{
                    // Background fade inside the card
                    background:
                      "linear-gradient(180deg, #2A2A2A 0%, rgba(42,42,42,0) 100%)",
                  }}
                >
                  {/* Gradient border overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      border: "1px solid transparent top left right",
                      borderRadius: "1rem", // matches your rounded-2xl
                      background:
                        "linear-gradient(180deg, #363636 0%, #181818 70%, rgba(24,24,24,0) 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      maskComposite: "exclude",
                      padding: "1px", // thickness of border
                    }}
                  ></div>

                  <div
                    className="rounded-full p-[1px] w-fit mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF6453 0%, transparent 15%), linear-gradient(315deg, #FF6453 0%, transparent 15%)",
                    }}
                  >
                    <div className="flex items-center gap-[6.5px] bg-[#1D1D1D] rounded-full">
                      <div className="p-2 bg-[#0F0F0F] rounded-full m-[4px]">
                        <feature.icon className="w-5 h-5 text-[#FF6453]" />
                      </div>
                      <span className="text-[#FFE4E2] text-[13px] font-light tracking-[0.15em] mr-[4px]">
                        {feature.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[20px] md:text-[26px] font-medium mb-2 leading-[1.15] tracking-tight ">
                    {feature.title}
                  </h3>
                  <p className="text-[#8A8585] text-[14px] mb-4 leading-relaxed max-w-[480px]">
                    {feature.description}
                  </p>

                  <div className="relative pl-10 space-y-4">
                    {/* Vertical Connector */}
                    <div className="absolute left-[4.5px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#FF4D00] via-[#FF4D00]/40 to-[#FF4D00]/10" />

                    {feature.items.map((item, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      >
                        {/* Bullet Point */}
                        <div className="absolute -left-[40px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F4503B] shadow-[0_0_10px_6px_rgba(244,80,59,0.7)] group-hover:scale-125 transition-transform" />

                        <h4 className=" mb-2 tracking-tight group-hover:text-white transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[#8A8585] text-[14px] leading-relaxed group-hover:text-[#a0a0a0] transition-colors">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: feature.imageSide === "right" ? 30 : -30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-[1.5] rounded-2xl relative overflow-hidden p-[1px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #363636 0%, #181818 69.23%)",
                    boxShadow: "0px 4px 27px 0px #00000014",
                  }}
                >
                  <div
                    className="rounded-2xl overflow-hidden h-full"
                    style={{
                      background:
                        "linear-gradient(181.55deg, #2A2A2A -38.91%, rgba(24, 24, 24, 0.24) 145.23%)",
                    }}
                  >
                    <div
                      className={`relative ${
                        idx === 0
                          ? ""
                          : feature.imageSide === "left"
                            ? "pt-[56px] pl-[56px]"
                            : "pt-[56px] pl-[56px]"
                      }`}
                    >
                      <Image
                        src={
                          feature.imageSide === "left"
                            ? "/content/bg.png"
                            : "/content/bgii.png"
                        }
                        alt=""
                        width={900}
                        height={900}
                        className={`absolute ${
                          feature.imageSide === "left"
                            ? "top-0 right-0"
                            : "top-0 left-0"
                        }`}
                      />
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={5000}
                        height={500}
                        className="relative w-full object-cover opacity-90"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {idx < features.length - 1 && (
                <div className="flex items-center my-[35px] md:mx-16 lg:mx-0 mx-0">
                  <span className="text-[#3A3A3A] flex items-center justify-center w-1 h-px bg-[#343434] relative">
                    <span className="absolute text-xs leading-none text-[#9F9F9F]">+</span>
                  </span>
                  <div className="flex-1 h-px bg-[#343434]" />
                  <span className="text-[#3A3A3A] flex items-center justify-center w-1 h-px bg-[#343434] relative">
                    <span className="absolute text-xs leading-none text-[#9F9F9F]">+</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Frame>
  );
}
