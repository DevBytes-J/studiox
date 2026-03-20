import { ArrowRight } from "lucide-react";
import Frame from "./Frame";
import Image from "next/image";

export default function CTA() {
  return (
    <Frame>
      <section className="bg-[#181818] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 max-w-7xl mx-auto">
          <Image
            src="/cta/bg.png"
            alt=""
            width={615}
            height={800}
            className="absolute left-9 top-83  -translate-y-1/2 rounded-bl-[24px] lg:block hidden"
          />
          <Image
            src="/cta/bgi.png"
            alt=""
            width={600}
            height={500}
            className="absolute bottom-1.5 right-9 rounded-br-[24px] lg:block hidden"
          />
        </div>
        <div className="max-w-4xl mx-auto md:px-6 px-10 text-center relative z-10">
          <div className="relative flex flex-col">
            <h2 className="md:text-[58px] text-[36px] font-medium relative bg-gradient-to-r from-[#FC8A65] to-[#E3E3E3] bg-clip-text text-transparent">
              Stop Guessing.
            </h2>
            <h2 className="md:text-[58px] text-[36px] font-medium mb-6 relative bg-gradient-to-r from-[#FC8A65] to-[#E3E3E3] bg-clip-text text-transparent">
              Start Operating.
            </h2>

            <p className="text-[#BCB5B5]  mb-8 max-w-2xl mx-auto md:text-[16px] text-[14px]">
              SuperX is the all-in-one growth OS for serious 𝕏 creators built to
              help you create, engage, analyze, and monetize in
              <br className="lg:block hidden" />
              one unified system.
            </p>

            <button
              className=" mx-auto p-3 text-[#FFF2EA] rounded-lg font-medium mb-8 flex items-center justify-center gap-2 relative overflow-hidden"
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
          </div>
        </div>
      </section>
    </Frame>
  );
}
