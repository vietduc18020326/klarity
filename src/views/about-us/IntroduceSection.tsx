import { IMAGE_INTRODUCE_1, IMAGE_INTRODUCE_2 } from "@/assets";
import { IntroduceCard, UIButton } from "@/components";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { memo } from "react";

export const IntroduceSection = memo(function IntroduceSection() {
  return (
    <section className="w-full items-center justify-center flex px-l py-3xl bg-brand-25">
      <div className="max-w-content flex flex-col items-center gap-3xl">
        <div className="flex flex-col gap-2xl items-center">
          <UIButton size="L" color="secondary" title="Our experts" disabled />

          <span className="h1-6 text-brand-900">
            Introducing{" "}
            <span className="text-brand-500">Geronimo Advisory</span>
          </span>
        </div>

        <div className="w-full flex flex-row gap-4xl">
          <IntroduceCard
            image={IMAGE_INTRODUCE_1}
            title="Simple Data, "
            titleSuffix="Smarter Decisions"
            description="Geronimo’s team recognise that simple, functional and practical information is the essential building block that underpins effective management at the building and the portfolio scale. ​"
          />

          <IntroduceCard
            image={IMAGE_INTRODUCE_2}
            title="Experience in "
            titleSuffix="sustainability strategies"
            description="Geronimo Advisory’s Principals bring decades of experience in sustainability strategy, building performance, and net zero pathways across diverse assets—from offices to government facilities."
          />
        </div>

        <UIButton
          size="L"
          color="border"
          title="Read more"
          fullWidth
          RightComp={
            <ArrowCircleRightIcon
              weight="fill"
              className="w-l h-l text-brand-500"
            />
          }
        />
      </div>
    </section>
  );
});
