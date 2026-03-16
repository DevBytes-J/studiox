import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import UnifiedFeatures from "@/components/UnifiedFeatures";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Testimonials />
      <VideoSection />
      <Features />
      <UnifiedFeatures />
      <Pricing />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
