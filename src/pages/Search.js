import { useEffect, useState, useRef } from "react";
import { Container, Grid, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import swal from "sweetalert";

import "../App.css";
import ListCard from "../components/ListCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { Box } from "@mui/material";

function Search() {
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [searchDrink, setSearchDrink] = useState("old");
  const [clickedDrink, setClickedDrink] = useState([{}]);

  const drinkRef = useRef();
  // SearchBar search function
  function handleSearchDrink(event) {
    event.preventDefault();

    const enteredDrink = drinkRef.current.value;
    setSearchDrink(enteredDrink);
  }
  // favorites search function for rendering drinks
  function handleSearchFavDrink(e, name) {
    e.preventDefault();

    setSearchDrink(name);
    handleClickedDrink(searchDrink);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearchDrink(event);
    }
  }

  useEffect(() => {
    if (!searchDrink) {
      // Do nothing if searchDrink is empty
      return;
    }

    let isMounted = true; // flag to track component mount status

    async function fetchRecipes() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const added = JSON.parse(localStorage.getItem("added")) || [];

        const foundInLocalStorage = added.find(
          (drink) => drink.strDrink.toLowerCase() === searchDrink.toLowerCase()
        );

        const resData = await response.json();

        const drinks = Array.isArray(resData.drinks) ? resData.drinks : [];

        if (drinks.length === 0) {
          swal({
            title: "Oops",
            text: "Can not find recipe. Retry or add your own",
            icon: "error",
            button: "Close",
          });
          drinkRef.current.value = "";
          return;
        }

        if (isMounted) {
          // set loaded recipes from the API response || local storage
          setLoadedRecipes(
            foundInLocalStorage
              ? resData.drinks && drinks.length > 0
                ? [foundInLocalStorage, ...drinks]
                : [foundInLocalStorage]
              : drinks
          );
        }
      } catch (error) {
        console.error("fetch error", error);
        if (isMounted) {
          swal({
            title: "Oops",
            text: "There was an error fetching recipes. Please try again later.",
            icon: "info",
            button: "Close",
          });
        }
      }
    }

    fetchRecipes();

    return () => {
      isMounted = false; // Cleanup flag on component unmount
    };
  }, [searchDrink]);

  // Removes objects with empty or null values
  function getNonEmptyProperties(obj) {
    // Retrieves all keys from the object.
    const keys = Object.keys(obj)
      // Filters out keys where the value is null, undefined, or an empty string
      .filter(
        (key) => obj[key] !== null && obj[key] !== undefined && obj[key] !== ""
      );

    const result = {};
    keys.map((key) => {
      //adds new property to result object
      result[key] = obj[key];
      return key;
    });

    // now contains only the keys and values from original 'obj' that passed filter
    return result;
  }

  // function for single click drink
  function handleClickedDrink(name) {
    //
    const foundDrink = loadedRecipes.find((recipe) => recipe.strDrink === name);

    if (foundDrink) {
      const nonEmptyDrinkArray = getNonEmptyProperties(foundDrink);
      setClickedDrink(nonEmptyDrinkArray);
    }
    console.log("clicked drink", clickedDrink);
  }

  return (
    <>
      <NavBar onClick={handleSearchFavDrink} />
      <Container maxWidth="1">
        <Grid container spacing={1} direction="column">
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <div style={{ padding: 15 }}>
              <SearchBar
                onKeyDown={handleKeyDown}
                searchDrink={searchDrink}
                ref={drinkRef}
              />
              <Button
                onClick={handleSearchDrink}
                variant="contained"
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
            </div>
          </Grid>
          <Grid item container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              {loadedRecipes.length > 0 || null ? (
                <ListCard
                  onClick={handleClickedDrink}
                  loadedRecipes={loadedRecipes}
                />
              ) : (
                <CircularProgress />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box paddingBottom={5}>
                <RecipeCard clickedDrink={clickedDrink} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Search;
