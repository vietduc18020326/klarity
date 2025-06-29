import { IMAGE_BUILDING_1, IMAGE_CHATTERING_ALARMS } from "@/assets";
import {
  BuildingIcon,
  ChartBarIcon,
  DatabaseIcon,
  DropIcon,
  GasPumpIcon,
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
            <h2 className="h2-6 text-brand-900">
              Empowering sustainability with real-time data and insights for
              property management
            </h2>

            <p className="text-grey-400 b3-4">
              Klarity provides real-time data and critical insights through
              intuitive dashboards, tailored for fund managers, property
              professionals, and commercial tenants
            </p>

            <div className="flex flex-row gap-xs">
              <div className="gap-xs flex flex-row items-center bg-brand-25 rounded-full px-m py-xs">
                <DatabaseIcon className="text-brand-600 w-6 h-6" />
                <span className="b3-4 text-brand-600">Data</span>
              </div>

              <div className="gap-xs flex flex-row items-center bg-brand-25 rounded-full px-m py-xs">
                <ChartBarIcon className="text-brand-600 w-6 h-6" />
                <span className="b3-4 text-brand-600">Dashboards</span>
              </div>

              <div className="gap-xs flex flex-row items-center bg-brand-25 rounded-full px-m py-xs">
                <BuildingIcon className="text-brand-600 w-6 h-6" />
                <span className="b3-4 text-brand-600">Tenants</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full gap-4xl">
          <div className="flex-1 flex flex-col gap-l pr-xl">
            <h2 className="h2-6 text-brand-600">
              Visibility of key operational metrics
            </h2>

            <p className="b3-4 text-grey-400">
              Klarity gives you visibility of key operational metrics - energy,
              water, emissions, waste and other data, including relevant ratings
              and benchmarks.
            </p>

            <ul className="w-full flex flex-col gap-m">
              <li className="flex flex-row gap-m items-center">
                <LightningIcon
                  weight="fill"
                  className="text-brand-600 w-6 h-6"
                />
                <p className="b3-4 text-grey-400">Energy</p>
              </li>

              <li className="flex flex-row gap-m items-center">
                <DropIcon weight="fill" className="text-brand-600 w-6 h-6" />
                <p className="b3-4 text-grey-400">Water</p>
              </li>

              <li className="flex flex-row gap-m items-center">
                <GasPumpIcon weight="fill" className="text-brand-600 w-6 h-6" />
                <p className="b3-4 text-grey-400">Emissions</p>
              </li>

              <li className="flex flex-row gap-m items-center">
                <ChartBarIcon
                  weight="fill"
                  className="text-brand-600 w-6 h-6"
                />
                <p className="b3-4 text-grey-400">
                  Other data (including relevant ratings and benmarks)
                </p>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex h-[480px] bg-red-300 items-end justify-end pl-xl">
            <div className="h-full rounded-[18px] bg-brand-900 p-5">
              <div className="w-[440px] h-full rounded-[14px] bg-brand-25"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
