import React, { useEffect, useState } from "react";
import { Box, Grid2 as Grid, Card, CardMedia, CardContent, Typography, Button, IconButton } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const KidsPageCards = () => {
  const [cards, setCards] = useState([]);
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const { user } = useUserContext();
  const navigate = useNavigate();

  // Fetch cards data on component mount
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/kidscards/getall");
        setCards(response.data);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
        alert("Error fetching cards!");
      }
    };
    fetchCards();
  }, []); // Run only once on component mount

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

      console.log("Payload being sent to Add to Cart:", cartItem);

      // Make a POST request to add the item to the cart
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
      <Typography variant="h4" align="center" sx={{ marginBottom: "20px" ,fontFamily: "sans-serif", fontWeight: "bold"}}>
        Kids Collection
      </Typography>
      <Grid container spacing={4}>
        {cards.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="500"
                image={`data:image/jpeg;base64,${item.image}`}
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

export default KidsPageCards;
