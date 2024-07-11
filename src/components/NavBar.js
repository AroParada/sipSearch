import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Sip Search
        </Typography>
        <Button color="inherit">Add Recipe</Button>
        <Button color="inherit">Bookmarks</Button>
      </Toolbar>
    </AppBar>
  );
}
