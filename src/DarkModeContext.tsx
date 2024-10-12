import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context for dark mode
interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

// Create a provider component
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Set dark mode based on time
  const currentHour = new Date().getHours();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    currentHour >= 19 || currentHour < 7
  );

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set dark mode class on body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Create a custom hook to use dark mode context easily
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
