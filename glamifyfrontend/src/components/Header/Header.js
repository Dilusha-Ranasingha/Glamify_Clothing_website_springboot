import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Badge, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from "axios";

const Header = () => {

    const navigate = useNavigate();
    const { isLoggedIn , user} = useUserContext(); // Access login state by usercontext
    const [cartItemCount, setCartItemCount] = useState(0);

  // Fetch cart item count for logged-in user
  useEffect(() => {
    const fetchCartItemCount = async () => {
      if (isLoggedIn && user) {
        try {
          const response = await axios.get("http://localhost:8080/api/items/getitemsbyuser", {
            params: { email: user.email },
          });
          setCartItemCount(response.data.length); // Set the count to the number of items
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
    };

    fetchCartItemCount();
  }, [isLoggedIn, user]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>

      {/* Black Line with Text */}
      <Box sx={{ backgroundColor: "#000", color: "#fff", textAlign: "center", py: 1 }}>
        <Typography variant="body1">30 DAY RETURNED</Typography>
      </Box>
      
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>


        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: 70, height: 70, marginRight: "10px" }}
            onClick={() =>navigate("/")}
          />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "1.1rem", // Increase text size
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() =>navigate("/men")}
          >
            Mens
          </Button>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "1.1rem", // Increase text size
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() =>navigate("/women")}
          >
            Womens
          </Button>



          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "1.1rem", // Increase text size
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() =>navigate("/kids")}
          >
            Kids
          </Button>

          


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "1.1rem", // Increase text size
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() => navigate("/accessories")}
          >
            Accessories
          </Button>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "1.1rem", // Increase text size
              "&:hover": { color: "#1976d2" },
            }}
            onClick ={()=>navigate("/footwear")}
          >
            Footwear
          </Button>



          {/* Login or My Account checking */}
          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "1.1rem", // Increase text size
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() => (isLoggedIn ? navigate("/account") : navigate("/login"))}
          >
            {isLoggedIn ? "My Account" : "Login"}
          </Button>


          {/* Cart Button */}
          {isLoggedIn && (
            <IconButton
              sx={{
                color: "#000",
                "&:hover": { color: "#1976d2" },
              }}
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={cartItemCount} 
              sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#000", // Set badge background to black
                    color: "#fff", // Set badge text color to white
                  },
                }}>
                <LocalMallIcon />
              </Badge>
            </IconButton>
          )}



        </Box>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
