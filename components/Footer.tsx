import Image from "next/image";
import Frame from "./Frame";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white">
      <Frame>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-row">
            <div className="border-r border-[#363636] flex-1 lg:block hidden">
              <Image src="/footer/bg.png" alt="" width={800} height={500} />
            </div>

            <div className="flex md:flex-row flex-col flex-1 ">
              <div className="p-6 flex-1">
                <h4 className="font-medium mb-4 uppercase">Product</h4>
                <ul className="space-y-2 text-sm text-[#BCB5B5]">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Chrome Extension
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-l border-[#363636] p-6 flex-1">
                <h4 className="font-medium mb-4 uppercase ">Resources</h4>
                <ul className="space-y-2 text-sm text-[#BCB5B5]">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Fake Tweet Maker
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      X Profile Audit
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-l border-[#363636] p-6 flex-1">
                <h4 className="font-medium mb-4 uppercase">Legal</h4>
                <ul className="space-y-2 text-sm text-[#BCB5B5]">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <div className="relative">
        <div className="absolute -top-[9px] left-[4%] right-[4%] h-px flex justify-between z-30">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-8 border-b-[#A3A3A3] translate-y-px" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-8 border-b-[#A3A3A3] translate-y-px" />
        </div>
        <div className="border-t border-[#363636] p-4 text-center">
          <p className="text-[#939393] text-sm">
            2026 SuperX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
