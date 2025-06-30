"use client";

import { ContactUsSection, Spacing, UIButton } from "@/components";
import { AboutUsSection } from "./AboutUsSection";
import { CoreSolutionsSection } from "./CoreSolutionsSection";
import { EmpoweringSection } from "./EmpoweringSection";
import { HeroSection } from "./HeroSection";
import { OurProductSection } from "./OurProductSection";

const HomePage = function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      <Spacing />

      <section className="py-4xl px-l w-full bg-brand-500 relative items-center flex justify-center">
        <div className="relative z-1 gap-l items-center flex flex-col max-w-content justify-center">
          <UIButton size="L" color="secondary" title="Why us ?" disabled />

          <span className="text-center h1-6 text-brand-200">
            Evidence is key and data is critical, both for making effective
            decisions and{" "}
            <span className="text-white">
              for engaging with stakeholders and regulators
            </span>
          </span>
        </div>
      </section>

      <Spacing />

      <EmpoweringSection />

      <Spacing />

      <OurProductSection />

      <Spacing />

      <AboutUsSection />

      <Spacing />

      <CoreSolutionsSection />

      <Spacing />

      <ContactUsSection />
    </div>
  );
};

export default HomePage;
