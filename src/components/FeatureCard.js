import React from "react";
import { Paper, CardContent, Typography } from "@mui/material";

const FeatureCard = ({
  title = "Feature",
  description = "Description:",
  padding = 1.5,
  width = 300,
  maxWidth = "100%",
  borderRadius = "12px",
  boxShadow = "0px 14px 80px rgba(34, 35, 58, 0.2)",
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
        boxShadow,
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
