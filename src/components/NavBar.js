import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Popover,
  ListItemButton,
  ListItemText,
  Divider,
  List,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";
import logo from "../assets/Screenshot (19).png";
import { Link } from "react-router-dom";

import AddRecipeForm from "./AddRecipeForm";
import { FavoritesContext } from "../store/favorites";

const drawerWidth = 220;
const customWindowFunction = () => window;

export default function NavBar({ onClick }) {
  const { window } = customWindowFunction;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { favorites } = useContext(FavoritesContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <AppBar
        sx={{
          position: "sticky",
          background: "",
          boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        }}
        className="navbar"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
              alignItems: "center",
            }}
          >
            <img
              alt="logo"
              src={logo}
              style={{
                maxWidth: "20%", // Ensures the image scales properly
                height: "auto", // Maintains aspect ratio
                marginRight: "16px", // Equivalent to mr: 2 in Material-UI spacing
              }}
            />
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, alignItems: "right" }}
          >
            <AddRecipeForm />
          </Box>
          <div>
            <Box
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                alt="logo"
                src={logo}
                style={{
                  maxWidth: "55%", // Ensures the image scales properly
                  height: "auto", // Maintains aspect ratio
                  marginRight: "50px", // Equivalent to mr: 2 in Material-UI spacing
                  textAlign: "center",
                }}
              />
            </Box>
            <Button
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              aria-describedby={id}
              variant="h5"
              onClick={handleClick}
            >
              Bookmarks
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {favorites.length > 0 ? (
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  {favorites.map((favorite) => (
                    <li sx={{ p: 2 }} key={favorite}>
                      <ListItemButton
                        onClick={(e) => onClick(e, favorite)}
                        alignItems="flex-start"
                      >
                        <ListItemText primary={favorite} />
                      </ListItemButton>
                      <Divider variant="inset" component="li" />
                    </li>
                  ))}
                </List>
              ) : (
                <Paper>
                  <Typography sx={{ p: 2 }}>no bookmarks for now</Typography>
                </Paper>
              )}
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              SHAKE&STIR
            </Typography>
            <Divider />
            <Box onClick={handleFormClick}>
              <AddRecipeForm handleDrawerToggle={handleDrawerToggle} />
            </Box>
          </Box>
          <Button aria-describedby={id} variant="h5" onClick={handleClick}>
            Bookmarks
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {favorites.length > 0 ? (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {favorites.map((favorite) => (
                  <li sx={{ p: 2 }} key={favorite}>
                    <ListItemButton
                      onClick={(e) => {
                        onClick(e, favorite);
                        onClick(e, favorite);
                        handleDrawerToggle();
                        handleClose();
                      }}
                      alignItems="flex-start"
                    >
                      <ListItemText primary={favorite} />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                  </li>
                ))}
              </List>
            ) : (
              <Paper>
                <Typography sx={{ p: 2 }}>no bookmarks for now</Typography>
              </Paper>
            )}
          </Popover>
        </Drawer>
      </nav>
    </>
  );
}
