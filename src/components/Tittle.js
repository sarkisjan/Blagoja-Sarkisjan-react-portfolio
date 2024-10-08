import React from "react";
import { useState, useEffect } from "react";
const tittleParts = ["Web Developer", "Frontend Developer", "Web Designer"];

const Tittle = () => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartIndex((prevIndex) => (prevIndex + 1) % tittleParts.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="tittle-container">
      {tittleParts.map((part, index) => (
        <p
          key={index}
          className={`tittle-line ${
            index === currentPartIndex ? "visible" : ""
          }`}
        >
          {part}
          {/* {part.split(/(?!$)/u).map((letter, i) => (
            <span key={i} className="letter">
              {letter}
            </span>
          ))} */}
        </p>
      ))}
    </div>
  );
};

export default Tittle;
