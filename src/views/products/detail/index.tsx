"use client";

import { ContactUsSection } from "@/components";
import { DUMMY_PRODUCTS, ProductSlugType } from "@/dummy";
import { memo } from "react";
import { ProductDetailItem } from "./ProductDetailItem";

const ProductDetailPage = memo(function ProductDetailPage({
  slug,
}: {
  slug: ProductSlugType;
}) {
  const product = DUMMY_PRODUCTS.PRODUCT_MAP[slug];

  return (
    <div className="w-full flex flex-col">
      <section className="w-full flex items-center justify-center px-l py-3xl">
        <div className="max-w-content flex flex-col gap-3xl">
          <div className="flex flex-col items-center w-full gap-2xl">
            <div className="flex flex-row gap-2xl items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M8 32C24.7147 32 32 24.968 32 8C32 24.968 39.2347 32 56 32C39.2347 32 32 39.2347 32 56C32 39.2347 24.7147 32 8 32Z"
                  fill="#1B68F5"
                  stroke="#1B68F5"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              <h1 className="h1-6 text-brand-800">{product.title}</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M8 32C24.7147 32 32 24.968 32 8C32 24.968 39.2347 32 56 32C39.2347 32 32 39.2347 32 56C32 39.2347 24.7147 32 8 32Z"
                  fill="#1B68F5"
                  stroke="#1B68F5"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="h3-4 text-grey-600 text-center w-[70%]">
              {product.subtitle}
            </h3>
          </div>

          <div className="flex flex-row w-full gap-xl items-start">
            <img
              alt="dashboard"
              src={product.image}
              className="object-cover w-[630px] h-[540px]"
            />

            <div className="flex-1">
              <ul className="pl-xl w-full flex flex-col">
                {product.features.map((feature, index) => (
                  <ProductDetailItem
                    key={index}
                    title={feature}
                    isFirst={!index}
                    isLast={index === product.features.length - 1}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSection />
    </div>
  );
});

export default ProductDetailPage;
