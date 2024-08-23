import React, { useContext, useEffect, useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Fab,
  Collapse,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FavoritesContext } from "../store/favorites";
import IngredientRow from "./IngredientRow";
import ExpandMore from "./ExpandMore";

export default function RecipeCard({ clickedDrink }) {
  const [expanded, setExpanded] = React.useState(false);
  const [serving, setServing] = React.useState(1);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(clickedDrink.strDrink);
  const [updatedDrink, setUpdatedDrink] = React.useState({ clickedDrink });

  // Clean later
  const ingredients = [
    {
      ingredient: updatedDrink.strIngredient1,
      measurement: updatedDrink.strMeasure1,
    },
    {
      ingredient: updatedDrink.strIngredient2,
      measurement: updatedDrink.strMeasure2,
    },
    {
      ingredient: updatedDrink.strIngredient3,
      measurement: updatedDrink.strMeasure3,
    },
    {
      ingredient: updatedDrink.strIngredient4,
      measurement: updatedDrink.strMeasure4,
    },
    {
      ingredient: updatedDrink.strIngredient5,
      measurement: updatedDrink.strMeasure5,
    },
    {
      ingredient: updatedDrink.strIngredient6,
      measurement: updatedDrink.strMeasure6,
    },
    {
      ingredient: updatedDrink.strIngredient7,
      measurement: updatedDrink.strMeasure7,
    },
  ];

  // if new clicked drink change updated drink state back to clicked drink
  useEffect(() => {
    setUpdatedDrink(clickedDrink);
    setServing(1);
  }, [clickedDrink]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleServingChange = (change) => {
    if (serving > 1 || (serving === 1 && change === 1)) {
      const newServing = serving + change;
      setServing(newServing);
      changeServingValue(clickedDrink, newServing);
    } else if (serving === 1 && change === -1) {
    }
  };

  const handleAddClick = () => handleServingChange(1);
  const handleRemoveClick = () => handleServingChange(-1);

  //change ingredients amount based on serving
  const changeServingValue = (clickedDrink, newServing) => {
    const newUpdatedDrink = { ...clickedDrink };

    Object.keys(newUpdatedDrink).forEach((key) => {
      if (key.startsWith("strMeasure")) {
        if (
          // doesnt have / or cl has a number
          !newUpdatedDrink[key].includes("/") &&
          !newUpdatedDrink[key].includes("oz") &&
          !newUpdatedDrink[key].includes("cl") &&
          /\d/.test(newUpdatedDrink[key])
        ) {
          const numericValue = parseInt(newUpdatedDrink[key]);
          const unit = newUpdatedDrink[key].replace(numericValue, "").trim();
          const newValue = numericValue * newServing;
          const updatedMeasurementString = `${newValue} ${unit}`;

          newUpdatedDrink[key] = updatedMeasurementString;
          setUpdatedDrink(newUpdatedDrink);
        } else if (
          // has cl
          newUpdatedDrink[key].includes("cl") ||
          newUpdatedDrink[key].includes("oz")
        ) {
          const numericValue = parseFloat(newUpdatedDrink[key]);
          const unit = newUpdatedDrink[key].replace(numericValue, "").trim();
          const newValue = numericValue * newServing;
          const updatedMeasurementString = `${newValue} ${unit}`;

          newUpdatedDrink[key] = updatedMeasurementString;
          setUpdatedDrink(newUpdatedDrink);
        } else if (
          // has /
          newUpdatedDrink[key].includes("/")
        ) {
          const fractionArray = newUpdatedDrink[key].trim().split(" ");

          const convertFractionToDecimal = (fraction) => {
            const [numerator, denominator] = fraction.split("/").map(Number);
            return numerator / denominator;
          };

          if (fractionArray.length <= 2) {
            const decimal = convertFractionToDecimal(fractionArray[0]);
            const newValue = (decimal * newServing).toFixed(1);
            const updatedMeasurementString = `${newValue} ${
              fractionArray[1] || ""
            }`;

            newUpdatedDrink[key] = updatedMeasurementString;
            setUpdatedDrink(newUpdatedDrink);
          } else if (fractionArray.length >= 3) {
            const fractionInArray = fractionArray.filter((number) =>
              number.includes("/")
            );
            const wholeNumberInArray = fractionArray.filter(
              (number) => !isNaN(number)
            );
            const intWholeNumber =
              wholeNumberInArray.length > 0 ? parseInt(wholeNumberInArray) : 0;
            const decimal = convertFractionToDecimal(fractionInArray[0]);
            const newValue = (decimal + intWholeNumber).toFixed(1) * newServing;
            newUpdatedDrink[key] = newValue;
            setUpdatedDrink(newUpdatedDrink);
          }
        }
      }
    });
  };

  return (
    <Paper
      sx={{
        width: 350,
        maxWidth: "100%",
        borderRadius: "12px",
        padding: 1.5,
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        border: "1px solid #000000;",
      }}
      elevation={5}
    >
      <CardMedia
        sx={{
          borderRadius: "6px",
          width: "100%",
          height: 0,
          paddingBottom: "min(75%, 240px)",
          backgroundColor: "rgba(0,0,0,0.08)",
          border: "1px solid #000000;",
        }}
        image={clickedDrink.strDrinkThumb}
        alt="Drink"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {clickedDrink.strDrink}
        </Typography>
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
        <IconButton
          aria-label="add to favorites"
          onClick={() => toggleFavorite(clickedDrink.strDrink)}
        >
          <FavoriteIcon color={isFavorite ? "error" : "action"} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography component="div">Method</Typography>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {clickedDrink.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Paper>
  );
}
