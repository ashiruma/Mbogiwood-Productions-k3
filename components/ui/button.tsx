"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

export function Button({
  variant = "default",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition";
  const sizeMap: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variantMap: Record<string, string> = {
    default: "bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90",
    outline: "border border-current bg-transparent",
  };

  return (
    <button
      {...props}
      className={clsx(base, sizeMap[size], variantMap[variant], className)}
    />
  );
}

export default Button;
