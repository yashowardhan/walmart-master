import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Walmart Shop
          </Typography>
          <Link
            href="/signin"
            variant="body2"
            style={{ color: "white", paddingRight: "1.5rem" }}
          >
            {"Log In"}
          </Link>
          <Link
            href="/"
            variant="body2"
            style={{ color: "white", paddingRight: "1.5rem" }}
          >
            {"Products"}
          </Link>
          <Link
            href="/searchproduct"
            variant="body2"
            style={{ color: "white", paddingRight: "1.5rem" }}
          >
            {"Search"}
          </Link>
          <Link href="/filter" variant="body2" style={{ color: "white" }}>
            {"Filter"}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
