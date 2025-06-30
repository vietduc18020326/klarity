"use client";

import { ReactNode } from "react";
import { Footer } from "./Footer";

export const CustomLayout = function CustomLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="root-container" className="bg-white">
      <main>{children}</main>

      <Footer />
    </div>
  );
};
