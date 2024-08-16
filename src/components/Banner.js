import React from "react";
import { Box, Typography } from "@mui/material";
import bannerImg from "../assets/bannerImg.jpg";

function Banner() {
  return (
    <Box
      sx={{
        height: "350px",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      {/* <Typography
        variant="h6"
        component="div"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          color: "black", // Text color
          padding: "10px 20px", // Padding around the text
          borderRadius: "5px", // Optional: Rounded corners for the background
        }}
      >
        What will you have today?
      </Typography> */}
    </Box>
  );
}

export default Banner;
