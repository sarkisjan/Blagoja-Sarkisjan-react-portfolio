import React from "react"; // Import React to create the component
import { useState, useEffect } from "react";
// SkillCircle component receives 'name' (skill name) and 'procent' (percentage of skill proficiency) as props

const SkillCircle = ({ name, procent, img }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0); // Track the progress
  const targetPercentage = parseInt(procent); // Convert procent string to an integer

  // Gradually update the percentage to animate the skill circle
  useEffect(() => {
    let currentProgress = 0; // Start at 0%
    const interval = setInterval(() => {
      currentProgress += 1; // Increase progress by 1%
      setCurrentPercentage(currentProgress); // Update state

      // Stop the interval when the progress reaches the target percentage
      if (currentProgress >= targetPercentage) {
        clearInterval(interval);
      }
    }, 20); // Update every 20ms for a smooth effect

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetPercentage]);

  return (
    <div
      className="skill-circle"
      style={{
        "--percent": currentPercentage,
        background: `conic-gradient(#20c4cb 0% ${currentPercentage}%, #dcdcdc ${currentPercentage}% 100%)`, // Update the progress using the current percentage
      }}
    >
      <div className="skill-inner">
        {img ? (
          <img className="skill-logo" src={img} />
        ) : (
          <p className="skill-logo">{name}</p>
        )}
        {/* <p>{name}</p> */}
        <p className="skill-procent">{currentPercentage}%</p>
      </div>{" "}
      {/* Display the skill name */}
    </div>
  );
};

export default SkillCircle;
