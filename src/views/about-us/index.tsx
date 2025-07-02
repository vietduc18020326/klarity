"use client";

import {
  AboutUsSection,
  CoreSolutionsSection,
  ListLogo,
  Spacing,
} from "@/components";
import { memo } from "react";
import { ExpertsSection } from "./ExpertsSection";
import { IntroduceSection } from "./IntroduceSection";

const AboutUsPage = memo(function AboutUsPage() {
  return (
    <div className="flex flex-col w-full">
      <Spacing />
      <p className="text-center h1-6 text-brand-900">About us</p>

      <CoreSolutionsSection />

      <Spacing />

      <ExpertsSection />

      <Spacing />

      <section className="w-full flex-col items-center justify-center flex gap-2xl py-3xl">
        <div className="max-w-content flex flex-col items-center gap-xl">
          <span className="h2-7 text-brand-600">
            Accredited experts ensure{" "}
            <span className="text-brand-800">Klarity’s data reliability</span>
          </span>

          <h4 className="h4-4 text-grey-600 w-[50%] text-center">
            Geronimo’s team of highly experienced and qualified energy
            management professionals provide ongoing data assurance
          </h4>
        </div>

        <ListLogo />
      </section>

      <Spacing />

      <IntroduceSection />
    </div>
  );
});

export default AboutUsPage;
