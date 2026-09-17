import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import { useObserver } from "../hooks/useObserver";

const About = () => {
  const [ref, reveal] = useObserver(); // Hook handling scroll visibility reveal timelines

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
      year: "2021",
    },
    {
      institution: "Shaw Academy",
      diploma: "Web Development",
      year: "2019",
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
        {/* Left Side Column: Biography Information Block */}
        <Box sx={{ width: { xl: "50%", xs: "100%" } }}>
          <h1 className="section-title">About Me</h1>

          <p className="aboutBio">
            I am a passionate <strong>Frontend Developer</strong> dedicated to
            building clean, highly interactive, and user-centric web
            applications. With a solid foundation in modern technologies like{" "}
            <strong>React.js</strong> and <strong>JavaScript</strong>, combined
            with backend experience in <strong>PHP and MySQL</strong>, I enjoy
            bridging the gap between robust functionality and beautiful design.
          </p>

          {/* Replaced legacy inline margins object with standard css selectors classes */}
          <p className="aboutBio aboutBio-secondary">
            Beyond writing clean code, I bring a strong analytical mindset and a
            relentless drive for problem-solving. Whether it is transforming
            complex Figma designs into responsive layouts or optimizing
            application logic, I am always eager to learn, adapt, and build
            digital experiences that make a difference.
          </p>

          {/* Social Profiles Deck Container Holding GitHub Redirect Buttons */}
        </Box>

        {/* Right Side Column: Academic Qualifications Records Timeline Deck */}
        <Stack
          sx={{
            justifyContent: "space-around",
            width: { xl: "45%", xs: "100%" },
            flexDirection: { xl: "row", sm: "row", xs: "column" },
            gap: { xl: "70px", xs: "40px" },
          }}
        >
          {/* Formal University Track Logs */}
          <Box sx={{ width: { xl: "50%", xs: "100%" } }}>
            <h1>Education</h1>
            {educations.map((education, index) => (
              <ul key={index}>
                <li>Institution: {education.institution}</li>
                <li>Diploma: {education.diploma}</li>
                <li>Year: {education.year}</li>
              </ul>
            ))}
          </Box>

          {/* Specialized Skill Accreditations Cards Logs */}
          <Box sx={{ width: { xl: "50%", xs: "100%" } }}>
            <h1>Certificates</h1>
            {certificates.map((certificate, index) => (
              <ul key={index}>
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
