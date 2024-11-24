import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePage = () => {
  const { user, setUser } = useUserContext(); // Access and update user details
  const [formData, setFormData] = useState({ ...user }); // Initialize form with current user data
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      // Make an API call to update the user details
      const response = await axios.put(`http://localhost:8080/api/user/updateuser`, formData);

      // Update user details in context after successful API call
      setUser(response.data);
      alert("Account updated successfully!");

      // Navigate back to MyAccountPage
      navigate("/account");
    } catch (error) {
      console.error("Error updating account:", error);
      alert("Failed to update account. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Update Account Details
        </Typography>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          sx={{ maxWidth: "400px" }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          sx={{ maxWidth: "400px" }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{ maxWidth: "400px" }}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          sx={{ maxWidth: "400px" }}
        />
        <Button
          variant="contained"
          onClick={handleUpdate}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Update My Data
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default UpdatePage;