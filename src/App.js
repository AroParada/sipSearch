import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListCard from "./components/ListCard";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <Container maxWidth="1">
      <NavBar />
      <Grid container spacing={2} direction="column">
        <Grid item>
          <div style={{ padding: 20 }}>
            <SearchBar />
          </div>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} md={6}>
          <ListCard />
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
