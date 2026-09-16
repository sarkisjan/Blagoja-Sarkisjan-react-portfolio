import React from "react";

const Header = () => {
  // Function to handle smooth scrolling behavior when navigation items are clicked
  const handleScroll = (e, sectionId) => {
    e.preventDefault(); // Prevents standard instant browser page jump shifts
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth", // Enforces fluid, continuous tracking animation down to the element
        block: "start", // Aligns the top of the section directly with the top of the viewport
      });
    }
  };

  return (
    <nav className="navbar-modern">
      <ul className="navbar-list-modern">
        {/* Navigation link triggers passing destination section IDs down to the smooth scroll coordinator */}
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
