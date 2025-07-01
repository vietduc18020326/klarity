"use client";

import { IMAGE_BUILDING_3 } from "@/assets";
import { UIButton } from "@/components";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { memo } from "react";

interface Props {
  hideButton?: boolean;
}

export const AboutUsSection = memo(function AboutUsSection({
  hideButton = false,
}: Props) {
  return (
    <section
      className="w-full h-[100vh] items-center justify-center flex relative bg-cover"
      style={{
        backgroundImage: `url(${IMAGE_BUILDING_3})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(99deg, #081F4A 2.76%, rgba(8, 31, 74, 0.00) 71.68%)",
        }}
      />

      <div className="max-w-content gap-3xl flex flex-row inset-1 z-[1] items-center">
        <div className="flex-1 flex flex-col gap-l items-start">
          <h1 className="h1-6 text-white">About Us</h1>

          <h3 className="h3-4 text-white">
            The Klarity suite operates on a software-as-a-service basis, with
            secure cloud-hosted platforms that users can access with any
            internet-capable device. 
          </h3>

          {hideButton ? null : (
            <UIButton
              size="L"
              color="primary"
              title="Read More"
              RightComp={
                <ArrowCircleRightIcon weight="fill" className="w-6 h-6" />
              }
              path="/about-us"
            />
          )}
        </div>

        <div className="flex-1">
          <div
            className="w-full p-l rounded-3 border border-secondary-25 bg-white/40 h-fit backdrop-blur-[20px]"
            style={{
              boxShadow: "0px 0px 90px 0px rgba(12, 111, 255, 0.12)",
            }}
          >
            <h5 className="h5-4 text-black">
              Klarity has been developed by futuristic technology developers
              KangaSys combining their expertise to create tools that help
              manage energy demand, enhance occupant comfort, reduce water
              consumption and monitor and minimise carbon emissions.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
});
