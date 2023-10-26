import React, { useContext } from "react";
import "../Header/Header.css";
import { ThemeContext } from "../../contexts/ThemeProvider";
import darkThemeBtn from "../images/dark-theme-btn.png";
import whiteThemeBtn from "../images/white-theme-btn.png";

const Header = () => {
  const { defaultTheme, setDarkTheme, setWhiteTheme } =
    useContext(ThemeContext);
  return (
    <div>
      {defaultTheme ? (
        <div className="white-theme">
          <ul className="white-style">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
            <button className="btn-dark" onClick={setDarkTheme}>
              <label htmlFor=""></label>
              <img src={whiteThemeBtn} alt="" />
              <label htmlFor="btn-dark"></label>
            </button>
          </ul>
        </div>
      ) : (
        <div className="dark-theme">
          <ul className="dark-style">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
            <button className="btn-white" onClick={setWhiteTheme}>
              <label htmlFor="btn-while">
                <img src={darkThemeBtn} alt="" />
              </label>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
