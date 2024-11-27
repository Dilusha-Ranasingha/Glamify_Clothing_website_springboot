import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AddToCartPage = () => {
  const navigate = useNavigate();
  const { user } = useUserContext(); // Get logged-in user's details
  const [cartItems, setCartItems] = useState([]); // Cart items state
  const [notes, setNotes] = useState(""); // For additional notes
  const [termsChecked, setTermsChecked] = useState(false); // Terms and conditions checkbox

  // Fetch cart items for the logged-in user
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/items/getitemsbyuser", {
          params: { email: user.email },
        });
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        alert("Failed to fetch cart items.");
      }
    };

    if (user && user.email) fetchCartItems();
  }, [user]);

  // Update the quantity of an item in the cart
  const updateQuantity = async (id, increment) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = Math.max(1, item.quantity + increment);
    try {
      await axios.put("http://localhost:8080/api/items/updatequantity", null, {
        params: { id, quantity: newQuantity },
      });
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert("Failed to update quantity.");
    }
  };

  // Remove an item from the cart
  const removeItem = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this Item?");
      if (confirmation) {
        try {
          await axios.delete("http://localhost:8080/api/items/deleteitem", {
            params: { id },
          });
          setCartItems((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
          console.error("Error deleting item:", error);
          alert("Failed to delete item.");
        }
      }
  };

  // Calculate the total price for a single row
  const calculateRowTotal = (item) => item.price * item.quantity;

  // Calculate the total checkout price
  const calculateCheckoutTotal = () =>
    cartItems.reduce((total, item) => total + calculateRowTotal(item), 0);

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

      <Box sx={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Page Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Your Cart
        </Typography>

        {/* Table Section */}
        <TableContainer component={Paper} sx={{ marginBottom: "40px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Product</strong></TableCell>
                <TableCell></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell><strong>Total</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  {/* Product Image */}
                  <TableCell>
                  <Box
                    component="img"
                    src={`data:image/jpeg;base64,${decodeURIComponent(escape(window.atob(item.image)))}`}
                    alt={item.name}
                    sx={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  </TableCell>

                  {/* Product Details */}
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Color:</strong> {item.color}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Size:</strong> {item.size}
                    </Typography>
                  </TableCell>

                  {/* Quantity Controls */}
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <IconButton
                        onClick={() => updateQuantity(item.id, -1)}
                        sx={{ border: "1px solid #ccc" }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        onClick={() => updateQuantity(item.id, 1)}
                        sx={{ border: "1px solid #ccc" }}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => removeItem(item.id)}
                        sx={{ color: "red" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>

                  {/* Row Total */}
                  <TableCell>
                    <Typography>
                      Rs {calculateRowTotal(item).toLocaleString()}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Continue Shopping Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: "#000",
              textDecoration: "underline",
              "&:hover": { textDecoration: "none" },
            }}
          >
            Continue Shopping
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <TextField
              placeholder="Add notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              sx={{ width: "300px" }}
            />
          </Box>
        </Box>

        {/* Terms and Conditions */}
        <FormControlLabel
          control={
            <Checkbox
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
            />
          }
          label={
            <Typography>
              I agree with the{" "}
              <Button
                component="a"
                href="/terms"
                sx={{
                  textDecoration: "underline",
                  color: "#000",
                  padding: 0,
                  "&:hover": { textDecoration: "none" },
                }}
              >
                terms and conditions
              </Button>
            </Typography>
          }
        />

        {/* Checkout Button */}
        <Button
          variant="contained"
          fullWidth
          disabled={!termsChecked || cartItems.length === 0}
          sx={{
            marginTop: "20px",
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "15px",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={() => alert(`Checkout Total: Rs ${calculateCheckoutTotal().toLocaleString()}`)}
        >
          Checkout • Rs {calculateCheckoutTotal().toLocaleString()}
        </Button>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default AddToCartPage;