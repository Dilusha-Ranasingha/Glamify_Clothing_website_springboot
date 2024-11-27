import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

const Categories = () => {
  const navigate = useNavigate();

  // Categories data
  const categories = [
    {
      title: "Men",
      image: "/assets/CategoryImage1.jpg", // Replace with your image paths
      link: "/men",
    },
    {
      title: "Women",
      image: "/assets/CategoryImage2.jpeg",
      link: "/women",
    },
    {
      title: "Kids",
      image: "/assets/CategoryImage3.jpeg",
      link: "/kids",
    },
  ];

  return (
    <Box>
      <Typography variant="h5" align="center" sx={{ marginTop: "40px", fontFamily: "sans-serif", fontWeight: "bold" }}>
        Who Are You Shopping For?
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: 3,
                "&:hover": { boxShadow: 6 },
                transition: "0.3s",
              }}
              onClick={() => navigate(category.link)}
            >
              <CardMedia
                component="img"
                height="300"
                image={category.image}
                alt={category.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fff",
                }}
              >


                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {category.title}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#000",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  →
                </Button>


                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;