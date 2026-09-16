import React, { useState, useEffect } from "react";
// Imported structural elements and icons directly from Material-UI
import { IconButton, Tooltip } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language"; // Icon for World Wide Web (Live Site)
import GitHubIcon from "@mui/icons-material/GitHub"; // Icon for GitHub Repository

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
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1,
    );
  };

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
          {/* Action Action Links Container containing modern icons buttons */}
          <div className="project-actions-wrapper">
            {/* Live Preview Website URL Redirect Trigger Button */}
            <Tooltip title="Visit Live Website" arrow placement="top">
              <IconButton
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="action-icon-btn web-btn"
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            {/* Source Code GitHub Repository Link Redirect Trigger Button */}
            {project.github && (
              <Tooltip title="View Source Code on GitHub" arrow placement="top">
                <IconButton
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-icon-btn github-btn"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
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

      {/* Modal slider image zoom sandbox component */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>

            {/*  Added dynamic 'key' prop to re-trigger CSS animations on every slide change */}
            <img
              key={currentImageIndex}
              className="modal-img-animated" /* Switched to a new descriptive class name */
              src={project.images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1} of ${project.title}`}
            />

            <button onClick={prevImage} className="modal-prev">
              ◀
            </button>
            <button onClick={nextImage} className="modal-next">
              ▶
            </button>
          </div>
        </div>
      )}

      <hr className="projectBorder" />
    </div>
  );
};

export default ProjectCard;
