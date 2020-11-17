import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import TopSearch from "./TopSearch";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import { NotificationsOutlined, BackupOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import * as auth from "../services/authService";
import { useSelector } from "react-redux";
import { pink } from "@material-ui/core/colors";
import NavAuth from "./NavAuth";
import ShowOnLogin from "./utils/ShowOnLogin";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  Logo: {
    display: "block",
    fontWeight: "bold",
    fontSize: "2rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
    },
  },
  navbarIcons: {
    fontSize: "2.5rem",
    color: "#212121",
  },
  leftMenu: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },
  drawer: {
    flexShrink: 0,
    width: 240,
  },
  badge: {
    fontSize: "2rem",
  },
}));

const AppProgress = withStyles((theme) => ({
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    backgroundColor: pink[500],
  },
}))(LinearProgress);

const NotificationBadge = withStyles((theme) => ({
  badge: {
    fontSize: "1.2rem",
    top: "7px",
    right: "1px",
    border: "2px solid #fff",
    padding: "0 4px",
  },
}))(Badge);

function Navbar(props) {
  const classes = useStyles();
  const progress = useSelector((state) => state.ui.progressBar);

  useEffect(() => {
    auth.userIsLogedin() && auth.getUserInfos();
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <AppProgress variant="determinate" value={progress || 0} />

        <Toolbar>
          <IconButton>
            <MenuIcon className={classes.navbarIcons} />
          </IconButton>
          <Typography className={classes.Logo} noWrap variant="h6">
            <Link to="/">AriTube</Link>
          </Typography>

          <TopSearch />

          <div className={classes.grow} />
          <div className={classes.leftMenu}>
            <ShowOnLogin>
              <IconButton>
                <BackupOutlined className={classes.navbarIcons} />
              </IconButton>
              <IconButton>
                <NotificationBadge badgeContent="4" color="secondary">
                  <NotificationsOutlined className={classes.navbarIcons} />
                </NotificationBadge>
              </IconButton>
            </ShowOnLogin>

            <NavAuth />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
