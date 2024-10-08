// import React from "react";
import { useState, useEffect, useRef } from "react";

export function useReveal() {
  const [reveal, setReveal] = useState(false);
  const ref = useRef();

  // useEffect hook that runs when the component mounts and cleans up when it unmounts
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Select appear elements with the class 'appear-section'
      //   const appear = document.querySelector(".appear-section");

      // Get the height of the viewport
      const windowHeight = window.innerHeight;

      // Get the distance from the top of the viewport to the top of the current 'appear-section' element
      //   const revealTop = appear.getBoundingClientRect().top;

      const revealTop = ref.getBoundingClientRect().top;

      // The point at which the reveal effect should trigger (150px before the element is fully in view)
      const revealPoint = 250;

      // Check if the element has scrolled into view (below the reveal point)
      if (revealTop < windowHeight - revealPoint) {
        //setReveal(true) to make the element visible with animation
        setReveal(true);
      } else {
        // setReveal(false) to hide the element if it goes out of view
        setReveal(false);
      }
    };

    // Add the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount and cleans up on unmount

  return [ref, reveal];
}
