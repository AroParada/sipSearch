// button to go to the search page
import React from "react";
import { Link } from "react-router-dom";
import HomeNavBar from "../components/HomeNavBar";
import Slider from "../components/Slider";
import { Grid, Box, Typography } from "@mui/material";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <HomeNavBar />
      <Box padding="40px" textAlign="center">
        <Typography gutterBottom variant="h5" component="div">
          What will you have today?
        </Typography>
        <Typography>
          Simple and fast drink search application for anyone
        </Typography>
        <button>
          <Link to="/"> Start</Link>
        </button>
      </Box>
      <Slider />
      <Box padding="40px">
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Speed Search"
              description="sadfa as asdf as a sdfa as fasd a asdf a a sa "
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Save Favorites"
              description="sadfa as asdf as a sdfa as fasd a asdf a a sa "
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Add own Recipes"
              description="sadfa as asdf as a sdfa as fasd a asdf a a sa "
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Change Servings"
              description="sadfa as asdf as a sdfa as fasd a asdf a a sa "
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
