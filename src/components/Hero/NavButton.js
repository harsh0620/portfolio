import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SettingsIcon from "@material-ui/icons/Settings";

const navData = [
  {
    title: "Home",
    link: "#home",
    icon: "InfoIcon",
  },
  {
    title: "About",
    link: "#about",
    icon: "InfoIcon",
  },
  {
    title: "Education",
    link: "#education",
    icon: "InfoIcon",
  },
  {
    title: "Experience",
    link: "#experience",
    icon: "InfoIcon",
  },
  {
    title: "Projects",
    link: "#projects",
    icon: "InfoIcon",
  },
  {
    title: "Skills",
    link: "#skills",
    icon: "InfoIcon",
  },
];

function NavButton() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="float-nav-button" onClick={() => setNav(!nav)}>
        <MenuIcon />
      </div>
      {nav === true ? (
        <div className="float-nav-slider">
          <ul>
            {navData.map((item, index) => {
              return (
                <a href={item.link} key={index} className="a">
                  <li className="li">
                    {index === 0 ? (
                      <HomeIcon />
                    ) : index === 1 ? (
                      <InfoIcon />
                    ) : index === 2 ? (
                      <LibraryBooksIcon />
                    ) : index === 3 ? (
                      <WorkIcon />
                    ) : index === 4 ? (
                      <AccountTreeIcon />
                    ) : index === 5 ? (
                      <SettingsIcon />
                    ) : (
                      <div></div>
                    )}{" "}
                    {item.title}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default NavButton;
