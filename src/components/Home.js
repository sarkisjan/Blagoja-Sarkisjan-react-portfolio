import React, { useState, useEffect, useRef } from "react"; // Added useRef and useEffect for DOM tracking
import PortfolioPic from "../assets/images/portfolioPic.png";
import { Box, IconButton, Tooltip } from "@mui/material";
import Tittle from "./Tittle";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  // State to track if the horizontal neon drawer panel is expanded open
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Reference hook pointing directly to the floating tab element container in the DOM
  const tabRef = useRef(null);

  // Effect listener tracking global mouse clicks to safely execute a "click outside to close" pipeline
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the panel is open and the clicked element is NOT inside our tab component, close it
      if (
        isPanelOpen &&
        tabRef.current &&
        !tabRef.current.contains(event.target)
      ) {
        setIsPanelOpen(false);
      }
    };

    // Attach native window listener catching all mouse click actions on the screen
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup pipeline unmounting active event hooks safely to block background script leakage bugs
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPanelOpen]); // Syncs continuously with the drawer open state tracker

  return (
    <section id="home">
      {/* Background dark glass sheet structure overlay layer wrapper */}
      <div className="fixed-bg-container"></div>

      {/* Core central profile presentation bio box */}
      <Box className="homeBio">
        <img
          className="homePic"
          src={PortfolioPic}
          alt="Blagoja Sarkisjan Portrait"
        />
        <h1>Blagoja Sarkisjan</h1>
        <Tittle className="homeTittle" />
      </Box>

      {/* Modern horizontal Neon Floating Tab Widget with attached useRef anchor trigger */}
      <div
        ref={tabRef} // Connected the DOM node marker right into our state reference tracker
        className={`floating-neon-horizontal-tab ${isPanelOpen ? "horizontal-drawer-expanded" : "horizontal-drawer-collapsed"}`}
        onClick={() => !isPanelOpen && setIsPanelOpen(true)} // Clicking the tab layout safely slides it open
      >
        {/* Animated neon border background layer mask */}
        <div className="neon-border-glow-line-horizontal"></div>

        {/* Tab handle title text (Visible only inside collapsed resting state) */}
        {!isPanelOpen && (
          <div className="horizontal-tab-handle-text">
            <span>Connect</span>
          </div>
        )}

        {/* Inner horizontal actions stack housing the functional profile redirects */}
        {isPanelOpen && (
          <div className="inner-horizontal-drawer-actions">
            {/* Target 1: GitHub Account Link */}
            <Tooltip title="Follow my GitHub Profile" arrow placement="right">
              <IconButton
                component="a"
                href="https://github.com/sarkisjan"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-action-btn github-neon"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            {/* Target 2: LinkedIn Corporate Network Profile Link */}
            <Tooltip title="Connect on LinkedIn" arrow placement="right">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/blagoja-sarkisjan-02941330/"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-action-btn linkedin-neon"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            {/* Target 3: Email Pipeline Connection */}
            <Tooltip title="Send me an Email" arrow placement="right">
              <IconButton
                component="a"
                href="mailto:baze_sarkisjan@yahoo.com"
                className="drawer-action-btn email-neon"
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>

            {/* Target 4: PDF Resume Downloader Trigger */}
            <Tooltip title="Download my Resume (PDF)" arrow placement="right">
              <IconButton
                component="a"
                href={
                  process.env.PUBLIC_URL +
                  "/assets/documents/Blagoja_Sarkisjan_CV.pdf"
                }
                download="Blagoja_Sarkisjan_CV.pdf"
                className="drawer-action-btn cv-neon"
              >
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
