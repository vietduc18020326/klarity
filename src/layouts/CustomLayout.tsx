"use client";

import { ReactNode, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const CustomLayout = function CustomLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [heightHeader, setHeightHeader] = useState(0);

  return (
    <div id="root-container" className="bg-white">
      <Header heightHeader={heightHeader} setHeightHeader={setHeightHeader} />

      <main style={{ marginTop: `${heightHeader}px` }}>{children}</main>

      <Footer />
    </div>
  );
};
