import React, { useContext } from "react";
import "./Hero.css";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
// import Navbar from "../Navbar/Navbar";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";

function Hero() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing">
      {/* <Navbar /> */}
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: "#212121" }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: "#212121" }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: "#212121" }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing--social"
                  style={{ color: "#212121" }}
                  aria-label="InstagramFaInstagram"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt={headerData.title}
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: "#212121",
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: "#212121" }}
        >
          <div className="lcr--content" style={{ color: "#eaeaea" }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <a
                href="#contacts"
                style={{ textDecoration: "none" }}
                smooth="true"
                spy="true"
                duration={2000}
              >
                <Button className={classes.contactBtn}>Contact</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
