import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { memo } from "react";

interface Props {
  title: string;
  Icon: PhosphorIcon;
}

export const Badge = memo(function Badge({ title, Icon }: Props) {
  return (
    <li className="flex flex-row gap-m items-center bg-brand-25 rounded-full px-m py-s">
      <Icon className="text-brand-500 w-6 h-6" />
      <p className="b3-4 text-brand-500">{title}</p>
    </li>
  );
});
