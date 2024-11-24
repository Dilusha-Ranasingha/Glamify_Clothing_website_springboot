import { Box, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FootwearCards from "../components/Cards/FootwearCards";

const FootwearPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // Full viewport height
            }}
        >
            {/* Header section */}
            <Header />

            {/* Welcome Section */}
            <Typography variant="h4" align="center" sx={{ marginTop: "20px" }}>
                Shop Footwear
            </Typography>

            {/* Products Section */}
            <FootwearCards />

            {/* footer section */}
            <Footer />
        </Box>
    )
}

export default FootwearPage;