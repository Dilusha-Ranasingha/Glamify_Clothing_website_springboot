import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>


        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logo.png" // Replace with the path to your logo image
            alt="Logo"
            style={{ width: 50, height: 50, marginRight: "10px" }}
          />
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }} onClick={() =>navigate("/")} >
            Glamify
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
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
              "&:hover": { color: "#1976d2" },
            }}
          >
            Accessories
          </Button>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { color: "#1976d2" },
            }}
          >
            Footwear
          </Button>



          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() =>navigate("/login")}
          >
            Login
          </Button>


        </Box>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
