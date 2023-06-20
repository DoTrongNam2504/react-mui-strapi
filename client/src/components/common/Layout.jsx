import  { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [openSidebar, setOpenSidebar] = useState(true);
  const userData = {
    name: "John Doe",
    email: "envkt@example.com",
    role: "Admin",
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
  }
  return (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      <Sidebar
        user = {userData }
        isNonMobile={isNonMobile}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        drawerWidth="250px"
        
      />
      <Box flexGrow={1}>
        <Navbar   user = {userData } openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Outlet  />
      </Box>
    </Box>
  );
};

export default Layout;
