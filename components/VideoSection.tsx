import Image from "next/image";
import Frame from "./Frame";

export default function VideoSection() {
  return (
    <Frame>
      <section className="bg-[#181818] text-white py-20">
        <div className="max-w-7xl mx-auto md:px-12 px-10">
          <div
            className="flex rounded-full p-[1px] w-fit max-[1300px]:mx-auto mx-0"
            style={{
              background:
                "linear-gradient(135deg, #A29C96 0%, transparent 15%), linear-gradient(315deg, #A29C96 0%, transparent 15%)",
            }}
          >
            <div className="flex items-center rounded-full text-[14px] bg-[#1D1D1D] pr-[10px] font-light">
              <span
                className="text-[#B1B1B1] bg-[#0F0F0F] p-[6px] rounded-full border border-[#3F3F3F] m-[4px] material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                account_tree
              </span>
              A Quick Tour
            </div>
          </div>

          <div className="flex flex-row max-[1300px]:flex-col justify-between items-start max-[1300px]:items-center">
            <div className="flex flex-col items-start max-[1300px]:items-center">
              <h2 className="md:text-[36px] text-[30px] font-medium mb-6 text-[#E2E2E2] max-[1300px]:text-center text-left">
                Your Growth OS <br className="lg:block hidden" />
                Embedded Directly into X
              </h2>

              <p className="text-[#BCB5B5] mb-12 max-w-2xl max-[1300px]:text-center text-left">
                Take SuperX with you as you browse. Access live performance
                insights,
                <br />
                audience intelligence, and engagement signals on any profile or
                post
                <br />
                without leaving your feed.
              </p>
              <div className="relative max-[1300px]:hidden block">
                <Image
                  src="/video/insight.png"
                  alt="Insights Screenshot"
                  width={620}
                  height={300}
                  className=""
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-90% to-[#181818] pointer-events-none" />
              </div>
              <button
                className="relative bg-[#141313] hover:bg-[#2a2a2a] text-[#FFF2EA] py-2 px-4 rounded-lg transition duration-300 border-2 border-transparent w-fit mt-9 max-[1300px]:mt-4 max-[1300px]:mb-4 max-[1300px]:self-center self-start"
                style={{
                  backgroundImage:
                    "linear-gradient(#141313, #141313), linear-gradient(199.88deg, #351D10 -39.57%, #000000 143.9%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                Get Chrome Extension
              </button>
            </div>
            {/* video */}
            <div>
              <Image
                src="/video/bg.png"
                alt="Video Placeholder"
                width={500}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Frame>
  );
}
