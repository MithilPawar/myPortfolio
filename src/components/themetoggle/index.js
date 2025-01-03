import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Conditionally set icon and color
  const themeIcon = theme === "dark" 
    ? <WiMoonAltWaningCrescent4 style={{ color: "#FFD700", width: "2.5em", height: "2.5em" }} />
    : <WiDaySunny style={{ color: "#FFD700", width: "2.5em", height: "2.5em" }} />;

  return (
    <div className="theme_toggler" onClick={themetoggle}>
      {themeIcon}
    </div>
  );
};

export default Themetoggle;
