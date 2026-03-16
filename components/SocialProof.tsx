import Frame from "./Frame";
import { BsChatLeftTextFill } from "react-icons/bs";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

const creators = [
  {
    name: "CRANQnow",
    quote:
      "Wow. These add-ons are unbelievably useful, I don't know how I coped before using them. Looks amazing!",
    image: "/proof/p1.png",
  },
  {
    name: "Goon Nguyen",
    quote:
      "When I decided to do 'X' seriously, this extension helps me a lot, a 'must have' for X pals who need growth hack!",
    image: "/proof/p2.png",
  },
  {
    name: "Jorge Rausell",
    quote:
      "Great extension for X! super useful analitycs tool, nice and easy to use.",
    image: "/proof/p3.png",
  },
  {
    name: "Chien Tran",
    quote: "Never know you can still find quality tools for free these days 👍",
    image: "/proof/p4.png",
  },
  {
    name: "Alexander Isora 👽",
    quote:
      "SuperX is a must-have for any active 𝕏 users. It's my most favorite chrome extension now 🤓",
    image: "/proof/p5.png",
  },
  {
    name: "Uwe Dreissigacker",
    quote: "great find! thanks for sharing",
    image: "/proof/p6.png",
  },
];

export default function SocialProof() {
  return (
    <Frame>
      <section className="bg-[#181818] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mx-auto items-center">
            <div
              className="flex rounded-full p-[1px] w-fit"
              style={{
                background:
                  "linear-gradient(135deg, #A29C96 0%, transparent 15%), linear-gradient(315deg, #A29C96 0%, transparent 15%)",
              }}
            >
              <div className="flex items-center rounded-full text-[14px] bg-[#1D1D1D] pr-[10px]">
                <span className="text-[#B1B1B1] bg-[#0F0F0F] p-2 rounded-full border border-[#3F3F3F] m-[4px]">
                  <BsChatLeftTextFill />
                </span>
                Testimonial
              </div>
            </div>
            <div className="flex flex-col text-center">
              <h2 className="md:text-[36px] text-[24px] font-medium mb-6 text-[#E2E2E2]">
                Trusted by the Creators You Follow
              </h2>
              <p className="text-[#B1B1B1] mb-[59px]">
                We've helped over 5,000 creators grow their 𝕏 presence.
                <br />
                Super X is our most advanced platform yet.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:mx-16 mx-0">
            {creators.map((creator, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-[#2A2828] rounded-xl pt-[23px] pb-20 px-6"
                style={{
                  backgroundImage: "url(/proof/bg.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
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
                      src={creator.image}
                      alt={`${creator.name}'s avatar`}
                      width={30}
                      height={30}
                      className="rounded-[9px]"
                    />
                    <p className="text-sm pr-[10px]">{creator.name}</p>
                  </div>
                  <div className="p-[8px] bg-[#00000033] flex items-center gap-3 rounded-[9px] border border-[#272727] ">
                    <BsTwitterX className="w-4 h-4 text-[#B1B1B1]" />
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{creator.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Frame>
  );
}
