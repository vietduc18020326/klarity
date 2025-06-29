import { UIButton } from "@/components";
import { memo } from "react";

export const OurProductSection = memo(function OurProductSection() {
  return (
    <section className="w-full py-3xl px-l items-center justify-center flex">
      <div className="max-w-content gap-2xl flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2xl px-xl items-center justify-center w-full">
          <UIButton size="M" color="secondary" title="Our Products" disabled />
          <span className="h1-6 text-brand-600 whitespace-pre-line text-center">
            What you measure, you can manage,{`\n`}
            <span className="text-brand-900">
              and what you can see, you can take action on.
            </span>
          </span>
        </div>
      </div>
    </section>
  );
});
