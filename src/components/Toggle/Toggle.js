import React, { useEffect, useState } from "react";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { setTheme } from "../../utils/themes";

function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  const theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      {togClass === "light" ? (
        <div onClick={handleOnClick} className="toggle-image">
          <Brightness4Icon />
        </div>
      ) : (
        <div onClick={handleOnClick} className="toggle-image">
          <Brightness7Icon />
        </div>
      )}
    </div>
  );
}

export default Toggle;
