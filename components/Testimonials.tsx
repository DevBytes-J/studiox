"use client";

import { IoIosStar } from "react-icons/io";
import Frame from "./Frame";
import Image from "next/image";
import { motion } from "framer-motion";
const testimonials = [
  {
    rating: 5,
    text: "I must say... your app is literally the 1st X app I see real value in and will not regret handing my money over for! 🦾",
    author: "arielonlinecouk",
    role: "Content Creator",
    date: "jul 9, 2025",
    image: "/testimonial/test1i.png",
  },
  {
    rating: 5,
    text: "I thought all these tools were the same until I used SuperX. The Content Studio + Inspiration feature combo makes this OP. Makes showing up daily so much easier.",
    author: "Jazz",
    role: "Tech Influencer",
    date: "jul 15, 2025",
    image: "/testimonial/test2.png",
  },
  {
    rating: 5,
    text: "SuperX is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because SuperX has everything I need. :)",
    author: "Marius",
    role: "Marketing Expert",
    date: "jul 15, 2025",
    image: "/testimonial/test3.png",
  },
];

export default function Testimonials() {
  return (
    <Frame>
      <section className="bg-[#181818] text-white py-20">
        <div className="max-w-7xl mx-auto md:px-12 px-0">
          <div className="grid lg:grid-cols-3 gap-2 md:mx-16 mx-6 lg:mx-0">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-[17px] p-[18px] ${idx === 1 ? "" : "bg-[#1C1C1C] border border-[#363636]"}`}
                style={
                  idx === 1
                    ? {
                        background: "linear-gradient(180deg, #1F1F1F 0%, #090808 80px)",
                        boxShadow: "inset 0px 8px 24px -5px #84848440",
                        border: "1px solid #363636",
                      }
                    : {}
                }
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IoIosStar key={i} className="w-4 h-4 text-[#FFA500]" />
                  ))}
                </div>
                <p className="text-[#8A8585] mb-6 text-[12.5px] leading-loose ">
                  {testimonial.text}
                </p>
                <div className={`flex items-center gap-3  ${idx === 0 ? "pt-[20px]" : ""} `}>
                  <div
                    className="bg-[#1A1A1A] flex items-center gap-3 rounded-[9px] border border-[#272727] bg-no-repeat"
                    style={{
                      backgroundImage: "url('/testimonial/bg.png')",
                      backgroundSize: "30px 30px",
                      backgroundPosition: "40px 3px ",
                      boxShadow:
                        "0px 0px 11px 0px #8F8F8F40 inset, 0px 4px 10px 0px #0000004A",
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.author}'s avatar`}
                      width={30}
                      height={30}
                      className="rounded-[9px]"
                    />
                    <p className="text-sm pr-[10px]">{testimonial.author}</p>
                  </div>

                  <p className="text-[12px] text-[#A3A3A3] font-light">
                    {testimonial.date}{" "}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Frame>
  );
}
