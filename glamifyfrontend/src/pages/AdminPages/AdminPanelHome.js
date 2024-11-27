import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto"; // Auto-register Chart.js components

const AdminPanelHome = () => {
  const [categoryData, setCategoryData] = useState(null); // Data for pie chart
  const [cartData, setCartData] = useState(null); // Data for bar chart
  const [loading, setLoading] = useState(true);

  // Fetch category and cart data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total number of items for each category
        const [
          cardsResponse,
          menCardsResponse,
          womenCardsResponse,
          footwearCardsResponse,
          kidsCardsResponse,
        ] = await Promise.all([
          axios.get("http://localhost:8080/api/cards/getall"),
          axios.get("http://localhost:8080/api/mencards/getall"),
          axios.get("http://localhost:8080/api/womencards/getall"),
          axios.get("http://localhost:8080/api/footwearcards/getall"),
          axios.get("http://localhost:8080/api/kidscards/getall"),
        ]);

        // Fetch cart data grouped by user
        const cartResponse = await axios.get("http://localhost:8080/api/items/getitems");
        const cartUsers = {};
        cartResponse.data.forEach((item) => {
          if (cartUsers[item.userEmail]) {
            cartUsers[item.userEmail] += 1;
          } else {
            cartUsers[item.userEmail] = 1;
          }
        });

        // Set category data for pie chart
        setCategoryData({
          cards: cardsResponse.data.length,
          menCards: menCardsResponse.data.length,
          womenCards: womenCardsResponse.data.length,
          footwearCards: footwearCardsResponse.data.length,
          kidsCards: kidsCardsResponse.data.length,
        });

        // Set cart data for bar chart
        setCartData(cartUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Prepare data for Pie Chart
  const pieData = {
    labels: ["New Araivel Cards", "Men's Cards", "Women's Cards", "Footwear Cards", "Kids Cards"],
    datasets: [
      {
        data: categoryData
          ? [
              categoryData.cards,
              categoryData.menCards,
              categoryData.womenCards,
              categoryData.footwearCards,
              categoryData.kidsCards,
            ]
          : [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966ff"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966ff"],
      },
    ],
  };

  // Prepare data for Bar Graph
  const barData = {
    labels: cartData ? Object.keys(cartData) : [],
    datasets: [
      {
        label: "Number of Items in Cart",
        data: cartData ? Object.values(cartData) : [],
        backgroundColor: "#3f51b5",
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
      >
        Admin Panel - Overview
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {/* Pie Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: "20px" }}>
              <Typography variant="h6" sx={{ marginBottom: "20px", textAlign: "center" }}>
                Items Distribution in Categories
              </Typography>
              <Pie data={pieData} />
            </Paper>
          </Grid>

          

          {/* Bar Graph */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: "20px" }}>
              <Typography variant="h6" sx={{ marginBottom: "20px", textAlign: "center" }}>
                Items Added to Cart by Users
              </Typography>
              <Bar data={barData} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default AdminPanelHome;
