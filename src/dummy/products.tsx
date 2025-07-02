import {
  IMAGE_PRODUCT_KAN_ALERT,
  IMAGE_PRODUCT_KAN_COMPARE,
  IMAGE_PRODUCT_KAN_ENGAGE,
  IMAGE_PRODUCT_KAN_PERFORM,
  IMAGE_PRODUCT_KAN_REPORT,
  IMAGE_PRODUCT_KAN_SUSTAIN,
  IMAGE_PRODUCT_KAN_ZERO,
} from "@/assets";
import { generateSlugConstants, SlugMap } from "@/utils";
import {
  ChartBarIcon,
  FilesIcon,
  FootprintsIcon,
  LeafIcon,
  LightbulbIcon,
  MagnifyingGlassIcon,
  WarningIcon,
} from "@phosphor-icons/react";

const PRODUCT_MAP = {
  "kan-sustain": {
    slug: "kan-sustain",
    title: "KanSustain",
    subtitle:
      "Providing Property Managers and Facilities Managers with a clear picture of the current and historical performance of any individual building.",
    features: [
      "A digital report card based on real-time data captured in snapshot form for rapid insight and decision making.",
      "Track third-party performance credentials and gain intelligence on estimated NABERS ratings for energy and water.",
      "Track emissions for Scope 1 and Scope 2 for asset level GHG reporting and to support stakeholder reporting.",
      "Active headline operational performance indicators enabling corporate comparisons across weeks, months, quarters and years to visualise change.",
      "Essential information for building owners, C-suite management, sustainability professionals, property managers and facilities managers.",
    ],
    image: IMAGE_PRODUCT_KAN_SUSTAIN,
  },
  "kan-perform": {
    slug: "kan-perform",
    title: "KanPerform",
    subtitle:
      "Giving Facilities Managers, Building Managers, Contractors and Consultants in-depth, visual analysis of energy and water sub-systems and corresponding performance across key building performance indicators.",
    features: [
      "See daily, weekly, quarterly and annual trends for energy use, gas consumption, water consumption and GHG emissions.",
      "Understand which building subsystems are exceeding consumption benchmarks, to enable rapid response to detect, diagnose and rectify faults or mitigate behavioural factors.",
      "Utilise insights into time-of-use and seasonal trends to inform decisions for equipment maintenance, upgrades or retrofits.",
      "Technology neutral integration with existing BMS, sub-metering and metering systems, with no hard-wiring requirements.",
      "Automated data feeds combined with expert assurance and data validation.",
    ],
    image: IMAGE_PRODUCT_KAN_PERFORM,
  },
  "kan-engage": {
    slug: "kan-engage",
    title: "KanEngage",
    subtitle:
      "Bring tenants on the journey to net zero and support effective reporting and management of tenant Scope 1 and Scope 2 emissions.",
    features: [
      "Gain insight into tenant energy use, water consumption and energy intensity to help Facilities Managers and Building Managers have constructive dialogue with tenants on energy efficiency and water efficiency initiatives.",
      "Support effective data collation for whole building sustainability ratings including NABERS Co-Assess and Green Star Buildings.",
      "Future-proof commercial viability for public sector and corporate tenants seeking assured data for their own reporting and compliance obligations.",
      "Capture evidence for lease negotiations, retrofit and upgrade business cases and asset-level reporting.",
    ],
    image: IMAGE_PRODUCT_KAN_ENGAGE,
  },
  "kan-report": {
    slug: "kan-report",
    title: "KanReport",
    subtitle:
      "Streamline reporting and asset management data, including detailed energy, water, emissions and waste data across building portfolios to support compliance and regulatory requirements.",
    features: [
      "Consolidate data across building portfolios for streamlined reporting on energy, water, emissions and waste performance.",
      "Generate automated reports that align with regulatory requirements and third-party rating submissions.",
      "Support compliance obligations through structured data management and evidence collection.",
      "Enable benchmarking and comparative analysis across assets within portfolios.",
      "Provide audit-ready documentation with expert assurance and data validation capabilities.",
    ],
    image: IMAGE_PRODUCT_KAN_REPORT,
  },
  "kan-compare": {
    slug: "kan-compare",
    title: "KanCompare",
    subtitle:
      "Get Portfolio Owners and Managers to identify best performing assets and deploy capital expenditure and operational expenditure strategically to improve overall portfolio metrics.",
    features: [
      "Compare building energy performance across portfolios to identify top and bottom performers.",
      "Analyze operational expenditure efficiency and identify opportunities for strategic investment.",
      "Generate comparative dashboards highlighting performance variations across assets.",
      "Support capital expenditure decisions through data-driven performance analysis.",
      "Enable portfolio-wide benchmarking against industry standards and best practice metrics.",
      "Provide investment prioritization recommendations based on performance gaps and potential returns.",
    ],
    image: IMAGE_PRODUCT_KAN_COMPARE,
  },
  "kan-zero": {
    slug: "kan-zero",
    title: "KanZero",
    subtitle:
      "Track your building's journey to net zero by establishing baselines, setting science-based targets, monitoring progress, and measuring carbon intensity reduction over time.",
    features: [
      "Establish comprehensive baselines for building energy consumption and emissions performance.",
      "Set science-based targets aligned with net zero commitments and regulatory requirements.",
      "Monitor progress towards carbon neutrality with detailed tracking and progress visualization.",
      "Measure carbon intensity reduction over time with trend analysis and forecasting capabilities.",
      "Generate compliance reports for carbon pricing mechanisms and emissions trading schemes.",
      "Support strategic planning for retrofits and efficiency improvements based on carbon reduction potential.",
    ],
    image: IMAGE_PRODUCT_KAN_ZERO,
  },
  "kan-alert": {
    slug: "kan-alert",
    title: "KanAlert",
    subtitle:
      "Help utility managers understand demand patterns, predict equipment failures, and respond quickly to anomalies in building systems to optimize performance and reduce costs.",
    features: [
      "Monitor real-time energy demand patterns and identify consumption anomalies before they impact costs.",
      "Predict equipment failures through advanced analytics and machine learning algorithms.",
      "Generate automated alerts for unusual consumption patterns or system performance issues.",
      "Enable rapid response to utility system faults through immediate notification and diagnostic tools.",
      "Optimize building performance through predictive maintenance scheduling and proactive interventions.",
      "Reduce operational costs by preventing equipment downtime and managing peak demand charges.",
    ],
    image: IMAGE_PRODUCT_KAN_ALERT,
  },
};

