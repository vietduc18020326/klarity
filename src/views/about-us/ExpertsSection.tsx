import { IMAGE_EXPERTS } from "@/assets";
import { UIButton } from "@/components";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { memo } from "react";

export const ExpertsSection = memo(function ExpertsSection() {
  return (
    <section className="w-full flex items-center justify-center py-3xl px-l">
      <div className="flex flex-row gap-3xl max-w-content">
        <div className="flex-1">
          <img
            src={IMAGE_EXPERTS}
            alt="experts"
            className="w-full aspect-[610/460] rounded-3"
          />
        </div>

        <div className="flex-1 pt-m pr-l flex flex-col gap-2xl items-start">
          <h1 className="h1-6 text-brand-900">
            Klarity incorporates crucial data experts from Geronimo Advisory.
          </h1>

          <h4 className="h4-4 text-grey-600">
            KangaSys has partnered with engineering and sustainability experts,
            Geronimo Advisory to address the need for due diligence and
            credibility of sustainability-related claims.
          </h4>

          <UIButton
            size="M"
            color="primary"
            title="Read More"
            RightComp={
              <ArrowCircleRightIcon weight="fill" className="w-l h-l" />
            }
          />
        </div>
      </div>
    </section>
  );
});
