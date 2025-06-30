import { ProductCard, UIButton } from "@/components";
import { DUMMY_PRODUCTS } from "@/dummy";
import { memo } from "react";

export const OurProductSection = memo(function OurProductSection() {
  return (
    <section className="w-full py-3xl px-l items-center justify-center flex">
      <div className="max-w-content gap-2xl flex flex-col items-center justify-center">
        <div className="flex flex-col gap-l px-xl items-center justify-center w-full">
          <UIButton size="L" color="secondary" title="Our Products" disabled />
          <span className="h1-6 text-brand-600 whitespace-pre-line text-center">
            What you measure, you can manage,{`\n`}
            <span className="text-brand-900">
              and what you can see, you can take action on.
            </span>
          </span>
        </div>

        <div className="flex flex-col w-full gap-2xl items-center justify-center">
          {DUMMY_PRODUCTS.HOME.map((list, i) => (
            <ul className="flex flex-row gap-2xl" key={i.toString()}>
              {list.map((item, index) => (
                <li key={index.toString() + item.title}>
                  <ProductCard {...item} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
});
