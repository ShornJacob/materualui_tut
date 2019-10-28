import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";
import 'typeface-roboto';
import Types from './pages/Types'

function App() {
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <Types />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//https://material-ui.com/getting-started/usage/#responsive-meta-tag
//Responsibe meta tag
