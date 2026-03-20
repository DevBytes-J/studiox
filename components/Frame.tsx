export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="max-w-7xl mx-auto px-6 h-full relative">
            {/* Left Line */}
            <div className="absolute left-[29px] top-0 bottom-0 w-px bg-white/10" />
            {/* Right Line */}
            <div className="absolute right-[29px] top-0 bottom-0 w-px bg-white/10" />
            {/* Bottom Line */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-white/10" />
          </div>
        </div>
        <div className="relative z-0">{children}</div>
      </div>

      {/* Bottom Triangles */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 translate-y-[9px]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-[#A3A3A3]" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-[#A3A3A3]" />
        </div>
      </div>
    </div>
  );
}
