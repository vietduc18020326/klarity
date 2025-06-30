import {
  ArrowCircleRightIcon,
  Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import { memo } from "react";
import { UIButton } from "../UIButton";

interface Props {
  title: string;
  LeadingIcon: PhosphorIcon;
  subTitle: string;
  description: string;
}

export const ProductCard = memo(function ProductCard({
  title,
  LeadingIcon,
  subTitle,
  description,
}: Props) {
  return (
    <div
      className="w-[33%] rounded-3 border border-brand-50"
      style={{
        boxShadow: "0px 0px 90px 0px rgba(12, 111, 255, 0.12)",
      }}
    >
      <div className="p-l gap-l bg-brand-500 flex flex-row h-fit items-center w-full rounded-tl-3 rounded-tr-3">
        <div className="p-s bg-white rounded-full">
          <LeadingIcon weight="fill" className="w-m h-m text-brand-500" />
        </div>

        <p className="h4-7 text-white">{title}</p>
      </div>

      <div className="p-l flex-1 flex flex-col gap-5 rounded-bl-3 rounded-br-3 justify-between">
        <div className="flex flex-col gap-xs flex-1">
          <p
            className="b3-6 text-brand-900 line-clamp-2"
            style={{
              minHeight: "calc(var(--leading-body-3) * 2)",
            }}
          >
            {subTitle}
          </p>

          <p className="b3-4 text-grey-600 line-clamp-3">{description}</p>
        </div>

        <UIButton
          size="M"
          color="border"
          title="Learn More"
          fullWidth
          RightComp={<ArrowCircleRightIcon weight="fill" className="w-l h-l" />}
        />
      </div>
    </div>
  );
});
