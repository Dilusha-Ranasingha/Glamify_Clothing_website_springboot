import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {

    const navigate = useNavigate();


  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>


        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: 70, height: 70, marginRight: "10px" }}
            onClick={() =>navigate("/adminhome")}
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
            onClick={() =>navigate("/admin")}
          >
            New Arrivals
          </Button>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() =>navigate("/adminmen")}
          >
            Mens Section
          </Button>



          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() =>navigate("/adminwomen")}
          >
            Women Section
          </Button>

          


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { color: "#1976d2" },
            }}
            onClick={() => navigate("/adminkids")}
          >
            kids Section
          </Button>


          <Button
            sx={{
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { color: "#1976d2" },
            }}
            onClick ={()=>navigate("/adminfootwear")}
          >
            Footwear Section
          </Button>



        </Box>


      </Toolbar>
    </AppBar>
  );
};

export default HeaderAdmin;
