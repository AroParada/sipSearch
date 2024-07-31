import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useRef, useState, useEffect} from 'react';

export default function AddRecipeForm() {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState([]);

  useEffect(() => {
    const storedAdded = JSON.parse(localStorage.getItem('added')) || [];
    setAdded(storedAdded);
  }, []);


  
    const drinkNameRef  = useRef();
    const imgUrlRef = useRef();
    const servingsRef = useRef();
    const ing1Ref = useRef();
    const ing2Ref = useRef();
    const ing3Ref = useRef();
    const ing4Ref = useRef();
    const ing5Ref = useRef();
    const ing6Ref = useRef();
    const ing7Ref = useRef();
    const ing8Ref = useRef();
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formValues = {
      strDrink: drinkNameRef.current.value,
      strDrinkThumb: imgUrlRef.current.value,
      servings: servingsRef.current.value,
      strIngredient1: ing1Ref.current.value,
      strIngredient2: ing2Ref.current.value,
      strIngredient3: ing3Ref.current.value,
      strIngredient4: ing4Ref.current.value,
      strIngredient5: ing5Ref.current.value,
      strIngredient6: ing6Ref.current.value,
      strIngredient7: ing7Ref.current.value,
      strIngredient8: ing8Ref.current.value,
    };
    console.log(formValues, 'FORM VALUES');
    setAdded(prevAdded => {
      const updatedAdded = [...prevAdded, formValues];
    localStorage.setItem('added', JSON.stringify(updatedAdded))
    return updatedAdded;
    })
    console.log(added, 'ADDED');
    handleClose()
  }

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
      <Dialog
        open={open}
        onClose={handleClose}
        >
        <form onSubmit={handleSubmit}>
          <DialogTitle>Recipe Data</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
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
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Image URL"
              fullWidth
              variant="standard"
              inputRef={imgUrlRef}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Servings"
              fullWidth
              variant="standard"
              inputRef={servingsRef}
            />
          </DialogContent>
          <DialogTitle>Ingredients</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 1"
              fullWidth
              variant="standard"
              inputRef={ing1Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 2"
              fullWidth
              variant="standard"
              inputRef={ing2Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 3"
              fullWidth
              variant="standard"
              inputRef={ing3Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 4"
              fullWidth
              variant="standard"
              inputRef={ing4Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 5"
              fullWidth
              variant="standard"
              inputRef={ing5Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="emainputRl"
              label="Ingredient 6"
              fullWidth
              variant="standard"
              inputRef={ing6Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 7"
              fullWidth
              variant="standard"
              inputRef={ing7Ref}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Ingredient 8"
              fullWidth
              variant="standard"
              inputRef={ing8Ref}
            />
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
