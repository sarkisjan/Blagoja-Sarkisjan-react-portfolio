import React from "react"; // Import React to create components
import { Box, Stack } from "@mui/material"; // Import components from Material UI
import { useObserver } from "../hooks/useObserver"; // Import the useObserver hook for scroll appearance effects
import SkillCircle from "./SkillCircle"; // Import the SkillCircle component for rendering each skill

const Skills = () => {
  const [ref, reveal] = useObserver(); // Call the useObserver hook to add the reveal effect on scroll

  // Array of technical skills with names and percentages (skill level)
  const skills = [
    { name: "HTML", procent: "82%", image: "/images/html-logo.png" },
    { name: "CSS", procent: "78%", image: "/images/css-logo.png" },
    {
      name: "JavaScript",
      procent: "70%",
      image: "/images/javascript-logo.png",
    },
    {
      name: "JQUERY",
      procent: "64%",
      image: "/images/jquery-logo.png",
    },
    { name: "React", procent: "68%", image: "/images/react-logo.png" },
    { name: "MySQL", procent: "50%", image: "/images/mysql-logo.png" },
    { name: "PHP", procent: "35%", image: "/images/php-logo.png" },
    { name: "Figma", procent: "41%", image: "/images/figma-logo.png" },
    { name: "Canva", procent: "82%", image: "/images/canva-logo.png" },
  ];

  // Array of soft skills as strings
  const softSkills = [
    {
      name: "Analytical skills",
      procent: "90%",
    },
    {
      name: "Problem-Solver",
      procent: "88%",
    },
    {
      name: "Adaptability",
      procent: "80%",
    },
    {
      name: "Creativity",
      procent: "75%",
    },

    {
      name: "Persistent",
      procent: "80%",
    },
    {
      name: "Attention to Detail",
      procent: "85%",
    },
    {
      name: "Empathy",
      procent: "77%",
    },
  ];

  return (
    // Container for the skills section, uses Stack for layout and ref for observer effect
    <Stack
      id="skills"
      ref={ref} // Ref is used to track visibility when the section enters the viewport
      className={`appear-section ${reveal ? "active" : ""}`} // Conditional class for revealing the section when it becomes visible
    >
      <Box className="skills-box" width="50vw">
        <h1 className="section-title">Technical Skills</h1>
        <div className="skills-container">
          {/* Map through the skills array and render a SkillCircle for each skill */}
          {skills.map(
            (skill, index) =>
              reveal && (
                <SkillCircle
                  key={index}
                  name={skill.name}
                  procent={skill.procent}
                  img={skill.image}
                />
              )
          )}
        </div>
      </Box>
      <Box className="skills-box" width="50vw">
        <h1 className="section-title">Soft Skills</h1>
        <div className="skills-container">
          {/* Map through the softSkills array and render each soft skill as a list item */}
          {softSkills.map(
            (skill, index) =>
              reveal && (
                <SkillCircle
                  key={index}
                  name={skill.name}
                  procent={skill.procent}
                />
              )
          )}
        </div>
      </Box>
    </Stack>
  );
};

export default Skills;
