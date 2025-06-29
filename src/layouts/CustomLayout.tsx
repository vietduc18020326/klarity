"use client";

import { ReactNode } from "react";

export const CustomLayout = function CustomLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="root-container" className="bg-white">
      <main>{children}</main>
    </div>
  );
};
