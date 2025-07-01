"use client";

import {
  IMAGE_LOGO_CLIMATE_ACTIVE,
  IMAGE_LOGO_GREEN_STAR,
  IMAGE_LOGO_GRESB,
  IMAGE_LOGO_LEADERSHIP,
  IMAGE_LOGO_NABERS,
  IMAGE_LOGO_WELL,
} from "@/assets";
import { memo } from "react";

export const ListLogo = memo(function ListLogo() {
  return (
    <div className="flex flex-row gap-3xl items-center w-full flex-wrap justify-center">
      <img
        src={IMAGE_LOGO_GRESB}
        alt="benchmark"
        className="h-[6vh] aspect-auto"
      />

      <img
        src={IMAGE_LOGO_NABERS}
        alt="benchmark"
        className="h-[5.5vh] aspect-auto"
      />

      <img
        src={IMAGE_LOGO_GREEN_STAR}
        alt="benchmark"
        className="h-[5vh] aspect-auto"
      />

      <img
        src={IMAGE_LOGO_CLIMATE_ACTIVE}
        alt="benchmark"
        className="h-[7.5vh] aspect-auto"
      />

      <img
        src={IMAGE_LOGO_LEADERSHIP}
        alt="benchmark"
        className="h-[7.5vh] aspect-auto"
      />

      <img
        src={IMAGE_LOGO_WELL}
        alt="benchmark"
        className="h-[7.5vh] aspect-auto"
      />
    </div>
  );
});
