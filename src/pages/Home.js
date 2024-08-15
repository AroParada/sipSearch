// button to go to the search page
import React from "react";
import { Link } from "react-router-dom";
import HomeNavBar from "../components/HomeNavBar";
import Slider from "../components/Slider";
import { Button, Grid, Box, Typography } from "@mui/material";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <HomeNavBar />
      <Box padding="40px" textAlign="center">
        <Typography gutterBottom variant="h4" component="div">
          What will you have today?
        </Typography>
        <Typography>Simple and fast cocktail guide for anyone</Typography>
        <Button
          component={Link}
          to="/Search"
          variant="contained"
          color="primary"
        >
          Start
        </Button>
      </Box>
      <Slider />
      <Box padding="40px" textAlign="center">
        <Typography variant="h4" component="div">
          Features
        </Typography>
      </Box>
      <Box padding="40px">
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Speedy Search"
              description="Fast search results without having to scroll through essays "
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Save Favorites"
              description="Bookmark your favorite or new recipes to make later"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Add own Recipes"
              description="Save your one of a kind recipes to the local storage"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FeatureCard
              title="Change Servings"
              description="Adjust serving amounts to get exact measurements for more guest"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
