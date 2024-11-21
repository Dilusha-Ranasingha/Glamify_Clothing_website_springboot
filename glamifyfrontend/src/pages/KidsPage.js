import { Box, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import KidsPageCards from "../components/Cards/KidsPageCards";

const KidsPage = () => {
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
                Shop Kids
            </Typography>

            {/* Products Section */}
            <KidsPageCards />

            {/* footer section */}
            <Footer />
        </Box>
    )
}

export default KidsPage;