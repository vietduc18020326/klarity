"use client";

import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, memo, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  size: "L" | "M" | "S";
  color: "primary" | "border" | "bg-white" | "secondary" | "disable";
  title: string;
  RightComp?: React.JSX.Element;
  LeftComp?: React.JSX.Element;
  path?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const UIButton = memo(function UIButton({
  size,
  color,
  title,
  RightComp,
  LeftComp,
  className,
  path,
  fullWidth,
  type,
  disabled,
  ...props
}: Props) {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case "L":
        return "py-m px-l b3-6";
      case "M":
        return "py-s px-m b3-6";
      case "S":
        return "py-xs px-m b3-6";
      default:
        return "";
    }
  }, [size]);

  const typeClassName = useMemo(() => {
    switch (color) {
      case "primary":
        return "bg-brand-500 text-white";
      case "border":
        return "border border-brand-500 bg-white text-brand-500";
      case "bg-white":
        return "bg-white text-brand-500";
      case "secondary":
        return "bg-brand-25 border border-brand-600 text-brand-600 !h3-6";
      case "disable":
        return "bg-grey-200 text-white cursor-not-allowed";
      default:
        return "";
    }
  }, [color]);

  if (path) {
    return (
      <Link
        href={path}
        className={clsx(
          `gap-s rounded-3 flex flex-row items-center justify-center relative uppercase ${fullWidth ? "w-full" : "w-fit"}`,
          sizeClassName,
          typeClassName,
          className
        )}
        {...props}
      >
        {LeftComp ? LeftComp : null}
        <span>{title}</span>
        {RightComp ? (
          <div className="flex items-center h-full">{RightComp}</div>
        ) : null}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        `gap-s rounded-3 flex flex-row items-center relative justify-center uppercase ${fullWidth ? "w-full" : "w-fit"}`,
        sizeClassName,
        typeClassName,
        className
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {LeftComp ? LeftComp : null}
      <span>{title}</span>
      {RightComp ? (
        <div className="flex items-center h-full">{RightComp}</div>
      ) : null}
    </button>
  );
});
