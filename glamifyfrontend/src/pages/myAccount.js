import { Box, Typography, Button, Divider } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const MyAccountPage = () => {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full viewport height
      }}
    >
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Box
        component="main"
        sx={{
          flex: 1, // Pushes footer to the bottom
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, maxWidth: "300px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            My Account
          </Typography>
          <Button
            onClick={handleLogout}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "transparent",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              padding: "10px 20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <span style={{ fontSize: "20px" }}>→</span> Log out
          </Button>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
            Account Details
          </Typography>
          <Divider sx={{ marginBottom: "20px" }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography>
                <strong>First Name:</strong> {}
              </Typography>
              <Typography>
                <strong>Last Name:</strong> {}
              </Typography>
              <Typography>
                <strong>Email:</strong> {}
              </Typography>
              <Typography>
                <strong>Phone:</strong> {}
              </Typography>
            </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default MyAccountPage;
