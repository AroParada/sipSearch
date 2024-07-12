import "./App.css";
import { useEffect, useState, useRef } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListCard from "./components/ListCard";
import RecipeCard from "./components/RecipeCard";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [loadedRecipes, setLoadedRecipes] = useState([]);
  const [searchDrink, setSearchDrink] = useState('margarita');

  const drinkRef = useRef();

  function handleSearchDrink(event) {
    event.preventDefault();

    const enteredDrink = drinkRef.current.value;
    setSearchDrink(enteredDrink)
    console.log('entered drink', enteredDrink);
  }

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`
        );
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const resData = await response.json();

        setLoadedRecipes(resData.drinks);
      } catch (error) {
        console.error("fetch error", error);
      }
    }

    fetchRecipes();
  }, [searchDrink]);

  useEffect(() => {
    console.log("loaded recipes", loadedRecipes);
  }, [loadedRecipes]);

  return (
    <Container maxWidth="1">
      <NavBar />
      <Grid container spacing={2} direction="column">
        <Grid item>
          <div style={{ padding: 20 }}>
            <SearchBar ref={drinkRef} />
            <button onClick={handleSearchDrink}>BUTTON</button>
          </div>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} md={6}>
            {loadedRecipes.length > 0 || null ? (
              <ListCard loadedRecipes={loadedRecipes} />
            ) : (
              <CircularProgress />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <RecipeCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
