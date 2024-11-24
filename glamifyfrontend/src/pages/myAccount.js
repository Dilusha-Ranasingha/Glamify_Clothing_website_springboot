import { Box, Typography, Button, Divider } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useState, useEffect } from "react";

const MyAccountPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useUserContext(); // Access context to handle login state and user data
  const [userDetails, setUserDetails] = useState(null);

  // Simulating fetching user data
  useEffect(() => {
    // Replace this with an actual API call to fetch user data
    const fetchUserData = async () => {
      const sampleData = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "********", // Masked for security
      };
      setUserDetails(sampleData);
    };

    fetchUserData();
  }, []);

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false); // Set the login state to false
    setUser(null); // Clear user data from context
    navigate("/login"); // Navigate to the login page
  };

  // Update account handler
  const handleUpdateAccount = () => {
    navigate("/update");
  };

  // Delete account handler
  const handleDeleteAccount = async () => {
    const confirmation = window.confirm("Are you sure you want to delete your account?");

    if (confirmation) {
      // Simulate user account deletion
      setIsLoggedIn(false); // Set the login state to false
      setUser(null); // Clear user data from context

      // Placeholder for backend API call to delete the user from the database
      // Example: await deleteUserFromDatabase(user.id);

      navigate("/"); // Navigate to the home page
    }
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
            {userDetails ? (
              <>
                <Typography>
                  <strong>First Name:</strong> {userDetails.firstName}
                </Typography>
                <Typography>
                  <strong>Last Name:</strong> {userDetails.lastName}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {userDetails.email}
                </Typography>
                <Typography>
                  <strong>Password:</strong> {userDetails.password}
                </Typography>
              </>
            ) : (
              <Typography>Loading user details...</Typography>
            )}

            {/* Update and Delete Buttons */}
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                onClick={handleUpdateAccount}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Update Account
              </Button>

              <Button
                onClick={handleDeleteAccount}
                sx={{
                  backgroundColor: "#d32f2f",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#b71c1c",
                  },
                }}
              >
                Delete Account
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default MyAccountPage;
