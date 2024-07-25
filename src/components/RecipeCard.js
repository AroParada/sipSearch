import * as React from "react";
import { styled, Box } from "@mui/material";
import { red } from "@mui/material/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Fab,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

// Drop down menu
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const IngredientRow = ({ ingredient, measurement }) => (
  // Put in another file ? 
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      {ingredient}
    </TableCell>
    <TableCell align="right">{measurement}</TableCell>
  </TableRow>
);

export default function RecipeCard({ clickedDrink }) {
  const [expanded, setExpanded] = React.useState(false);
  const [serving, setServing] = React.useState(1);
  // Clean later
 const ingredients = [
   {
     ingredient: clickedDrink.strIngredient1,
     measurement: clickedDrink.strMeasure1,
   },
   {
     ingredient: clickedDrink.strIngredient2,
     measurement: clickedDrink.strMeasure2,
   },
   {
     ingredient: clickedDrink.strIngredient3,
     measurement: clickedDrink.strMeasure3,
   },
   {
     ingredient: clickedDrink.strIngredient4,
     measurement: clickedDrink.strMeasure4,
   },
   {
     ingredient: clickedDrink.strIngredient5,
     measurement: clickedDrink.strMeasure5,
   },
   {
     ingredient: clickedDrink.strIngredient6,
     measurement: clickedDrink.strMeasure6,
   },
   {
     ingredient: clickedDrink.strIngredient7,
     measurement: clickedDrink.strMeasure7,
   },
 ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddClick = () => {
    setServing(serving + 1)
    const newClickedDrink = { ...clickedDrink };
    //iNCREMENT SERVING +1
    // IF VALUE DOESNT CONTAIN '/' THEN MULTIPLY NUMBER BY SERVING
    // ELSE CALL FUNCTION THAT WOULD MULTIPLY THE FRACTION BY SERVINGS
  }

  const handleRemoveClick = () => {
    setServing(serving - 1)
  }

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={clickedDrink.strDrink}
      />
      <CardMedia
        component="img"
        height="194"
        src={clickedDrink.strDrinkThumb}
        alt="Drink"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Box display="flex" alignitems="center">
            <PeopleAltIcon fontSize="large" />
            <Typography style={{ margin: "8px 10px" }}>
              {" "}
              {serving} serving
            </Typography>
            <Fab
              size="small"
              color="primary"
              aria-label="remove"
              onClick={handleRemoveClick}
              sx={{
                marginRight: 1,
                width: 33,
                height: 33,
                minHeight: "unset",
              }}
            >
              <RemoveIcon />
            </Fab>
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              onClick={handleAddClick}
              sx={{
                width: 33,
                height: 33,
                minHeight: "unset",
              }}
            >
              <AddIcon />
            </Fab>
          </Box>
          <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Ingredient </TableCell>
                <TableCell align="right">Measurement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.map((item, index) => (
                <IngredientRow
                  key={index}
                  ingredient={item.ingredient}
                  measurement={item.measurement}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "red!important" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography variant="body2" color="text.secondary">
            {clickedDrink.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
