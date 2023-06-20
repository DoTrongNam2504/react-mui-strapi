import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import {
  ChevronRightOutlined,
  ShoppingCartOutlined,
  ReceiptLongOutlined
 
} from "@mui/icons-material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import  { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./Flexbetween";

const navItems = [
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },

  {
    text: "Category",
    icon: <ReceiptLongOutlined />,
  },

  
];

const Sidebar = ({
  user,
  drawerWidth,
  openSidebar,
  setOpenSidebar,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {openSidebar && (
        <Drawer
          variant="persistent"
          anchor="left"
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box
              m={
                isNonMobile
                  ? "1.5rem 2rem 2rem 3rem"
                  : "1.5rem 1rem 2rem 1.5rem"
              }
            >
              <FlexBetween color={theme.palette.secondary.alt}>
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    E-COMMERCE
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
                    <MenuIcon />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <>
                    <Divider/>
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem " }}>
                      {text}
                    </Typography>
                    </>
                    
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem button key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                    
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.primary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="fixed" bottom="0" backgroundColor= {theme.palette.background.alt} >
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 1rem 2rem"  >
              <Box
                component="img"
                src={user.avatar}
                alt="Profile Image"
                width="40px"
                height="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem "
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>

                <Typography
                  fontSize="0.8rem "
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.role}
                </Typography>
              </Box>
              <SettingsOutlinedIcon
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
