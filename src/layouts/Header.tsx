"use client";

import { UIButton } from "@/components";
import { DUMMY_PRODUCTS, ProductSlugType } from "@/dummy";
import { HOME_ID } from "@/types";
import { scrollToElement, useBoolean } from "@/utils";
import {
  ArrowCircleRightIcon,
  CaretDownIcon,
  ListIcon,
  Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useRef } from "react";

interface Props {
  heightHeader: number;
  setHeightHeader: Function;
}

export const Header = memo(function Header({
  heightHeader,
  setHeightHeader,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);

  const [isProductsOpen, showProducts, hideProducts, toggleProducts] =
    useBoolean(false);

  useEffect(() => {
    const height = ref.current?.offsetHeight;
    if (height) setHeightHeader(height);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        hideProducts();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={ref}
      className="flex fixed top-0 z-10 bg-brand-900 w-full p-l border-b border-b-white items-center justify-center mobile:p-s"
    >
      <div className="flex flex-row w-content items-center justify-between mobile:w-full">
        <div className="flex flex-row items-center gap-3">
          <ListIcon className="hidden mobile:block w-l h-l text-white" />
          <Link
            href="/"
            className="h-4xl h3-7 text-white hover:opacity-80 transition-opacity"
          >
            Klarity Live
          </Link>
        </div>

        <div className="flex flex-row h-full mobile:hidden">
          <NavItem title="Why us" id={HOME_ID.WHY_US} />

          <div
            className="relative h-full"
            ref={productsRef}
            onMouseEnter={showProducts}
            onMouseLeave={hideProducts}
          >
            <div
              className="flex flex-row gap-m py-s px-m items-center cursor-pointer"
              onClick={toggleProducts}
            >
              <p className="text-white b3-4">Products</p>

              <CaretDownIcon className="w-m h-m text-white" />
            </div>

            {isProductsOpen ? (
              <div className="absolute top-full left-0">
                <div className="bg-white/60 rounded-1 p-xs shadow-[0_8px_12px_0_rgba(0,0,0,0.2)] backdrop-blur-[10px]">
                  <ul className="flex flex-col">
                    {DUMMY_PRODUCTS.HEADER.map((item) => (
                      <NavProductItem
                        key={item.slug}
                        {...item}
                        hideServices={hideProducts}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <NavItem title="About us" href="/about-us" />
          <NavItem title="Contact" href="/contact-us" />
        </div>

        <UIButton
          size="M"
          color="primary"
          title="Get Klarity Live"
          RightComp={
            <ArrowCircleRightIcon
              weight="fill"
              className="w-l h-l text-white"
            />
          }
        />
      </div>
    </header>
  );
});

const NavProductItem = memo(function NavProductItem({
  slug,
  hideServices,
  title,
  LeadingIcon,
}: {
  slug: ProductSlugType;
  hideServices: () => void;
  title: string;
  LeadingIcon: PhosphorIcon;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes(`/products/${slug}`);

  return (
    <Link
      href={`/products/${slug}`}
      onClick={hideServices}
      className={`group flex flex-row gap-m py-s px-m items-center rounded-2 transition-colors duration-200 ${
        isActive ? "bg-brand-600" : "hover:bg-brand-50/50"
      }`}
    >
      <LeadingIcon
        weight={isActive ? "fill" : "regular"}
        className={`w-m h-m transition-colors duration-200 ${
          isActive ? "text-white" : "text-brand-500"
        }`}
      />
      <p
        className={`transition-colors duration-200 b3-4 ${
          isActive ? "text-white" : "text-grey-600 group-hover:text-brand-500"
        }`}
      >
        {title}
      </p>
    </Link>
  );
});

const NavItem = memo(function NavItem({
  title,
  id,
  href,
}: {
  title: string;
  id?: string;
  href?: string;
}) {
  const handleClick = useCallback(() => {
    if (id) scrollToElement(id, "/");

    if (href) window.location.href = href;
  }, [scrollToElement, id, href]);

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer py-s px-m b3-4 text-white"
    >
      {title}
    </div>
  );
});
