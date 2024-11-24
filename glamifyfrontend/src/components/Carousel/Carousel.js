import React from "react";
import Slider from "react-slick"; // Import the react-slick library
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css"; // Slick carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme styles

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = [
    "/assets/banner1.jpg", // Replace with your image paths
    "/assets/banner2.jpg",
    "/assets/banner3.jpg",
  ];

  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Slider {...carouselSettings}>
        {carouselImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px", // Carousel height
              backgroundColor: "#f5f5f5", // Optional background
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain", // Ensures images fit well
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;