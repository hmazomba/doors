import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1, 
  }, 
}));
function Header() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbar}>
          <Link component={NavLink} to="/" underline="none" color="textPrimary"></Link>
          </Typography>
          <nav>
            <Link color="textPrimary" href="#" className={classes.link} component={NavLink} to="/register">Register</Link>
          </nav>
          <Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/login"
					>
						Login
					</Button>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/logout"
					>
						Logout
					</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
