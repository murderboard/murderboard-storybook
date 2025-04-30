// src/theme/ThemeContext.tsx
import React, { createContext, useContext } from "react";

export type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({
  value,
  children,
}: {
  value: Theme;
  children: React.ReactNode;
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
