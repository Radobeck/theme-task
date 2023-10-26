import React from "react";
import Header from "../Header/Header";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
const Main = () => {
  const { defaultTheme, setDarkTheme, setWhiteTheme } =
    useContext(ThemeContext);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Main;
