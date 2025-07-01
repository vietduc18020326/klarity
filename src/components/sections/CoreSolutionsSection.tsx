import { IMAGE_BUILDING_4 } from "@/assets";
import { Badge } from "@/components";
import { DUMMY_BADGES } from "@/dummy";
import { memo } from "react";

export const CoreSolutionsSection = memo(function CoreSolutionsSection() {
  return (
    <section className="w-full items-center justify-center flex py-3xl px-l">
      <div className="flex flex-row max-w-content gap-3xl items-start">
        <div
          className="rounded-3 flex-1 p-l gap-2xl flex flex-col bg-white"
          style={{
            boxShadow: "0px 0px 90px 0px rgba(12, 111, 255, 0.12)",
          }}
        >
          <span className="h2-6 text-brand-900">
            Bespoke Digital Solutions Built for{" "}
            <span className="text-brand-500">Seamless Integration</span>
          </span>

          <p className="b3-4 text-secondary-900 whitespace-pre-line">
            {`KangaSys specialises in building bespoke, highly functional digital products that are capable of seamless integration with client tech stacks and systems.\n\n Taking a technology-agnostic approach, the team works collaboratively with partners and clients to develop future-facing solutions that are optimised for user experience, efficiency and practicality.`}
          </p>

          <ul className="w-full flex flex-row gap-m flex-wrap">
            {DUMMY_BADGES.SOLUTIONS.map((badge, index) => (
              <Badge key={index} {...badge} />
            ))}
          </ul>
        </div>

        <div className="flex-1 pt-3xl">
          <img
            src={IMAGE_BUILDING_4}
            alt="building"
            className="w-full h-[467px] object-cover rounded-3"
          />
        </div>
      </div>
    </section>
  );
});
