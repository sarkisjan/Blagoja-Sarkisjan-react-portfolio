import React, { useState } from "react";
import { useEffect } from "react";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if the modal is open

  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to open the modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index); // Set the clicked image as the starting image
    setIsModalOpen(true); // Open the modal
    document.getElementById("projects").scrollIntoView();
    document.body.style.overflow = "hidden";
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    document.body.style.overflow = "auto";
  };

  // Cleanup when component unmounts to ensure no scroll issues
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Reset body overflow on component unmount
    };
  }, []);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Limiting the number of words in the description
  // const limitText = (text, limit) => {
  //   return text.split(" ").slice(0, limit).join(" ") + "...";
  // };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <div className="project-info">
        <div className="project-description">
          <p className={showFullDescription ? "more-desc " : "less-desc"}>
            {project.description}
          </p>
          {/* Toggle between "more" and "less" */}
          <span
            className="more-less toggle-description"
            onClick={() => setShowFullDescription(!showFullDescription)}
            style={{ cursor: "pointer", color: "#20c4cb", fontWeight: "bold" }}
          >
            {showFullDescription ? "...less" : "...more"}
          </span>
          <br />
          <a href={project.link}>
            <span style={{ color: "#20c4cb", fontWeight: "bold" }}>
              View Project
            </span>
          </a>
        </div>

        {/* Project images - Clicking an image opens the modal */}
        <div className="project-img-container">
          {project.images.map((img, index) => (
            <img
              key={index}
              className="project-img"
              src={img}
              alt={`Screenshot ${index + 1} of ${project.title}`}
              onClick={() => openModal(index)} // Open modal on click
            />
          ))}
        </div>
      </div>

      {/* Modal for enlarging the image */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal-img"
              src={project.images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1} of ${project.title}`}
            />
            <button onClick={prevImage} className="modal-prev">
              &#9664;
            </button>
            <button onClick={nextImage} className="modal-next">
              &#9654;
            </button>
          </div>
        </div>
      )}
      <hr className="projectBorder" />
    </div>
  );
};

export default ProjectCard;
