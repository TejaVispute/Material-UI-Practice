import React from "react";
import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>Heading1</Typography>
      <Typography variant="h2">Heading1</Typography>
      <Typography variant="h3" component="h1">
        Heading1
      </Typography>
      <Typography variant="h4">Heading1</Typography>
      <Typography variant="h5">Heading1</Typography>
      <Typography variant="h6">Heading1</Typography>

      <Typography variant="subtitle1">subtitle 1 </Typography>
      <Typography variant="subtitle2"> subtitle 2</Typography>

      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam odit,
        eos eaque voluptates aliquid quisquam tempore voluptas delectus
        distinctio odio, dolorum quo nesciunt vero magni illo officiis impedit
        corrupti! Facilis!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi alias
        repellat laudantium expedita quaerat veritatis unde, tempore soluta
        eveniet magnam sunt labore hic, officia dolores praesentium earum!
        Deleniti, esse sit!
      </Typography>
    </div>
  );
};

export default MuiTypography;
