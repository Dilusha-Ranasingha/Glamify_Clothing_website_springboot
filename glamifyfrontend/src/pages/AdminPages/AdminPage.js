import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
import HeaderAdmin from "../../components/Header/HeaderAdmin";

const AdminPage = () => {
  const [cardData, setCardData] = useState({
    id: null,
    name: "",
    price: "",
    sizes: "",
    colors: "",
  });
  const [imageFile, setImageFile] = useState(null); // State to store image file
  const [cards, setCards] = useState([]); // State to store all cards
  const [isUpdating, setIsUpdating] = useState(false); // Track whether we're updating

  // Fetch all cards on page load
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/cards/getall");
        const updatedCards = response.data.map((card) => ({
          ...card,
          image: card.image,
        }));
        setCards(updatedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
        alert("Failed to fetch cards.");
      }
    };
    fetchCards();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  // Handle file input change for the image
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Add or update card based on `isUpdating` state
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "card",
        JSON.stringify({
          name: cardData.name,
          price: cardData.price,
          sizes: cardData.sizes.split(","),
          colors: cardData.colors.split(","),
        })
      );
      if (imageFile) formData.append("image", imageFile);

      if (isUpdating) {
        // Update existing card
        const updateResponse = await axios.put(
          `http://localhost:8080/api/cards/update/${cardData.id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        const updatedCard = {
          ...updateResponse.data,
          image: `data:image/jpeg;base64,${btoa(
            new Uint8Array(updateResponse.data.image).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`,
        };
        setCards((prevCards) =>
          prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
        );
        alert("Card updated successfully!");
      } else {
        // Add new card
        const addResponse = await axios.post("http://localhost:8080/api/cards/add", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const newCard = {
          ...addResponse.data,
          image: `data:image/jpeg;base64,${btoa(
            new Uint8Array(addResponse.data.image).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`,
        };
        setCards([...cards, newCard]);
        alert("Card added successfully!");
      }

      // Reset form
      setCardData({ id: null, name: "", price: "", sizes: "", colors: "" });
      setImageFile(null);
      setIsUpdating(false);
    } catch (error) {
      console.error("Error submitting card:", error);
      alert(isUpdating ? "Failed to update card." : "Failed to add card.");
    }
  };

  // Load card data into form for editing
  const handleEdit = (card) => {
    setCardData({
      id: card.id,
      name: card.name,
      price: card.price,
      sizes: card.sizes.join(","),
      colors: card.colors.join(","),
    });
    setImageFile(null); // Reset file input
    setIsUpdating(true);
  };

  // Delete a card
  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this card?");
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:8080/api/cards/delete/${id}`);
        setCards((prev) => prev.filter((card) => card.id !== id));
        alert("Card deleted successfully!");
      } catch (error) {
        console.error("Error deleting card:", error);
        alert("Failed to delete card.");
      }
    }
  };

  return (
    <Box>
      {/* Admin Header section */}
      <HeaderAdmin />

      <Box sx={{ padding: "20px" }}>
        {/* Add or Update Card Form */}
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Panel - New Araivals
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={cardData.name}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            value={cardData.price}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Sizes (comma-separated)"
            name="sizes"
            value={cardData.sizes}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Colors (comma-separated in HEX format)"
            name="colors"
            value={cardData.colors}
            onChange={handleInputChange}
            fullWidth
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={handleSubmit}
          >
            {isUpdating ? "Update Card" : "Add Card"}
          </Button>
        </Box>

        {/* Display Existing Cards */}
        <Typography variant="h5" sx={{ textAlign: "center", margin: "30px 0" }}>
          Existing Cards
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Image</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Price</strong></TableCell>
                <TableCell><strong>Sizes</strong></TableCell>
                <TableCell><strong>Colors</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                  {cards.map((card) => (
                      <TableRow key={card.id}>
                      <TableCell>
                          {card.image ? (
                          <img
                              src={`data:image/jpeg;base64,${card.image}`} // Properly concatenating Base64 prefix
                              alt={card.name}
                              style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          />
                          ) : (
                          <span>No Image</span>
                          )}
                      </TableCell>
                      <TableCell>{card.name}</TableCell>
                      <TableCell>{card.price}</TableCell>
                      <TableCell>{card.sizes.join(", ")}</TableCell>
                      <TableCell>
                          {card.colors.map((color, index) => (
                          <span
                              key={index}
                              style={{
                              display: "inline-block",
                              width: "15px",
                              height: "15px",
                              backgroundColor: color,
                              border: "1px solid #ccc",
                              marginRight: "5px",
                              }}
                          ></span>
                          ))}
                      </TableCell>
                      <TableCell>
                          <Button
                          variant="outlined"
                          sx={{ marginRight: "10px" }}
                          onClick={() => handleEdit(card)}
                          >
                          Edit
                          </Button>
                          <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDelete(card.id)}
                          >
                          Delete
                          </Button>
                      </TableCell>
                      </TableRow>
                  ))}
              </TableBody>



          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AdminPage;