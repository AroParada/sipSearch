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


export default function NavBar({onClick}) {
  const { favorites } = useContext(FavoritesContext)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar
      style={{
        background: "linear-gradient(#000 0, #031621 64.2%, #06273a 100%)",
      }}
      position="static"
    >
      <Toolbar>
        <LiquorIcon fontSize="large" />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Sip Search
        </Typography>
        <AddRecipeForm />
        <div>
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
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
  );
}
