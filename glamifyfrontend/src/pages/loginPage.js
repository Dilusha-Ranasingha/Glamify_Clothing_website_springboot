import React, { useState } from "react";
import { Box, TextField, Typography, Button, Link } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useUserContext(); // Access setIsLoggedIn from context
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login logic
    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true); // Update login state
      navigate("/my-account"); // Redirect to My Account
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Main Login Section */}
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
        {/* Login Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          LOGIN
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "30px", color: "#555" }}>
          If you have an account with us, please log in.
        </Typography>

        {/* Login Form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Email Input */}
          <TextField
            label="Email address"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <Button
            variant="contained"
            onClick={handleLogin}
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
            Sign in
          </Button>
        </Box>

        {/* Additional Links */}
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="body2" sx={{ marginBottom: "5px" }}>
            Don’t have an account?{" "}
            <Link href="/register" sx={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}>
              Create an account
            </Link>
          </Typography>
          <Link href="/register" sx={{ textDecoration: "none", color: "#555" }}>
            Forgot your password?
          </Link>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LoginPage;