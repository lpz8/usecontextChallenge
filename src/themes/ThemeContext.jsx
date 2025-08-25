import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

 
  const value = { theme, toggleTheme };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}