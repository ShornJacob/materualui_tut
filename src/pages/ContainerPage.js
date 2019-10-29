import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>

      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>

      <Container fixed></Container>
    </React.Fragment>
  );
}

//https://material-ui.com/api/container/
//Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.

//https://material-ui.com/api/typography/
//The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component.

//https://www.w3schools.com/cssref/css_units.asp
//1vh = 1% of viewport height.

//fixed = The max-width matches the min-width of the current breakpoint.