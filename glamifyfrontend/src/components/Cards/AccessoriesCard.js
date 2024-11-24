import React, { useState } from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, IconButton } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const AccessoriesCard = () => {
  const mensCollection = [
    {id: 1,
      name: "MID CALF SOCK - 3 Pack",
      price: "1780",
      image: "/assets/socks.jpg", // Replace with actual image path
      sizes: ["FREE SIZE"],
      colors: ["#000000", "#ffffff"],
    },
    {
      id: 2,
      name: "Andor Cargo Pant",
      price: "4600",
      image: "/assets/cargo1.jpg", // Replace with actual image path
      sizes: ["M", "L", "XL", "2XL"],
      colors: ["#000080", "#d2b48c"],
    },
    {
      id: 3,
      name: "LXC Tee",
      price: "3000",
      image: "/assets/tee.jpg", // Replace with actual image path
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: ["#000000", "#ffffff"],
    },
    {
      id: 4,
      name: "Augustus Cuff Cargo",
      price: "4600",
      image: "/assets/cargo2.jpg", // Replace with actual image path
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: ["#000080", "#d2b48c"],
    },
    {
        id: 5,
        name: "Augustus Cuff Cargo",
        price: "4700",
        image: "/assets/cargo2.jpg", // Replace with actual image path
        sizes: ["S", "M", "L", "XL", "2XL"],
        colors: ["#000080", "#d2b48c"],
      },
      {
        id: 6,
        name: "MID CALF SOCK - 3 Pack",
        price: "1700",
        image: "/assets/socks.jpg", // Replace with actual image path
        sizes: ["FREE SIZE"],
        colors: ["#000000", "#ffffff"],
      },
  ];

  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const { user } = useUserContext();
  const navigate = useNavigate();

  const handleAddToCart = async (item) => {
    if (!user) {
      alert("Please log in to add items to the cart!");
      navigate("/login");
      return;
    }

    try {
      const cartItem = {
        name: item.name,
        color: selectedColor[item.id],
        size: selectedSize[item.id],
        price: item.price,
        quantity: 1,
        image: item.image,
        userEmail: user.email,
      };
      await axios.post("http://localhost:8080/api/items/additem", cartItem);
      alert("Item added to cart!");
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      alert("Error adding item to cart!");
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
        New Collection
      </Typography>
      <Grid container spacing={4}>
        {mensCollection.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Rs {item.price}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                  Colors:
                </Typography>
                <Box sx={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                  {item.colors.map((color, index) => (
                    <IconButton
                      key={index}
                      onClick={() => setSelectedColor({ ...selectedColor, [item.id]: color })}
                      sx={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: color,
                        border: selectedColor[item.id] === color ? "2px solid #000" : "1px solid #ccc",
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                  Sizes:
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    value={selectedSize[item.id] || ""}
                    onChange={(e) => setSelectedSize({ ...selectedSize, [item.id]: e.target.value })}
                  >
                    {item.sizes.map((size, index) => (
                      <FormControlLabel
                        key={index}
                        value={size}
                        control={<Radio />}
                        label={size}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleAddToCart(item)}
                  disabled={!selectedSize[item.id] || !selectedColor[item.id]}
                  sx={{ marginTop: "10px", backgroundColor: "#000", color: "#fff" }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AccessoriesCard;