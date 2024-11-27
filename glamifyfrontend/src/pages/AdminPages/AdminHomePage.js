import { Box } from "@mui/material";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AdminPanelHome from "./AdminPanelHome";

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

            <AdminPanelHome />

           

            
        </Box>
    )
}

export default AdminHomePage;