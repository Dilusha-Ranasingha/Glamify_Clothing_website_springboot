import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px 20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Products Section */}
        <Box>
          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            PRODUCTS
          </Typography>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Shoes
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Clothing
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block" }}>
            Accessories
          </Link>
        </Box>

        {/* Sports Section */}
        <Box>
          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            SPORTS
          </Typography>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Running
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Basketball
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Football
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Yoga
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block" }}>
            Outdoor
          </Link>
        </Box>

        {/* Category Section */}
        <Box>
          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            CATEGORY
          </Typography>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Men
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Women
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block" }}>
            Kids
          </Link>
        </Box>

        {/* Company Info Section */}
        <Box>
          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            COMPANY INFO
          </Typography>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            About Us
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Careers
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block" }}>
            Press
          </Link>
        </Box>

        {/* Support Section */}
        <Box>
          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            SUPPORT
          </Typography>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Help
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block", marginBottom: "5px" }}>
            Shipping
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", display: "block" }}>
            Returns
          </Link>
        </Box>

        {/* Social Media Section */}
        <Box>

          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            FOLLOW US
          </Typography>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <YouTube />
            </IconButton>
          </Box>

        </Box>

      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          borderTop: "1px solid #333",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "14px",
        }}
        >
        <Typography>
          <Link href="#" underline="none" sx={{ color: "#fff", marginRight: "10px" }}>
            Sri Lanka
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", marginRight: "10px" }}>
            Cookie Settings
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff", marginRight: "10px" }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="none" sx={{ color: "#fff" }}>
            Terms and Conditions
          </Link>
        </Typography>
      </Box>


    </Box>
  );
};

export default Footer;
