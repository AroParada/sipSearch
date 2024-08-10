import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

const SearchBar = forwardRef(({onKeyDown, searchDrink, props }, ref) => {
  return (
    <>
      <TextField
        style={{ padding: 5 }}
        error={!searchDrink}
        id="outlined-error-helper-text"
        helperText={!searchDrink ? "Enter a drink" : ""}
        label="Search drink"
        variant="outlined"
        onKeyDown={onKeyDown}
        inputRef={ref}
        {...props}
      />
    </>
  );
});

export default SearchBar;