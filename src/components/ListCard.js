import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function ListCard({ loadedRecipes, onClick }) {
  return (
    <Paper
      sx={{
        width: 350,
        maxWidth: "100%",
        borderRadius: "12px",
        padding: 1.5,
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        border: "1px solid #000000;",
      }}
      square={false}
      elevation={5}
    >
      <List sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}>
        {loadedRecipes.map((recipe) => (
          <li key={recipe.idDrink}>
            <ListItemButton
              onClick={() => onClick(recipe.strDrink)}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar src={recipe.strDrinkThumb} />
              </ListItemAvatar>
              <ListItemText primary={recipe.strDrink} />
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </li>
        ))}
      </List>
    </Paper>
  );
}
