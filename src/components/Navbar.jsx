import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import TopSearch from "./TopSearch";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Badge,
  Button,
  withStyles,
  Drawer,
} from "@material-ui/core";
import {
  NotificationsOutlined,
  BackupOutlined,
  PersonOutlined,
} from "@material-ui/icons";

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
  avatar: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    backgroundColor: blue[800],
    fontSize: "2rem",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },
  drawer: {
    flexShrink: 0,
    width: 240,
  },
  accountLink: {
    marginLeft: theme.spacing(2),
    fontSize: "1.3rem",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  badge: {
    fontSize: "2rem",
  },
}));

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

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton>
            <MenuIcon className={classes.navbarIcons} />
          </IconButton>
          <Typography className={classes.Logo} noWrap variant="h6">
            AriTube
          </Typography>

          <TopSearch />

          <div className={classes.grow} />
          <div className={classes.leftMenu}>
            <IconButton>
              <BackupOutlined className={classes.navbarIcons} />
            </IconButton>
            <IconButton>
              <NotificationBadge badgeContent="4" color="secondary">
                <NotificationsOutlined className={classes.navbarIcons} />
              </NotificationBadge>
            </IconButton>
            {/* <Avatar className={classes.avatar}>A</Avatar> */}
            <Button
              variant="outlined"
              color="default"
              size="large"
              href="/account"
              className={classes.accountLink}
              startIcon={<PersonOutlined />}
            >
              Account
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
