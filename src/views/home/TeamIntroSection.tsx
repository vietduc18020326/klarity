import { LeafIcon } from "@phosphor-icons/react";
import { memo } from "react";

const dummyData = [
  {
    title: "KanSustain",
    LeadingIcon: <LeafIcon weight="fill" className="text-brand-500 w-8 h-8" />,
    subTitle: "Quick insights on energy, water, waste, and emissions.",
    description:
      "Owners and Asset Managers can gain rapid data on asset performance across key indicators including energy, water, waste, emissions and third-party ratings….",
  },
  {
    title: "KanPerform",
    LeadingIcon: <LeafIcon weight="fill" className="text-brand-500 w-8 h-8" />,
    subTitle: "Data for energy, water, and consumption trends.",
    description:
      "Built for Facilities Managers to deliver essential data including energy demand, time of use tracking, water consumption, emissions and weekly, quarterly, yearly trends…",
  },
];

export const TeamIntroSection = memo(function TeamIntroSection() {
  return <section className="w-full px-3xl ">TeamIntroSection</section>;
});
