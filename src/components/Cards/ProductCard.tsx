import { ArrowCircleRightIcon } from "@phosphor-icons/react";
import { memo } from "react";
import { UIButton } from "../UIButton";

interface Props {
  title: string;
  LeadingIcon: React.ReactNode;
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
      className="w-[405px] rounded-2 border border-brand-600"
      style={{
        boxShadow: "0px 0px 90px 0px rgba(12, 111, 255, 0.12)",
      }}
    >
      <div className="p-l gap-l bg-brand-500 flex flex-row items-center w-full rounded-tl-2 rounded-tr-2">
        <div className="p-s bg-white rounded-full">{LeadingIcon}</div>

        <p className="b3-7 text-white">{title}</p>
      </div>

      <div className="p-l flex flex-col gap-5 w-full rounded-bl-2 rounded-br-2">
        <div className="flex flex-col gap-xs">
          <p className="b3-6 text-brand-900">{subTitle}</p>

          <p className="b3-6 text-grey-400 line-clamp-3">{description}</p>
        </div>

        <UIButton
          size="L"
          color="border"
          title="Learn More"
          fullWidth
          RightComp={<ArrowCircleRightIcon weight="fill" className="w-6 h-6" />}
        />
      </div>
    </div>
  );
});
