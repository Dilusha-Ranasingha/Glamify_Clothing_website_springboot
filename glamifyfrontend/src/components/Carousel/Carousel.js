import React from "react";
import Slider from "react-slick"; // Import the react-slick library
import { Box, Typography } from "@mui/material";
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
    { src: "/assets/text1.jpeg", text: "LIFEWEAR COLLECTION & BOOST YOUR STYLE SENSE" }, // Replace with your image paths and texts
    { src: "/assets/text2.webp", text: "FASHION WITH GLAMIFY" },
    { src: "/assets/banner3.jpg", text: "The Biggest Savings of the Year Are Here Get Up to 70% OFF" },
  ];

  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Slider {...carouselSettings}>
        {carouselImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px", // Carousel height
              backgroundColor: "#f5f5f5", // Optional background
            }}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures images fully cover the area
                filter: "brightness(50%)", // Darkens the image
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                color: "#fff",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "bold", // Makes the text bold
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds a shadow to the text
                padding: "10px 20px", // Adds padding around the text
              }}
            >
              {image.text}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;