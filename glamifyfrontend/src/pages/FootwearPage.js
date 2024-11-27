import { Box } from "@mui/material";
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


            {/* Products Section */}
            <FootwearCards />

            {/* footer section */}
            <Footer />
        </Box>
    )
}

export default FootwearPage;