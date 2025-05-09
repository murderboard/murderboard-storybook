import React, { useEffect, useState } from "react";
import { Laptop, MessageSquare, Phone, SquareMenu, X } from "lucide-react";
import "./index.css";

import { ReactComponent as LogoLightMode } from "./assets/murderboard-light.svg";
import { ReactComponent as LogoDarkMode } from "./assets/murderboard-dark.svg";
import { useTheme } from "./ThemeContext";

interface Notification {
  id: string;
  type: 'sms' | 'email' | 'security' | 'internet';
  message: string;
  timestamp: string;
  read: boolean;
}

interface NavbarInternalProps {
  notifications?: Notification[];
}

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  subItems: {
    id: string;
    title: string;
    description: string;
    type: 'sms' | 'email' | 'security' | 'internet';
  }[];
}

const menuItems: MenuItem[] = [
  {
    id: 'phone',
    title: 'Phone',
    icon: <Phone className="size-4 mt-1" />,
    subItems: [
      {
        id: 'sms',
        title: 'SMS Messages',
        description: 'Check your text messages',
        type: 'sms'
      },
      {
        id: 'calls',
        title: 'Missed Calls',
        description: 'View your call history',
        type: 'sms'
      }
    ]
  },
  {
    id: 'computer',
    title: 'Computer',
    icon: <Laptop className="size-4 mt-1" />,
    subItems: [
      {
        id: 'email',
        title: 'Email',
        description: 'Check your inbox',
        type: 'email'
      },
      {
        id: 'security',
        title: 'Security System',
        description: 'Monitor security cameras',
        type: 'security'
      },
      {
        id: 'internet',
        title: 'Internet Search',
        description: 'Search the web',
        type: 'internet'
      }
    ]
  }
];

export const NavbarInternalSubmenu: React.FC<{ notifications?: Notification[] }> = ({ notifications = [] }) => {
  const hasUnreadNotifications = notifications.some(n => !n.read);

  return (
    <div className="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md dark:md:bg-neutral-800">
      <div className="py-1 md:p-2 md:grid md:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="p-3 flex gap-x-4 items-center">
              <div className="text-gray-800 dark:text-neutral-200">
                {item.icon}
              </div>
              <div className="grow">
                <p className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                  {item.title}
                </p>
              </div>
            </div>
            
            {/* Sub-items */}
            <div className="pl-12 space-y-2">
              {item.subItems.map((subItem) => {
                const hasNotification = notifications.some(
                  n => n.type === subItem.type && !n.read
                );
                
                return (
                  <a
                    key={subItem.id}
                    href="#"
                    className="block p-2 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        {subItem.title}
                      </span>
                      {hasNotification && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 mt-1">
                      {subItem.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NavbarInternal: React.FC<NavbarInternalProps> = ({
  notifications = []
}) => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const hasUnreadNotifications = notifications.some(n => !n.read);

  return (
    <header className="w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 z-50">
      <nav className="max-w-[85rem] mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="w-[200px] h-[50px]">
            {theme === "dark" ? (
              <LogoDarkMode className="w-full h-full" preserveAspectRatio="xMidYMid meet" />
            ) : (
              <LogoLightMode className="w-full h-full" preserveAspectRatio="xMidYMid meet" />
            )}
          </div>
        </a>

        {/* Hamburger Button with Notification */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="size-4" />
          ) : (
            <div className="relative">
              <SquareMenu className="size-4" />
              {hasUnreadNotifications && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </div>
          )}
        </button>
      </nav>

      {/* Mega Menu */}
      {menuOpen && (
        <div className="bg-white dark:bg-neutral-800 border-t border-gray-200 dark:border-neutral-700">
          <NavbarInternalSubmenu notifications={notifications} />
        </div>
      )}
    </header>
  );
};
