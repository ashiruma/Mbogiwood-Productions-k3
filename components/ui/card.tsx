"use client";

import React from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        "bg-white rounded-md shadow-sm overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx("p-4 sm:p-6", className)}>
      {children}
    </div>
  );
}