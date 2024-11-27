import { Box } from "@mui/material";
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

            

            {/* Products Section */}
            <KidsPageCards />

            {/* footer section */}
            <Footer />
        </Box>
    )
}

export default KidsPage;