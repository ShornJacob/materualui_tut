import React from "react";
import {Typography} from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span"
      }
    }
  }
});

export default function Types() {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="h2">Subtitle</Typography>
      <Typography variant="h2">Subtitle</Typography>
      <Typography variant="subtitle">Subtitle</Typography>
      <Typography variant="body1">body2</Typography>
    </ThemeProvider>
  );
}

//varaint	Applies the theme typography styles.
//https://material-ui.com/api/typography/
//The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component.