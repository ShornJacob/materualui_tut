import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import 'typeface-roboto';
import Types from './pages/Types'
import Button from './pages/Button'
import DefaultProps from './pages/DefaultProps'
import Theme from './pages/Theme'
import Paper from './pages/Paper'
import BreadCrumbs from './pages/BreadCrumbs'
import Palette from './pages/Palette'
import BoxPage from './pages/BoxPage'
import ContainerPage from './pages/ContainerPage'
import GridPage from './pages/GridPage'
import FluidPage from './pages/FluidGrid'
import GridBreak from './pages/GridBreak'
import AppBar from './pages/AppBar'
import AppBar2 from './pages/AppBar2'
import SimpleMenu from './pages/SimpleMenu'
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
      <Link to="paper">Paper</Link><br />
      <Link to="breadcrumbs">breadcrumbs</Link><br />
      <Link to="palette">Palette</Link><br />
      <Link to="box">Box</Link><br />
      <Link to="container">Container</Link><br />
      <Link to="grid">Grid</Link><br />
      <Link to="fluidgrid">Fluidgrid</Link><br />
      <Link to="gridbreak">GridBreak</Link><br />
      <Link to="appbar">AppBar</Link><br />
      <Link to="appbar2">appbar2</Link><br />
      <Link to="simplemenu">SimpleMenu</Link><br />
    </nav>

      <Router >
          <Button path="/button"/>
          <Types path="/types" />
          <DefaultProps path="/defaultprops" />
          <Theme path="/theme" />
          <Paper path="/paper" />
          <BreadCrumbs path="/breadcrumbs" />
          <Palette path="/palette" />
          <BoxPage path="/box" />
          <ContainerPage path="/container" />
          <GridPage path="/grid" />
          <FluidPage path="/fluidgrid" />
          <GridBreak path="/gridbreak" />
          <AppBar path="/appbar" />
          <AppBar2 path="/appbar2" />
          <SimpleMenu path="/simplemenu" />
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//https://material-ui.com/getting-started/usage/#responsive-meta-tag
//Responsibe meta tag