export const PRODUCT_SLUG = generateSlugConstants(PRODUCT_MAP);

export type ProductSlugMap = SlugMap<typeof PRODUCT_MAP>;

export type ProductSlugType = keyof typeof PRODUCT_MAP;

const HEADER = [
  {
    slug: PRODUCT_SLUG.KAN_SUSTAIN,
    title: "KanSustain",
    LeadingIcon: LeafIcon,
  },
  {
    slug: PRODUCT_SLUG.KAN_PERFORM,
    title: "KanPerform",
    LeadingIcon: LightbulbIcon,
  },
  {
    slug: PRODUCT_SLUG.KAN_ENGAGE,
    title: "KanEngage",
    LeadingIcon: ChartBarIcon,
  },
  {
    slug: PRODUCT_SLUG.KAN_REPORT,
    title: "KanReport",
    LeadingIcon: FilesIcon,
  },
  {
    slug: PRODUCT_SLUG.KAN_COMPARE,
    title: "KanCompare",
    LeadingIcon: MagnifyingGlassIcon,
  },
  {
    slug: PRODUCT_SLUG.KAN_ZERO,
    title: "KanZero",
    LeadingIcon: FootprintsIcon,
  },
  {
    slug: PRODUCT_SLUG.KAN_ALERT,
    title: "KanAlert",
    LeadingIcon: WarningIcon,
  },
];

const HOME = [
  [
    {
      slug: PRODUCT_SLUG.KAN_SUSTAIN,
      title: "KanSustain",
      LeadingIcon: LeafIcon,
      subTitle: "Quick insights on energy, water, waste, and emissions.",
      description:
        "Owners and Asset Managers can gain rapid data on asset performance across key indicators including energy, water, waste, emissions and third-party ratings….",
    },
    {
      slug: PRODUCT_SLUG.KAN_PERFORM,
      title: "KanPerform",
      LeadingIcon: LightbulbIcon,
      subTitle: "Data for energy, water, and consumption trends.",
      description:
        "Built for Facilities Managers to deliver essential data including energy demand, time of use tracking, water consumption, emissions and weekly, quarterly, yearly trends…",
    },
  ],
  [
    {
      slug: PRODUCT_SLUG.KAN_ENGAGE,
      title: "KanEngage",
      LeadingIcon: ChartBarIcon,
      subTitle: "Transparent benchmarking for energy and water.",
      description:
        "Put Tenants in the picture with transparent data and benchmarking of energy, water, and emissions including trends through time, time of use analysis and intra-building and intra-portfolio comparisons…",
    },
    {
      slug: PRODUCT_SLUG.KAN_REPORT,
      title: "KanReport",
      LeadingIcon: FilesIcon,
      subTitle: "Simplify energy and emissions reporting.",
      description:
        "Streamline and simplify data management for reporting emissions, energy use, water and waste for input into third-party ratings submissions and corporate reporting…",
    },
    {
      slug: PRODUCT_SLUG.KAN_COMPARE,
      title: "KanCompare",
      LeadingIcon: MagnifyingGlassIcon,
      subTitle: "Compare asset performance effectively.",
      description:
        "For Portfolio Owners and Managers, quickly assess the relative performance of your assets and identify where CAPexapex and OPex can be strategically deployed to boost overall portfolio metrics ",
    },
  ],
  [
    {
      slug: PRODUCT_SLUG.KAN_ZERO,
      title: "KanZero",
      LeadingIcon: FootprintsIcon,
      subTitle: "Track decarbonisation progress easily.",
      description:
        "Track asset progress for decarbonisation benchmarking current performance against future trajectory, and give a visual snapshot of emissions data, and corresponding carbon price liabilities …",
    },
    {
      slug: PRODUCT_SLUG.KAN_ALERT,
      title: "KanAlert",
      LeadingIcon: WarningIcon,
      subTitle: "Predict and fix energy and equipment issues.",
      description:
        "Empower predictive maintenance and rapid responses to issues with energy demand spikes, water consumption discrepancies and equipment faults…",
    },
  ],
];

export const DUMMY_PRODUCTS = { HOME, PRODUCT_MAP, HEADER };
