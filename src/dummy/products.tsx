import {
  ChartBarIcon,
  FilesIcon,
  FootprintsIcon,
  LeafIcon,
  LightbulbIcon,
  MagnifyingGlassIcon,
  WarningIcon,
} from "@phosphor-icons/react";

const HOME = [
  [
    {
      title: "KanSustain",
      LeadingIcon: (
        <LeafIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Quick insights on energy, water, waste, and emissions.",
      description:
        "Owners and Asset Managers can gain rapid data on asset performance across key indicators including energy, water, waste, emissions and third-party ratings….",
    },
    {
      title: "KanPerform",
      LeadingIcon: (
        <LightbulbIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Data for energy, water, and consumption trends.",
      description:
        "Built for Facilities Managers to deliver essential data including energy demand, time of use tracking, water consumption, emissions and weekly, quarterly, yearly trends…",
    },
  ],
  [
    {
      title: "KanEngage",
      LeadingIcon: (
        <ChartBarIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Transparent benchmarking for energy and water.",
      description:
        "Put Tenants in the picture with transparent data and benchmarking of energy, water, and emissions including trends through time, time of use analysis and intra-building and intra-portfolio comparisons…",
    },
    {
      title: "KanReport",
      LeadingIcon: (
        <FilesIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Simplify energy and emissions reporting.",
      description:
        "Streamline and simplify data management for reporting emissions, energy use, water and waste for input into third-party ratings submissions and corporate reporting…",
    },
    {
      title: "KanCompare",
      LeadingIcon: (
        <MagnifyingGlassIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Compare asset performance effectively.",
      description:
        "For Portfolio Owners and Managers, quickly assess the relative performance of your assets and identify where CAPexapex and OPex can be strategically deployed to boost overall portfolio metrics ",
    },
  ],
  [
    {
      title: "KanZero",
      LeadingIcon: (
        <FootprintsIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Track decarbonization progress easily.",
      description:
        "Track asset progress for decarbonisation benchmarking current performance against future trajectory, and give a visual snapshot of emissions data, and corresponding carbon price liabilities …",
    },
    {
      title: "KanAlert",
      LeadingIcon: (
        <WarningIcon weight="fill" className="text-brand-500 w-l h-l" />
      ),
      subTitle: "Predict and fix energy and equipment issues.",
      description:
        "Empower predictive maintenance and rapid responses to issues with energy demand spikes, water consumption discrepancies and equipment faults…",
    },
  ],
];

export const DUMMY_PRODUCTS = { HOME };
