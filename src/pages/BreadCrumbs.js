import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(1, 2),
    },
  }));


  function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
  }

  export default function SimpleBreadcrumbs() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Material-UI
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
              Core
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>
        </Paper>
        <br />
        <Paper elevation={0} className={classes.paper}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Material-UI
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
              Core
            </Link>
            <Link
              color="textPrimary"
              href="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
            >
              Breadcrumb
            </Link>
          </Breadcrumbs>
        </Paper>

        <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </Paper>

      <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
          <HomeIcon className={classes.icon} />
          Material-UI
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <WhatshotIcon className={classes.icon} />
          Core
        </Link>
        <Typography color="textPrimary" className={classes.link}>
          <GrainIcon className={classes.icon} />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </Paper>

    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link color="inherit" href="#" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          Catalog
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          Accessories
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          New Collection
        </Link>
        <Typography color="textPrimary">Belts</Typography>
      </Breadcrumbs>
    </Paper>

    <Paper elevation={0} className={classes.root}>

</Paper>
      </div>
    );
  }

  //he flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
  //https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap