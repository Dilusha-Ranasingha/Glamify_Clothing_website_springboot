import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MensPageCards from "../components/Cards/MensPageCards";

const MensPage = () => {
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
            <MensPageCards />

            {/* footer section */}
            <Footer />
        </Box>
    )
}

export default MensPage;