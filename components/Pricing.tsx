import { Check, ArrowRight } from "lucide-react";
import Frame from "./Frame";
import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";
import { DiAtom } from "react-icons/di";
import { Icon } from "@iconify/react";

const plans = [
  {
    name: "Pro",
    price: "$39",
    description: "Start growing your audience",
    icon: <Icon icon="fluent:prompt-20-regular" width="20" height="20" />,
    features: ["Schedule posts", "Cross-post with Bluesky"],
    highlighted: false,
  },
  {
    name: "Advanced",
    price: "$39",
    description: "Lock your price now",
    icon: <DiAtom />,
    features: [
      "Schedule posts",
      "Cross-post with Bluesky",
      "Auto Retweet",
      "Auto Delete",
      "Auto Plug",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <Frame>
      <section className="bg-[#181818]  pt-20">
        <div className="max-w-7xl mx-auto md:px-9 px-10 ">
          <div className="relative flex justify-center items-center max-[1300px]:hidden">
            <Image
              src="/pricing/bg1.png"
              alt="Pricing"
              width={1150}
              height={600}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center -mt-46 max-[1300px]:mt-0">
            <div
              className="flex rounded-full p-[1px] w-fit"
              style={{
                background:
                  "linear-gradient(135deg, #A29C96 0%, transparent 15%), linear-gradient(315deg, #A29C96 0%, transparent 15%)",
              }}
            >
              <div className="flex items-center rounded-full text-[14px] bg-[#1D1D1D] pr-[10px]">
                <span className="text-[#B1B1B1] bg-[#0F0F0F] p-2 rounded-full border border-[#3F3F3F] m-[4px]">
                  <BsCurrencyDollar />
                </span>
                Pricing
              </div>
            </div>
            <h2 className="md:text-[36px] text-[24px] font-medium mb-4 text-[#E2E2E2]">
              One Platform. Complete
              <br className="lg:block hidden" />
              Growth Infrastructure.
            </h2>
            <p className="text-[#8A8585] text-[15px] w-full max-w-xs lg:max-w-[30%] mb-[59px]">
              Simple pricing for the full SuperX Growth OS.{" "}
              <br className="lg:block hidden" /> No stacked tools. No hidden
              add-ons. <br className="lg:block hidden" /> Just one system
              powering your 𝕏 growth.
            </p>
          </div>

          <div className="grid max-[1300px]:grid-cols-1 grid-cols-2 gap-10 lg:gap-[96px] max-w-4xl md:mx-16 lg:mx-auto mx-0 items-stretch">
            {plans.map((plan, idx) => (
              <div key={idx} className="relative h-full">
                {/* Frame with + at corners - outside */}
                <div className="absolute -inset-4 pointer-events-none">
                  {/* Top line */}
                  <div
                    className="absolute top-[8px] left-[12px] right-[12px] h-[1px]"
                    style={{ background: "#36363638" }}
                  ></div>
                  {/* Bottom line */}
                  <div
                    className="absolute bottom-[8px] left-[12px] right-[12px] h-[1px]"
                    style={{ background: "#36363638" }}
                  ></div>
                  {/* Left line */}
                  <div
                    className="absolute left-[7px] top-[10px] bottom-4 w-[1px]"
                    style={{ background: "#36363638" }}
                  ></div>
                  {/* Right line */}
                  <div
                    className="absolute right-[7px] top-[10px] bottom-4 w-[1px]"
                    style={{ background: "#36363638" }}
                  ></div>
                  {/* Corner + symbols */}
                  <span className="absolute top-[1px] left-1 text-[#9F9F9F] text-[14px] leading-none">
                    +
                  </span>
                  <span className="absolute top-[1px] right-[3px] text-[#9F9F9F] text-[14px] leading-none">
                    +
                  </span>
                  <span className="absolute bottom-[3px] left-[3px] text-[#9F9F9F] text-[14px] leading-none">
                    +
                  </span>
                  <span className="absolute bottom-[3px] right-[3px] text-[#9F9F9F] text-[14px] leading-none">
                    +
                  </span>
                </div>
                <div
                  key={idx}
                  className="rounded-2xl p-2 relative border border-[#373737] h-full"
                  style={{
                    background:
                      "linear-gradient(1.37deg, #191919 1.17%, #1F1F1F 122.75%)",
                  }}
                >
                  {idx === 1 && (
                    <img
                      src="/pricing/glow.png"
                      alt=""
                      className="absolute top-0 left-0 pointer-events-none rounded-t-2xl"
                    />
                  )}
                  <div
                    className="relative p-[1px] rounded-[16px]"
                    style={{
                      background:
                        "linear-gradient(15.93deg, #1F1F1F 8%, #666666 98.3%)",
                    }}
                  >
                    <div
                      className="p-6 rounded-[16px]"
                      style={{
                        background:
                          "linear-gradient(1.37deg, #191919 1.17%, #1F1F1F 122.75%)",
                        boxShadow: "0px 4px 14px 0px #9494941F inset",
                      }}
                    >
                      <div className="text-[#C0C0C0] bg-[#1A1A1A] p-2 rounded-[10px] border border-[#3F3F3F] m-[4px] w-fit">
                        {plan.icon}
                      </div>
                      <h3 className="text-[20px] font-medium mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-[#B7B7B7] mb-6 text-[14px] font-light">
                        {plan.description}
                      </p>
                      <div className="mb-4">
                        <span className="text-[28px] font-medium">
                          {plan.price}
                        </span>
                        <span className="text-[#939393] text-[14px]">
                          /month
                        </span>
                      </div>
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
                        {idx === 1 && (
                          <Image
                            src="/pricing/glow2.png"
                            alt=""
                            width={100}
                            height={80}
                            className="absolute top-0 left-0 pointer-events-none"
                            style={{ mixBlendMode: "screen" }}
                          />
                        )}
                        <span className="relative z-10">Get Started Free</span>{" "}
                        <ArrowRight className="w-4 h-4 relative z-10" />
                      </button>
                    </div>
                  </div>
                  <ul className="space-y-5 mt-12 p-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 bg-[#FFC367] p-[4px] rounded-full flex-shrink-0 text-[#181818]" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center items-center max-[1300px]:hidden">
            <Image
              src="/pricing/bg2i.png"
              alt="Pricing"
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </section>
    </Frame>
  );
}
