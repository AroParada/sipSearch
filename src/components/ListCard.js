import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";

export default function ListCard({ loadedRecipes }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {loadedRecipes.map((recipe) => (
        <li key={recipe.idDrink}>
          <ListItemButton alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={recipe.strDrinkThumb} />
            </ListItemAvatar>
            <ListItemText primary={recipe.strDrink} />
          </ListItemButton>
          <Divider variant="inset" component="li" />
        </li>
      ))}
    </List>
  );
}
