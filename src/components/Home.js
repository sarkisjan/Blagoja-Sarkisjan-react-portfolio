import React from "react";
import PortfolioPic from "../assets/images/portfolioPic.JPG";
import { Box, Typography } from "@mui/material";
import Tittle from "./Tittle";

const Home = () => {
  return (
    <section id="home">
      <Box className="homeBio">
        <img className="homePic" src={PortfolioPic} />
        <h1>Blagoja Sarkisjan</h1>
        <Tittle className="homeTittle" />
      </Box>
    </section>
  );
};

export default Home;
