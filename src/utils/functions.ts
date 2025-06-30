import React, { forwardRef, memo, RefObject } from "react";

export type TPrevFn<T> = ((prev: T) => T) | T;
export type TPrevPFn<P, T> = ((prev: P) => T) | T;

export const memoForwardRef = <P extends {}, T>(
  c: (props: P, ref: RefObject<T>) => React.ReactElement | null
): ((props: P & React.RefAttributes<T>) => React.ReactElement | null) =>
  // @ts-ignore
  memo(forwardRef(c));

export function prevFn<T>(prev: T, value: TPrevFn<T>): T {
  // @ts-ignore
  return typeof value === "function" ? value(prev) : value;
}

export function prevPFn<P, T>(prev: P, value: TPrevPFn<P, T>): T {
  // @ts-ignore
  return typeof value === "function" ? value(prev) : value;
}
