import { memo } from "react";

interface Props {
  title: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const ProductDetailItem = memo(function ProductDetailItem({
  title,
  isFirst,
  isLast,
}: Props) {
  return (
    <li className="flex flex-row gap-2xl">
      <div className="flex flex-col items-center">
        <div
          className={`w-[2px] h-xl ${
            isFirst ? "bg-transparent" : "bg-brand-100"
          }`}
        />

        <div className="w-3 h-3 rounded-full bg-brand-600" />

        <div
          className={`w-[2px] flex-1 ${
            isLast ? "bg-transparent" : "bg-brand-100"
          }`}
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="h-l w-full" />

        <p className="b3-4 text-grey-600 flex-1">{title}</p>

        <div className="h-l w-full" />
      </div>
    </li>
  );
});
