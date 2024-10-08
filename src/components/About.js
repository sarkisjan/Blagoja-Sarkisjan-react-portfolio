import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import { useObserver } from "../hooks/useObserver";

const About = () => {
  const [ref, reveal] = useObserver(); //this is for appearing effect
  const educations = [
    {
      institution:
        "Ss. Cyril and Methodius University in Skopje Faculty of Electrical Engineering and Information Technologies",
      diploma:
        "Graduate of Electrical Engineering and Information Technologies",
      year: "2005-2010",
    },
  ];
  const certificates = [
    {
      institution: "Udemy",
      diploma: "Web Developer Bootcamp",
      year: "2019",
    },
    {
      institution: "Shaw Academy",
      diploma: "Web Development",
      year: "2021",
    },
  ];
  return (
    <section
      id="about"
      ref={ref}
      className={`appear-section ${reveal ? "active" : ""}`}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: { xl: "70px", xs: "20px" },
          flexDirection: { xl: "row", xs: "column" },
        }}
      >
        <Box sx={{ width: { xl: "50%", xs: "100%" } }}>
          <h1 className="section-title">About Me</h1>
          <p className="aboutBio">
            I am currently working as a system engineer, where I have honed my
            analytical skills and organizational abilities, and I have been
            expanding my expertise into web development for the past 5 years.
            Outside of work, my passion lies in nature, hiking, and maintaining
            a healthy lifestyle through regular workouts at the gym. I am
            someone who thrives on learning new skills and believes in
            approaching every task with dedication and precision. My motto in
            life is to do everything to the best of my ability, and I am excited
            about the opportunity to apply my diverse skill set and enthusiasm
            for learning to the field of web development.
          </p>
        </Box>
        <Stack
          sx={{
            justifyContent: "space-around",
            width: { xl: "45%", xs: "100%" },
            flexDirection: { xl: "row", sm: "row", xs: "column" },
            gap: { xl: "70px", xs: "40px" },
          }}
        >
          <Box sx={{ width: { xl: "50%", xs: "100%" } }}>
            <h1>Education</h1>
            {educations.map((education, index) => (
              <ul>
                <li>Institution: {education.institution}</li>
                <li>Diploma: {education.diploma}</li>
                <li>Year: {education.year}</li>
              </ul>
            ))}
          </Box>
          <Box sx={{ width: { xl: "50%", xs: "100%" } }}>
            <h1>Certificates</h1>
            {certificates.map((certificate, index) => (
              <ul key="index">
                <li>Institution: {certificate.institution}</li>
                <li className="noStyle">Diploma: {certificate.diploma}</li>
                <li className="noStyle">Year: {certificate.year}</li>
              </ul>
            ))}
          </Box>
        </Stack>
      </Stack>
    </section>
  );
};

export default About;
