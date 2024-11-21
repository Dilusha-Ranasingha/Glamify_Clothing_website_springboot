import React, { useState } from "react";
import { Box, TextField, Typography, Button, Link, Grid } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Main Register Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Register Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          CREATE AN ACCOUNT
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "30px", color: "#555" }}>
          Enter your information below to proceed. If you already have an account, please log in instead.
        </Typography>

        {/* Register Form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={6}>
              <TextField
                label="First name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={6}>
              <TextField
                label="Last name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
          </Grid>

          {/* Email Address */}
          <TextField
            label="Email address"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Register Button */}
          <Button
            variant="contained"
            onClick={handleRegister}
            fullWidth
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            CREATE AN ACCOUNT
          </Button>
        </Box>

        {/* Additional Links */}
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link href="/login" sx={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default RegisterPage;