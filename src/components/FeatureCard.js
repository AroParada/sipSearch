import React from "react";
import { Paper, CardContent, Typography } from "@mui/material";

const FeatureCard = ({
  title = "Feature",
  description = "Description:",
  padding = "1rem", // rem for better scalability
  width = "90%", // adjusted to use full width within a container
  maxWidth = "300px", // set a reasonable max width for different screens
  borderRadius = "12px",
  border = "1px solid #000000",
  elevation = 5,
}) => {
  return (
    <Paper
      sx={{
        padding,
        width,
        maxWidth,
        borderRadius,
        border,
      }}
      elevation={elevation}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography paragraph>{description}</Typography>
      </CardContent>
    </Paper>
  );
};

export default FeatureCard;
