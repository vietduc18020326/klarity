"use client";

import {
  AboutUsSection,
  ContactUsSection,
  CoreSolutionsSection,
  Spacing,
  UIButton,
} from "@/components";
import { HOME_ID } from "@/types";
import { HeroSection } from "./HeroSection";
import { OurProductSection } from "./OurProductSection";

const HomePage = function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      <Spacing />

      <section
        id={HOME_ID.WHY_US}
        className="py-4xl px-l w-full bg-brand-500 relative items-center flex justify-center"
      >
        <div className="relative z-1 gap-l items-center flex flex-col max-w-content justify-center">
          <UIButton size="L" color="secondary" title="Why us ?" disabled />

          <span className="text-center h1-6 text-white">
            Evidence is key and data is critical, both for making effective
            decisions and for engaging with stakeholders and regulators
          </span>
        </div>
      </section>

      {/* <EmpoweringSection /> */}

      <Spacing />

      <OurProductSection />

      <Spacing />

      <AboutUsSection />

      <Spacing />

      <ContactUsSection />
    </div>
  );
};

export default HomePage;
