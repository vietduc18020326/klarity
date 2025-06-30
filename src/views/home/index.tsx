"use client";

import { UIButton } from "@/components";
import { AboutUsSection } from "./AboutUsSection";
import { ContactUsSection } from "./ContactUsSection";
import { CoreSolutionsSection } from "./CoreSolutionsSection";
import { EmpoweringSection } from "./EmpoweringSection";
import { HeroSection } from "./HeroSection";
import { OurProductSection } from "./OurProductSection";
import { TeamIntroSection } from "./TeamIntroSection";

const HomePage = function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

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

      <EmpoweringSection />

      <OurProductSection />

      <TeamIntroSection />

      <AboutUsSection />

      <CoreSolutionsSection />

      <section className="w-full py-3xl px-l flex items-center justify-center">
        <div className="w-content items-center flex flex-col gap-2xl">
          <span className="h2-6 text-brand-600">
            Verified & <span className="text-brand-900">Accredited by</span>
          </span>
        </div>
      </section>

      <ContactUsSection />
    </div>
  );
};

export default HomePage;
