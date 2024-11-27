import { Box, Typography } from "@mui/material";
import HeaderAdmin from "../../components/Header/HeaderAdmin";

const AdminHomePage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // Full viewport height
            }}
        >
            {/* Admin Header section */}
            <HeaderAdmin />

            {/* Welcome Section */}
            <Typography variant="h4" align="center" sx={{ marginTop: "20px" }}>
                Admin Home Page
            </Typography>

            
        </Box>
    )
}

export default AdminHomePage;