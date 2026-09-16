import React, { useState, useEffect } from "react";

// Change the structural arguments to receive 'level' instead of 'procent'
const SkillCircle = ({ name, level, img }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const targetLevel = level;

  useEffect(() => {
    let currentProgress = 0;

    // Interval to incrementally build up the Level ring
    const interval = setInterval(() => {
      currentProgress += 1;
      setCurrentLevel(currentProgress);

      // Clear interval once the target Level is reached
      if (currentProgress >= targetLevel) {
        clearInterval(interval);
      }
    }, 15); // Smooth 15ms update rate for fluid rendering

    return () => clearInterval(interval);
  }, [targetLevel]);

  return (
    <div className="modern-skill-card">
      {/* Outer wrapper rendering the dynamic conic-gradient progress ring */}
      <div
        className="skill-circle-modern"
        style={{
          background: `conic-gradient(#00f2fe 0% ${currentLevel}%, rgba(255, 255, 255, 0.1) ${currentLevel}% 100%)`,
        }}
      >
        {/* Inner container to hold the logo or initials over a dark base */}
        <div className="skill-inner-modern">
          {img ? (
            <div className="logo-wrapper">
              <img className="skill-logo-modern" src={img} alt={name} />
            </div>
          ) : (
            // Extracted initials to format clean soft skill typography
            <div className="soft-skill-initials">
              {name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
          )}
        </div>
      </div>

      {/* Only the label remains underneath the circle layout for a cleaner UX */}
      <div className="skill-info-below">
        <p className="skill-name-modern">{name}</p>
      </div>
    </div>
  );
};

export default SkillCircle;
