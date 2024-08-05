import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Popover } from "@mui/material";
import AddRecipeForm from "./AddRecipeForm";
import LiquorIcon from "@mui/icons-material/Liquor";
import { FavoritesContext } from "../store/favorites";
import { useContext } from "react";
import { ListItemButton } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

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

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        style={{
          background: "linear-gradient(#000 0, #031621 64.2%, #06273a 100%)",
        }}
        position="static"
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Bevvy
          </Typography>
          {/* <LiquorIcon fontSize="large" /> */}
          <Box sx={{ display: { xs: "none", sm: "block" }, alignItems:'right' }}>
            <AddRecipeForm />
          </Box>
          <div>
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
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {favorites.map((favorite) => (
                  <li key={favorite}>
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
              Bevvy
            </Typography>
            <AddRecipeForm />
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
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {favorites.map((favorite) => (
                <li key={favorite}>
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
          </Popover>
        </Drawer>
      </nav>
    </Box>
  );
}
