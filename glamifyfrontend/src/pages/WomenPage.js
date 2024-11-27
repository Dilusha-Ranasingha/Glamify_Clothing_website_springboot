import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WomensPageCards from "../components/Cards/WomenPageCards";

const WomenPage = () => {
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

            

            {/* Products Section */}
            <WomensPageCards />

            {/* footer section */}
            <Footer />
        </Box>
    )
}

export default WomenPage;