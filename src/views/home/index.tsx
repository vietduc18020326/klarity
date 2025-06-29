"use client";

import { UIButton } from "@/components";
import { EmpoweringSection } from "./EmpoweringSection";
import { HeroSection } from "./HeroSection";
import { OurProductSection } from "./OurProductSection";
import { TeamIntroSection } from "./TeamIntroSection";

const HomePage = function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="py-4xl px-l w-full bg-brand-600 relative items-center flex justify-center">
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-1 text-black gap-2xl items-center flex flex-col max-w-content justify-center">
          <UIButton size="M" color="secondary" title="Why us ?" disabled />

          <span className="text-center h1-6 text-brand-600">
            Evidence is key and data is critical, both for making effective
            decisions and{" "}
            <span className="text-brand-900">
              for engaging with stakeholders and regulators
            </span>
          </span>
        </div>
      </section>

      <EmpoweringSection />

      <OurProductSection />

      <TeamIntroSection />
    </div>
  );
};

export default HomePage;
