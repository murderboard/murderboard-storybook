import React, { useEffect, useState } from "react";
import { Laptop, SquareMenu, X } from "lucide-react";

import "./index.css"; // your tailwind styles

import { ReactComponent as LogoLightMode } from "./assets/murderboard-light.svg";
import { ReactComponent as LogoDarkMode } from "./assets/murderboard-dark.svg";

import { useTheme } from "./ThemeContext";

interface NavbarInternalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  headings: string[];
}

export const NavbarInternalSubmenu = () => {
  return (
    // <div
    //   id="hs-dropdown-menu"
    //   className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
    //   role="menu"
    //   aria-orientation="vertical"
    //   aria-labelledby="hs-header-base-mega-menu-fullwidth"
    // >
    <div className="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md dark:md:bg-neutral-800">
      {/* Grid */}
      <div className="py-1 md:p-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col">
          {/* Link */}
          <a
            className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            <svg
              className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="grow">
              <p className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                Computer
              </p>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                You have a new notification on your computer.
              </p>
            </div>
          </a>
          {/* End Link */}
        </div>
        {/* End Col */}

        <div className="flex flex-col">
          {/* Link */}
          <a
            className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            <Laptop />
            <div className="grow">
              <p className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                Phone
              </p>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                You have a new text message.
              </p>
            </div>
          </a>
          {/* End Link */}
        </div>
        {/* End Col */}

        <div className="mt-2 md:mt-0 flex flex-col">
          <span className="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800 dark:text-neutral-200">
            Customer stories
          </span>

          {/* Link */}
          <a
            className="p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            <img
              className="size-32 rounded-lg"
              src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
              alt="Avatar"
            />
            <div className="grow">
              <p className="text-sm text-gray-800 dark:text-neutral-400">
                Preline Projects has proved to be most efficient cloud based
                project tracking and bug tracking tool.
              </p>
              <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-400">
                Learn more
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          {/* End Link */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
    // </div>
  );
};

export const NavbarInternal: React.FC<NavbarInternalProps> = ({
  headings = ["Example"],
}) => {
  useEffect(() => {
    import("preline").then(({ HSStaticMethods }) => {
      HSStaticMethods.autoInit();
    });
  }, []);

  console.log({ headings });
  const theme = useTheme();
  console.log({ theme });

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 z-50">
      <nav className="max-w-[85rem] mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          {theme === "dark" ? (
            <LogoDarkMode className="w-auto max-h-[88px]" />
          ) : (
            <LogoLightMode className="w-auto max-h-[88px]" />
          )}
        </a>

        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="size-4" />
          ) : (
            <SquareMenu className="size-4" />
          )}
        </button>
      </nav>

      {/* Mega Menu Always Opens from Hamburger */}
      {menuOpen && (
        <div className="bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700">
          <NavbarInternalSubmenu />
        </div>
      )}
    </header>
  );
};
