import React from "react";
import { Box, Typography, Grid } from "@mui/material"; // Integrated MUI Grid system for responsive layouts
import ProjectCard from "./ProjectCard.js";
import { useObserver } from "../hooks/useObserver";

const Projects = () => {
  // Hook for triggering scroll reveal animation
  const [ref, reveal] = useObserver();

  // Standardized project data array (all descriptions are uniform strings now)
  const projects = [
    {
      title: "TradeVibe – Advanced Multi-Vendor E-Commerce",
      description:
        "A high-performance, full-stack multi-vendor marketplace engineered with Object-Oriented PHP, MySQL, and Vanilla JavaScript. Features a secure multi-role session gateway separating Root Admins, Vendors, and Buyers. Includes dynamic currency routing, real-time discount parsing matrices, and an integrated warehouse inventory management system with automated stock synchronization layers.",
      images: [
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_2.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_3.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_4.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_5.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_6.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_7.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_8.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_9.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_10.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_11.png",
        process.env.PUBLIC_URL + "/images/projects/TradeVibe_1.png",
      ],
      link: "https://tradevibe.infinityfree.io/",
      github: "https://github.com/sarkisjan/TradeVibe",
    },
    {
      title: "FitLife Hub",
      description:
        "'FitLife Hub' is a comprehensive fitness platform developed using React JS. The website features over 1200 exercises, each accompanied by instructional GIFs, detailed descriptions, and targeted muscle information to help users optimize their workouts.",
      images: [
        process.env.PUBLIC_URL + "/images/projects/fitLifeHub_2.png",
        process.env.PUBLIC_URL + "/images/projects/fitLifeHub_3.png",
        process.env.PUBLIC_URL + "/images/projects/fitLifeHub_4.png",
        process.env.PUBLIC_URL + "/images/projects/fitLifeHub_5.png",
        process.env.PUBLIC_URL + "/images/projects/fitLifeHub_1.png",
      ],
      link: "https://sarkisjan.github.io/fit_life/",
      github: "https://github.com/sarkisjan/fit_life",
    },
    {
      title: "FitnessLife Backend API",
      description:
        "A scalable RESTful API built with Node.js and Express that serves as the core data engine for fitness applications. Hosted live on Render, the server processes raw data arrays using modern ES6 methods to deliver structured JSON payloads. It features 11 highly specific endpoints that enable full-text searching by exercise names and parameterized filtering by target muscles, gear requirements, and body parts. Equipped with CORS middleware, it is fully optimized to provide seamless, secure data pipelines for modern single-page frontend environments like React.",
      images: [
        process.env.PUBLIC_URL + "/images/projects/api_preview_1.png",
        process.env.PUBLIC_URL + "/images/projects/api_preview_2.png",
        process.env.PUBLIC_URL + "/images/projects/api_preview_3.png",
        process.env.PUBLIC_URL + "/images/projects/api_preview_4.png",
        process.env.PUBLIC_URL + "/images/projects/api_preview_5.png",
        process.env.PUBLIC_URL + "/images/projects/api_preview_0.png",
      ],
      link: "https://fitnesslifeapi.onrender.com/",
      github: "https://github.com/sarkisjan/fitnesslifeapi", // Replace with your exact GitHub repository path
    },

    {
      title: "Tic Tac Toe Game",
      description:
        "'Tic Tac Toe' is a game developed using HTML, CSS, and vanilla JavaScript. Before starting, players select the number of games to be played, after which the selection is locked, and the game begins. As each game is completed, the results are recorded in a table displayed on the right-hand side. After each game, the 'Next Game' button is activated, allowing players to progress through their chosen number of games. Once all games have been played, the 'Next Game' button changes to 'Show Result,' which, when clicked, reveals the final score of the session.",
      images: [
        process.env.PUBLIC_URL + "/images/projects/ticTacToe_2.png",
        process.env.PUBLIC_URL + "/images/projects/ticTacToe_3.png",
        process.env.PUBLIC_URL + "/images/projects/ticTacToe_1.png",
      ],
      link: "https://sarkisjan.github.io/TicTacToeGame/",
      github: "https://github.com/sarkisjan/TicTacToeGame",
    },
    {
      title: "Unka Dent",
      description:
        "'Unka Dent' is a responsive website for a dental office developed using HTML and CSS. The navigation bar features a clinic logo on the left, which was designed as a vector image in Figma and animated. On smaller devices, the navigation bar transforms into a burger menu for optimal user experience. A prominent purple button directs users to the appointment booking form. The site showcases four types of services, each accompanied by an animated icon. These icons were converted into vectors in Illustrator and further customized in Figma. Clicking on each icon takes users to the corresponding service description located in the lower section of the site. The footer is carefully stylized, featuring custom icons for location, contact information, business hours, and social media links to Facebook and Instagram, all of which were designed in Figma. Additionally, all services offered by the clinic are neatly organized into four tables, one for each main service type.",
      images: [
        process.env.PUBLIC_URL + "/images/projects/unka_2.png",
        process.env.PUBLIC_URL + "/images/projects/unka_3.png",
        process.env.PUBLIC_URL + "/images/projects/unka_4.png",
        process.env.PUBLIC_URL + "/images/projects/unka_1.png",
      ],
      link: "https://sarkisjan.github.io/Unka/",
      github: "https://github.com/sarkisjan/Unka",
    },
  ];

  return (
    <Box
      component="section"
      id="projects"
      ref={ref}
      className={`appear-section ${reveal ? "active" : ""}`}
      sx={{ width: "100%", py: 8 }}
    >
      <h1 className="section-title">My Projects</h1>

      {/* Grid container to shift layout from a single long list into a neat side-by-side card grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        className="projects-grid-list"
      >
        {projects.map((project, index) => (
          // xs={12} forces full width on mobile, md={6} forces a clean 2-column grid layout on larger laptops/desktops
          <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
