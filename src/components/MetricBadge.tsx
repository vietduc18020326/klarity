import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { HTMLAttributes, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  color: "red" | "green" | "blue";
  value: string;
  LeadingIcon: PhosphorIcon;
}

export const MetricBadge = function MetricBadge({
  color,
  value,
  LeadingIcon,
  className,
  ...props
}: Props) {
  const iconBg = useMemo(() => {
    switch (color) {
      case "red":
        return "bg-red-500";
      case "green":
        return "bg-green-500";
      case "blue":
        return "bg-blue-500";
    }
  }, [color]);

  return (
    <div
      className={clsx(
        "absolute border border-brand-600 bg-white/80 flex flex-row items-center gap-2 p-2 rounded-3 shadow-[2px_2px_4px_0px_rgba(2,109,255,0.1)] backdrop-blur-[3.15px]",
        className
      )}
      {...props}
    >
      <div className={clsx(iconBg, "rounded-full p-1")}>
        <LeadingIcon weight="fill" className="w-m h-m text-white" />
      </div>

      <p className="b3-4 text-grey-600">{value}</p>
    </div>
  );
};
