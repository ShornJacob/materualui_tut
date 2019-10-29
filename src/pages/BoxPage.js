import React from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

export default function BoxPage() {
    return (
        <Box component="span" m={1}>
        <Button />
      </Box>
    );
  }
  

  //It creates a new DOM element, a <div> by default that can be changed with the component property. 
  //https://material-ui.com/components/box/