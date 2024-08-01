import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import ListCard from "./components/ListCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [searchDrink, setSearchDrink] = useState("margarita");
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
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
        );
        if (!response.ok) {
          // throw new Error("Network response not ok");
          console.log("Response not ok");
        }
        const added = JSON.parse(localStorage.getItem("added")) || [];

        const foundInLocalStorage = added.find(
          (drink) => drink.strDrink.toLowerCase() === searchDrink.toLowerCase()
        );

        const resData = await response.json();

        // set loaded recipes from the API response || local storage
        setLoadedRecipes(
          foundInLocalStorage
            ? resData.drinks && resData.drinks.length > 0
              ? [foundInLocalStorage, ...resData.drinks]
              : [foundInLocalStorage]
            : resData.drinks
        );

        console.log(loadedRecipes);
      } catch (error) {
        console.error("fetch error", error);
      }
    }

    fetchRecipes();
  }, [searchDrink]);

  useEffect(() => {
    // console.log("loaded recipes", loadedRecipes);
  }, [loadedRecipes]);

  // Removes objects with empty or null values
  function getNonEmptyProperties(obj) {
    // Retrieves all keys from the object.
    return (
      Object.keys(obj)
        // Filters out keys where the value is null, undefined, or an empty string
        .filter(
          (key) =>
            obj[key] !== null && obj[key] !== undefined && obj[key] !== ""
        )
        //Constructs a new object with only the keys that passed the filter.
        .reduce((result, key) => {
          result[key] = obj[key];
          return result;
          //}, {}) is the part of the syntax that initializes the accumulator and completes the function.
        }, {})
    );
  }

  // function for single click drink
  function handleClickedDrink(name) {
    // Understand this
    const foundDrink = loadedRecipes.find((recipe) => recipe.strDrink === name);

    if (foundDrink) {
      const nonEmptyDrinkArray = getNonEmptyProperties(foundDrink);
      // make keys that start with strMeasure values numbers
      //IN PROGRESS ---------------------------
      // Object.keys(nonEmptyDrinkArray).forEach(key => {
      //   if(key.startsWith('strMeasure')) {
      //     nonEmptyDrinkArray[key] = (nonEmptyDrinkArray[key])
      //   }
      // });
      // console.log("Modified properties:", nonEmptyDrinkArray);
      setClickedDrink(nonEmptyDrinkArray);
    }
    console.log("clicked drink", clickedDrink);
  }

  return (
    <Container maxWidth="1">
      <NavBar onClick={handleSearchFavDrink} />
      <Grid container spacing={1} direction="column">
        <Grid item>
          <div style={{ padding: 10 }}>
            <SearchBar ref={drinkRef} />
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
          <Grid item xs={12} md={6} style={{ paddingLeft: 10 }}>
            {loadedRecipes.length > 0 || null ? (
              <ListCard
                onClick={handleClickedDrink}
                loadedRecipes={loadedRecipes}
              />
            ) : (
              <CircularProgress />
            )}
          </Grid>
          <Grid item xs={12} md={6} style={{ paddingRight: 10 }}>
            <RecipeCard clickedDrink={clickedDrink} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
