import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import 'typeface-roboto';
import Types from './pages/Types'
import Button from './pages/Button'
import DefaultProps from './pages/DefaultProps'
import Theme from './pages/Theme'
import { Router, Link } from "@reach/router"

function App() {
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>


      <nav>
      <Link to="/">/</Link><br />
      <Link to="types">Types</Link><br />
      <Link to="button">Button</Link><br />
      <Link to="defaultprops">DefaultProps</Link><br />
      <Link to="theme">Theme</Link><br />
    </nav>

      <Router >
          <Button path="/button"/>
          <Types path="/types" />
          <DefaultProps path="/defaultprops" />
          <Theme path="/theme" />
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//https://material-ui.com/getting-started/usage/#responsive-meta-tag
//Responsibe meta tag
