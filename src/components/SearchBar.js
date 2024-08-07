import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

const SearchBar = forwardRef(({onKeyDown, searchDrink, props }, ref) => {
  return (
    <>
      <TextField
        error={!searchDrink}
        id="outlined-error-helper-text"
        helperText={!searchDrink ? "Enter a drink" : ""}
        label="Search drink"
        variant="outlined"
        onKeyDown={onKeyDown}
        fullWidth
        inputRef={ref}
        {...props}
      />
    </>
  );
});

export default SearchBar;