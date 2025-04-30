import React, { useEffect } from "react";
import { Laptop } from "lucide-react";

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
    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
      <button
        id="hs-header-base-mega-menu-fullwidth"
        type="button"
        className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Mega Menu"
      >
        <svg
          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Notifications
      </button>

      <div
        id="hs-dropdown-menu"
        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-header-base-mega-menu-fullwidth"
      >
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
      </div>
    </div>
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
  return (
    <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <span className="block max-h-[88px]">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
              href="#"
              aria-label="Brand"
            >
              {theme === "dark" ? (
                <LogoDarkMode className="w-auto max-h-[88px]" />
              ) : (
                <LogoLightMode className="w-auto max-h-[88px]" />
              )}
            </a>
          </span>

          {/* Collapse Button */}
          <button
            type="button"
            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            // id="hs-header-base-collapse"
            id="hs-dropdown-menu-collapse"
            aria-expanded="false"
            // aria-controls="hs-header-base"
            aria-controls="hs-dropdown-menu"
            aria-label="Toggle navigation"
            // data-hs-collapse="#hs-header-base"
            data-hs-collapse="#hs-dropdown-menu"
          >
            <svg
              className="hs-collapse-open:hidden size-4"
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block shrink-0 hidden size-4"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
          {/* End Collapse Button */}
        </div>

        {/* Collapse */}
        <div
          id="hs-header-base"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                  {/* Mega Menu */}
                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                    <button
                      id="hs-header-base-mega-menu-fullwidth"
                      type="button"
                      className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Mega Menu"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Notifications
                    </button>

                    <div
                      id="hs-dropdown-menu"
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-header-base-mega-menu-fullwidth"
                    >
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
                                  Preline Projects has proved to be most
                                  efficient cloud based project tracking and bug
                                  tracking tool.
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
                    </div>
                  </div>
                  {/* End Mega Menu */}
                </div>
              </div>

              {/* <div className="my-2 md:my-0 md:mx-2">
                <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
              </div> */}
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};
