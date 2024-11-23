import Navbar from "@/components/ui/navbar"
import HeroSection from "@/components/sections/hero"
import PortfolioSection from "@/components/sections/portfolio"
import EvidenceSection from "@/components/sections/evidence"
import VisionSection from "@/components/sections/vision"
import BackgroundSection from "@/components/sections/background"
import TweetShowcase from "@/components/sections/TweetShowcase"
import RecommendationsSection from "@/components/sections/recommendations"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <EvidenceSection />
      <RecommendationsSection />
      <VisionSection />
      <BackgroundSection />
      <TweetShowcase />
    </div>
  )
}