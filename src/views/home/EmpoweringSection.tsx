import {
  IMAGE_BUILDING_1,
  IMAGE_BUILDING_2,
  IMAGE_CHATTERING_ALARMS,
} from "@/assets";
import { Badge, MetricBadge } from "@/components";
import { DUMMY_BADGES } from "@/dummy";
import {
  ChartBarIcon,
  DropIcon,
  FireSimpleIcon,
  GasPumpIcon,
  LeafIcon,
  LightningIcon,
} from "@phosphor-icons/react";
import { memo } from "react";

export const EmpoweringSection = memo(function EmpoweringSection() {
  return (
    <section className="py-3xl px-l w-full items-center flex justify-center">
      <div className="flex flex-col gap-2xl max-w-content">
        <div className="flex flex-row w-full gap-4xl">
          <div className="flex-1 relative pr-xl">
            <div className="relative h-[460px] w-full">
              <div className="bg-brand-900 absolute left-0 bottom-0 right-[10%] top-[3%] rounded-3 inset-0" />
              <div className="absolute left-[3%] bottom-[3%] right-0 top-0 rounded-3 overflow-hidden">
                <img
                  alt="building_1"
                  src={IMAGE_BUILDING_1}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="absolute right-0 top-[8%]"
              style={{
                boxShadow: "0px 0px 90px 0px rgba(12, 111, 255, 0.12)",
              }}
            >
              <img
                alt="chattering_alarms"
                src={IMAGE_CHATTERING_ALARMS}
                className="w-[266px] aspect-[19/16] object-cover"
              />
            </div>
          </div>

          <div className="flex-1 items-start justify-center flex flex-col gap-l pl-xl">
            <span className="h2-6 text-brand-500">
              Empowering sustainability{" "}
              <span className="text-brand-900">
                with real-time data and insights for property management
              </span>
            </span>

            <p className="text-grey-600 b3-4">
              Klarity Live provides real-time data and critical insights through
              intuitive dashboards, tailored for fund managers, property
              professionals, and commercial tenants
            </p>

            <div className="flex flex-row gap-xs">
              {DUMMY_BADGES.EMPOWERING.map((badge, index) => (
                <Badge key={index} {...badge} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full gap-4xl">
          <div className="flex-1 flex flex-col gap-l pr-xl">
            <span className="h2-6 text-brand-900">
              Visibility of key{" "}
              <span className="text-brand-500">operational metrics</span>
            </span>

            <p className="b3-4 text-grey-600">
              Klarity Live gives you visibility of key operational metrics - energy,
              water, emissions, waste and other data, including relevant ratings
              and benchmarks.
            </p>

            <ul className="w-full flex flex-col gap-m">
              <li className="flex flex-row gap-m items-center">
                <LightningIcon
                  weight="fill"
                  className="text-brand-500 w-6 h-6"
                />
                <p className="b3-4 text-grey-600">Energy</p>
              </li>

              <li className="flex flex-row gap-m items-center">
                <DropIcon weight="fill" className="text-brand-500 w-6 h-6" />
                <p className="b3-4 text-grey-600">Water</p>
              </li>

              <li className="flex flex-row gap-m items-center">
                <GasPumpIcon weight="fill" className="text-brand-500 w-6 h-6" />
                <p className="b3-4 text-grey-600">Emissions</p>
              </li>

              <li className="flex flex-row gap-m items-center">
                <ChartBarIcon
                  weight="fill"
                  className="text-brand-500 w-6 h-6"
                />
                <p className="b3-4 text-grey-600">
                  Other data (including relevant ratings and benmarks)
                </p>
              </li>
            </ul>
          </div>

          <div className="flex-1 relative flex h-[480px] items-end justify-end pl-xl">
            <div className="h-full rounded-[18px] bg-brand-900 p-5">
              <div className="w-[440px] h-full rounded-[14px] bg-brand-25">
                <img
                  alt="building_2"
                  src={IMAGE_BUILDING_2}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <MetricBadge
              color="green"
              value="Emissions: 89.6 t CO₂e in Q2."
              LeadingIcon={LeafIcon}
              className="absolute top-[10%] left-0"
            />

            <MetricBadge
              color="red"
              value="Energy: 87 kWh/m², up 9% efficiency."
              LeadingIcon={FireSimpleIcon}
              className="absolute top-1/2 right-[15%]"
            />

            <MetricBadge
              color="blue"
              value="Water use: 12,500 m³, down 5% MoM."
              LeadingIcon={DropIcon}
              className="absolute bottom-[10%] -right-[5%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
