import React from "react";
import ProjectCard from "./ProjectCard.js";

import { useObserver } from "../hooks/useObserver";

const Projects = () => {
  const [ref, reveal] = useObserver(); //this is for appearing effect

  const projects = [
    {
      title: "FitLife Hub",
      description:
        "'FitLife Hub' is a comprehensive fitness platform developed using React JS. The website features over 1200 exercises, each accompanied by instructional GIFs, detailed descriptions, and targeted muscle information to help users optimize their workouts.",
      images: [
        "/images/projects/fitLifeHub_2.png",
        "/images/projects/fitLifeHub_3.png",
        "/images/projects/fitLifeHub_4.png",
        "/images/projects/fitLifeHub_5.png",
        "/images/projects/fitLifeHub_1.png",
      ],
      link: "https://fitlifehub.net",
    },
    {
      title: "Product List",
      description: [
        "'Product List' a dynamic product management web application developed using JavaScript, AJAX, PHP, and MySQL as a demonstration of my technical background and skills. While not intended for production use or visually polished, this project showcases essential functionality in managing products. The application allows users to add, categorize, and delete products efficiently. Each product type includes unique specifications, with the option to mass delete multiple products via checkboxes. A dedicated page for adding new products dynamically generates fields based on the selected product type, ensuring a streamlined input process. Additionally, SKU uniqueness is enforced through database validation to prevent duplicates.",
      ],

      images: [
        "/images/projects/addProduct_2.png",
        "/images/projects/addProduct_1.png",
      ],
      link: "https://bazeproducts.000webhostapp.com/index.php",
    },
    {
      title: "Tic Tac Toe Game",
      description: [
        "'Tic Tac Toe' is game developed using HTML, CSS, and vanilla JavaScript. Before starting, players select the number of games to be played, after which the selection is locked, and the game begins. As each game is completed, the results are recorded in a table displayed on the right-hand side. After each game, the 'Next Game' button is activated, allowing players to progress through their chosen number of games. Once all games have been played, the 'Next Game' button changes to 'Show Result,' which, when clicked, reveals the final score of the session.",
      ],

      images: [
        "/images/projects/ticTacToe_2.png",
        "/images/projects/ticTacToe_3.png",
        "/images/projects/ticTacToe_1.png",
      ],
      link: "https://sarkisjan.github.io/TicTacToeGame/",
    },
    {
      title: "Unka Dent",
      description: [
        "'Unka Dent' is responsive website for a dental office developed using HTML and CSS. The navigation bar features a clinic logo on the left, which was designed as a vector image in Figma and animated. On smaller devices, the navigation bar transforms into a burger menu for optimal user experience. A prominent purple button directs users to the appointment booking form. The site showcases four types of services, each accompanied by an animated icon. These icons were converted into vectors in Illustrator and further customized in Figma. Clicking on each icon takes users to the corresponding service description located in the lower section of the site. The footer is carefully stylized, featuring custom icons for location, contact information, business hours, and social media links to Facebook and Instagram, all of which were designed in Figma. Additionally, all services offered by the clinic are neatly organized into four tables, one for each main service type.",
      ],

      images: [
        "/images/projects/unka_2.png",
        "/images/projects/unka_3.png",
        "/images/projects/unka_4.png",
        "/images/projects/unka_1.png",
      ],
      link: "https://sarkisjan.github.io/Unka/",
    },
    // Add more projects here
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`appear-section ${reveal ? "active" : ""}`}
    >
      <h1 className="section-title">My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
