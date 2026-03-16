export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Frame Border */}
      <div className="absolute inset-x-[4%] top-0 bottom-0 pointer-events-none z-10">
        {/* Top Corners */}
        <div className="absolute top-0 left-0 right-0 flex justify-between z-20">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-[#A3A3A3] -translate-y-px" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-[#A3A3A3] -translate-y-px" />
        </div>

        {/* Bottom Corners/ */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-20" />

        {/* Left Line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-white/10 z-20" />

        {/* Right Line */}
        <div className="absolute right-1.5 top-0 bottom-0 w-px bg-white/10 z-20" />
      </div>

      {children}
    </div>
  );
}
