import { TextField } from "@mui/material";
import React, { forwardRef } from 'react';

const SearchBar = forwardRef((props, ref) => {
    return (
      <TextField
        id="outlined-basic fullWidth"
        label="Enter drink"
        variant="outlined"
        fullWidth
        inputRef={ref}
        {...props}
      />
    );
});

export default SearchBar;