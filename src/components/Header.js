import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
          <Typography variant="h6" color="inherit" noWrap>
            Hlumisa Mazomba's Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
