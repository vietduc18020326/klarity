import { IMAGE_BG_HERO, IMAGE_DASHBOARD } from "@/assets";
import { ListLogo, UIButton } from "@/components";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";

export const HeroSection = function HeroSection() {
  return (
    <section className="relative py-3xl px-l flex flex-col items-center justify-center overflow-hidden mobile:py-xl mobile:px-s">
      <div className="absolute left-0 right-0 top-0 -z-1">
        <img
          alt="bg-hero"
          src={IMAGE_BG_HERO}
          className="w-full aspect-[2044/1538.32]"
        />
      </div>

      <div className="z-1 relative text-black flex-1 flex flex-col gap-3xl items-center">
        <div className="max-w-content flex flex-col gap-l items-center mx-auto">
          <span className="h1-7 text-brand-500 text-center">
            Data dashboards, real-time performance insights and streamlined
            reporting{" "}
            <span className="text-brand-800">
              for sustainable buildings, portfolios and funds
            </span>
          </span>

          <h4 className="text-center h4-4 text-grey-600 w-[80%]">
            Achieving high performance, low carbon and resource-efficient
            buildings and tenancies is no longer just nice to have – it is an
            essential strategy for future-proofing value and reputation.
          </h4>

          <UIButton
            size="L"
            color="primary"
            title="Get Klarity"
            RightComp={
              <ArrowCircleRightIcon
                weight="fill"
                className="text-white w-6 h-6"
              />
            }
          />
        </div>

        <img
          alt="dashboard"
          src={IMAGE_DASHBOARD}
          className="aspect-[1280/612] w-[90vw]"
        />
      </div>

      <div className="w-[80vw] py-3xl px-l flex items-center justify-center">
        <div className="items-center flex flex-col gap-2xl ">
          <span className="h2-6 text-brand-500">
            Verified & <span className="text-brand-900">Accredited by</span>
          </span>

          <ListLogo />
        </div>
      </div>
    </section>
  );
};
