import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import swal from "sweetalert";

export default function AddRecipeForm({handleDrawerToggle}) {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState([]);

  useEffect(() => {
    const storedAdded = JSON.parse(localStorage.getItem("added")) || [];
    setAdded(storedAdded);
  }, []);

  const drinkNameRef = useRef();
  const imgUrlRef = useRef();
  const instructionsRef = useRef();
  const ing1Ref = useRef();
  const ing2Ref = useRef();
  const ing3Ref = useRef();
  const ing4Ref = useRef();
  const ing5Ref = useRef();
  const ing6Ref = useRef();
  const ing7Ref = useRef();
  const ing8Ref = useRef();
  const meas1Ref = useRef();
  const meas2Ref = useRef();
  const meas3Ref = useRef();
  const meas4Ref = useRef();
  const meas5Ref = useRef();
  const meas6Ref = useRef();
  const meas7Ref = useRef();
  const meas8Ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = {
      strDrink: drinkNameRef.current.value,
      strDrinkThumb: imgUrlRef.current.value,
      strInstructions: instructionsRef.current.value,
      strIngredient1: ing1Ref.current.value,
      strIngredient2: ing2Ref.current.value,
      strIngredient3: ing3Ref.current.value,
      strIngredient4: ing4Ref.current.value,
      strIngredient5: ing5Ref.current.value,
      strIngredient6: ing6Ref.current.value,
      strIngredient7: ing7Ref.current.value,
      strIngredient8: ing8Ref.current.value,
      strMeasure1: meas1Ref.current.value,
      strMeasure2: meas2Ref.current.value,
      strMeasure3: meas3Ref.current.value,
      strMeasure4: meas4Ref.current.value,
      strMeasure5: meas5Ref.current.value,
      strMeasure6: meas6Ref.current.value,
      strMeasure7: meas7Ref.current.value,
      strMeasure8: meas8Ref.current.value,
    };
    setAdded((prevAdded) => {
      const updatedAdded = [...prevAdded, formValues];
      localStorage.setItem("added", JSON.stringify(updatedAdded));
      return updatedAdded;
    });
    handleClose();

   if (window.innerWidth < 600) {
     handleDrawerToggle();
   }
      
    swal({
      title: "Recipe added",
      icon: "success",
      timer: 3000
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="inherit" onClick={handleClickOpen}>
        Add Recipe
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Recipe Data</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Name"
              fullWidth
              variant="standard"
              inputRef={drinkNameRef}
              size="small"
            />
            <TextField
              margin="dense"
              id="name"
              name="email"
              label="Image URL"
              fullWidth
              variant="standard"
              inputRef={imgUrlRef}
              size="small"
            />
            <TextField
              margin="dense"
              id="name"
              name="email"
              label="Instructions"
              fullWidth
              variant="standard"
              inputRef={instructionsRef}
              size="small"
            />
          </DialogContent>
          <DialogTitle>Ingredients</DialogTitle>
          <DialogContent>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <TextField
                required
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 1"
                fullWidth
                variant="standard"
                inputRef={ing1Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 1"
                fullWidth
                variant="standard"
                inputRef={meas1Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 2"
                fullWidth
                variant="standard"
                inputRef={ing2Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 2"
                fullWidth
                variant="standard"
                inputRef={meas2Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 3"
                fullWidth
                variant="standard"
                inputRef={ing3Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 3"
                fullWidth
                variant="standard"
                inputRef={meas3Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="emainputRl"
                label="Ingredient 4"
                fullWidth
                variant="standard"
                inputRef={ing4Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 4"
                fullWidth
                variant="standard"
                inputRef={meas4Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 5"
                fullWidth
                variant="standard"
                inputRef={ing5Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 5"
                fullWidth
                variant="standard"
                inputRef={meas5Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 6"
                fullWidth
                variant="standard"
                inputRef={ing6Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 6"
                fullWidth
                variant="standard"
                inputRef={meas6Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 7"
                fullWidth
                variant="standard"
                inputRef={ing7Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 7"
                fullWidth
                variant="standard"
                inputRef={meas7Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Ingredient 8"
                fullWidth
                variant="standard"
                inputRef={ing8Ref}
                size="small"
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Measure 8"
                fullWidth
                variant="standard"
                inputRef={meas8Ref}
                size="small"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Upload</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
