// ThemeContext.tsx
"use client";
import React, { createContext,useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: string | null;
  bool: boolean;
  setBool: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [bool, setBool] = useState<boolean>(true);
  const [theme, setTheme] = useState<string | null>("true");

  return (
    <ThemeContext.Provider value={{ bool, theme, setBool, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
