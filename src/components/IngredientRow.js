// IngredientRow.js
import React from "react";
import { TableRow, TableCell } from "@mui/material";

const IngredientRow = ({ ingredient, measurement }) => (
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      {ingredient}
    </TableCell>
    <TableCell align="right">{measurement}</TableCell>
  </TableRow>
);

export default IngredientRow;