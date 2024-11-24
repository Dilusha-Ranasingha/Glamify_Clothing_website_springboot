import React from "react";
import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Header = () => {

    const navigate = useNavigate();
    const { isLoggedIn } = useUserContext(); // Access login state by usercontext

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
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
            onClick={() => navigate("/accessories")}
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
              <LocalMallIcon />
            </IconButton>
          )}



        </Box>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
