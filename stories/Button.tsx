import React from "react";
import clsx from "clsx";

import "./index.css"; // your tailwind styles

export const colorVariants: Record<string, string> = {
  gray: "bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600 dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-gray-300 dark:focus:bg-gray-300",
  teal: "bg-teal-500 text-white hover:bg-teal-600 focus:bg-teal-600 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-300 dark:focus:bg-teal-300",
  blue: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:focus:bg-blue-600",
  red: "bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-300 dark:focus:bg-red-300",
  yellow:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300 dark:focus:bg-yellow-300",
  white:
    "bg-white text-gray-800 hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white dark:focus:bg-white",
};

export const sizeVariants: Record<string, string> = {
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-4 text-sm",
  lg: "py-4 px-6 text-base",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: keyof typeof colorVariants;
  size?: keyof typeof sizeVariants;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  color = "gray",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center gap-x-2 font-medium rounded-lg border border-transparent focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none",
        colorVariants[color],
        sizeVariants[size],
        className,
      )}
      {...props}
    >
      {label}
    </button>
  );
};
