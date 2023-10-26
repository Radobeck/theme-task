import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useState(true);

  function setDarkTheme() {
    setDefaultTheme(false);
  }
  function setWhiteTheme() {
    setDefaultTheme(true);
  }

  return (
    <ThemeContext.Provider
      value={{ defaultTheme, setDefaultTheme, setDarkTheme, setWhiteTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
