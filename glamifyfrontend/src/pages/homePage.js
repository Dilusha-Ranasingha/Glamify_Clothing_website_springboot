import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Typography, Box } from "@mui/material";
import Categories from "../components/Categories/Categories";
import Carousel from "../components/Carousel/Carousel";
import HomePageCards from "../components/Cards/HomePageCards";

const HomePage = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full viewport height
      }}
    >


     {/*header Section*/}
      <Header />



      <Box
        component="main"
        sx={{
          flex: 1, // Pushes footer to the bottom
          padding: "20px",
        }}
      >

        {/* Carousel Section */}
        <Carousel />


        {/* Welcome Section */}
        <Typography variant="h4" align="center" sx={{ marginTop: "20px" }}>
          Welcome to Glamify
        </Typography>


        {/* Categories Section */}
        <Categories />

        {/* New collection Section */}
        <HomePageCards />

      </Box>

      {/*Footer Section*/}
      <Footer />



    </Box>
  );
};

export default HomePage;