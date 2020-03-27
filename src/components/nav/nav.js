import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
  }

})
);

function NavTabs() {

  const classes = useStyles();
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap className= {classes.toolbarTitle} >
        Jane's Essentials
      </Typography>
      <nav>
        <Link
          to="/home"
          className={classes.link}
        >
          Home
        </Link>
        <Link
          to="/all"
          className={classes.link}
        >
          All
        </Link>
      </nav>
      <Button href="#" color="primary" variant="outlined">
        Login
      </Button>
    </Toolbar>
  </AppBar>
  );
}

export default NavTabs;