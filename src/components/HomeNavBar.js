import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import "../App.css";
import logo from "../assets/Screenshot (19).png";

export default function HomeNavBar() {
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
          <Box
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
                maxWidth: "17%", // Ensures the image scales properly
                height: "auto", // Maintains aspect ratio
                marginRight: "16px", // Equivalent to mr: 2 in Material-UI spacing
              }}
            />
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, alignItems: "right" }}
          ></Box>
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
                  maxWidth: "50%", // Ensures the image scales properly
                  height: "auto", // Maintains aspect ratio
                  textAlign: "center",
                }}
              />
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
