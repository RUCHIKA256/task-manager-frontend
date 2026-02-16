import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Divider
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 250;

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box sx={{ p: 2 }}>
      {/* Logo / Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 2,
          color: "#1976d2",
          textAlign: "center",
        }}
      >
        TaskPro 🚀
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Sidebar Menu */}
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            <DashboardIcon sx={{ mr: 2, color: "#1976d2" }} />
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/tasks"
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            <TaskAltIcon sx={{ mr: 2, color: "#1976d2" }} />
            <ListItemText primary="Tasks" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider sx={{ mt: 2 }} />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2, textAlign: "center" }}
      >
        Made with ❤️ using React + Django
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          background: "white",
          color: "black",
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            {/* Mobile menu icon */}
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" fontWeight="bold">
              Smart Task Manager
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {new Date().toDateString()}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #e0e0e0",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Sidebar Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          mt: 8,
          backgroundColor: "#f7f9fc",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
