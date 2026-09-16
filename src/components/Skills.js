import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useObserver } from "../hooks/useObserver";
import SkillCircle from "./SkillCircle";
import "../App.css";

const Skills = () => {
  // Hook for triggering scroll reveal animation
  const [ref, reveal] = useObserver();

  // Clean data array for technical skills
  const technicalSkills = [
    {
      name: "HTML",
      level: 82,
      image: process.env.PUBLIC_URL + "/images/html-logo.png",
    },
    {
      name: "CSS",
      level: 78,
      image: process.env.PUBLIC_URL + "/images/css-logo.png",
    },
    {
      name: "JavaScript",
      level: 70,
      image: process.env.PUBLIC_URL + "/images/javascript-logo.png",
    },
    {
      name: "jQuery",
      level: 64,
      image: process.env.PUBLIC_URL + "/images/jquery-logo.png",
    },
    {
      name: "React",
      level: 68,
      image: process.env.PUBLIC_URL + "/images/react-logo.png",
    },
    {
      name: "MySQL",
      level: 50,
      image: process.env.PUBLIC_URL + "/images/mysql-logo.png",
    },
    {
      name: "PHP",
      level: 35,
      image: process.env.PUBLIC_URL + "/images/php-logo.png",
    },
    {
      name: "Figma",
      level: 41,
      image: process.env.PUBLIC_URL + "/images/figma-logo.png",
    },
    {
      name: "Canva",
      level: 82,
      image: process.env.PUBLIC_URL + "/images/canva-logo.png",
    },
  ];

  // Clean data array for soft skills
  const softSkills = [
    { name: "Analytical skills", level: 90 },
    { name: "Problem-Solver", level: 88 },
    { name: "Adaptability", level: 80 },
    { name: "Creativity", level: 75 },
    { name: "Persistent", level: 80 },
    { name: "Attention to Detail", level: 85 },
    { name: "Empathy", level: 77 },
  ];

  return (
    <Box
      id="skills"
      ref={ref}
      className={`appear-section ${reveal ? "active" : ""}`}
      sx={{
        width: "100%",
        py: 6,
        px: 3,
        // IMPORTANT: We style the main container with MUI to override bad legacy CSS behaviors
        display: "block !important",
      }}
    >
      <h1 className="section-title">Skills</h1>
      {/* MUI Grid Layout separating Technical and Soft Skills into 2 clean columns */}
      <Grid container spacing={6} justifyContent="center">
        {/* Technical Skills Column */}
        <Grid item xs={12} md={6}>
          {/* Pure MUI Typography component - strictly NO legacy CSS classes attached */}
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: "#20c4cb", // Using your signature cyan color directly
              textAlign: "center",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Technical Skills
          </Typography>

          {/* Flex grid box ensuring cards wrap horizontally fluidly */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {technicalSkills.map(
              (skill, index) =>
                reveal && (
                  <SkillCircle
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    img={skill.image}
                  />
                ),
            )}
          </Box>
        </Grid>

        {/* Soft Skills Column */}
        <Grid item xs={12} md={6}>
          {/* Pure MUI Typography component - strictly NO legacy CSS classes attached */}
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: "#20c4cb",
              textAlign: "center",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Soft Skills
          </Typography>

          {/* Flex grid box for soft skills */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {softSkills.map(
              (skill, index) =>
                reveal && (
                  <SkillCircle
                    key={index}
                    name={skill.name}
                    level={skill.level}
                  />
                ),
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
