import React, { useState } from "react";
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
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AddToCartPage = () => {
  const navigate = useNavigate();

  // Initial cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MVT Compression Tee",
      color: "MVT COMP TEE 02",
      size: "XL",
      price: 3800,
      quantity: 1,
      image: "/assets/compression-tee.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      name: "Weeping Venom Tee",
      color: "W VENOM TEE 02",
      size: "XL",
      price: 5000,
      quantity: 1,
      image: "/assets/venom-tee.jpg", // Replace with your actual image path
    },
  ]);

  const [notes, setNotes] = useState(""); // For additional notes
  const [termsChecked, setTermsChecked] = useState(false); // Terms and conditions checkbox

  // Update the quantity of an item
  const updateQuantity = (id, increment) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + increment), // Ensure quantity is at least 1
          }
        : item
    );
    setCartItems(updatedCart);
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
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
        {/*header Section*/}
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
                        src={item.image}
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


        {/*Footer Section*/}
        <Footer />


    </Box>
  );
};

export default AddToCartPage;