import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import {
  Comment,
  Dashboard,
  Edit,
  Movie,
  PlaylistPlay,
  Settings,
} from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  studioNav: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "1.8rem",
    float: "left",
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  navOption: {
    display: "inline",
    marginRight: theme.spacing(1.5),
    float: "left",
  },
  navLink: {
    backgroundColor: "#fff",
    padding: theme.spacing(1.5),
    borderRadius: "5rem",
    border: "2px solid #ddd",
    color: "#222",
    float: "left",
    "&:hover": {
      color: "#888",
    },
  },
  icon: {
    fontSize: "2rem",
    float: "left",
    marginRight: theme.spacing(1),
    marginTop: ".2rem",
    color: "#777",
  },
}));

function StudioNavbar(props) {
  const classes = useStyles();

  return (
    <ul className={classes.studioNav}>
      <li className={classes.navOption}>
        <NavLink className={`${classes.navLink}`} to="/studio/dashboard">
          <Dashboard className={classes.icon} />
          Dashboard
        </NavLink>
      </li>
      <li className={classes.navOption}>
        <NavLink className={classes.navLink} to="/studio/customization">
          <Edit className={classes.icon} />
          Customization
        </NavLink>
      </li>
      <li className={classes.navOption}>
        <NavLink className={classes.navLink} to="/studio/videos">
          <Movie className={classes.icon} />
          Videos
        </NavLink>
      </li>
      <li className={classes.navOption}>
        <NavLink className={classes.navLink} to="/studio/playlists">
          <PlaylistPlay
            className={classes.icon}
            style={{ fontSize: "2.5rem", marginTop: "0" }}
          />
          Playlists
        </NavLink>
      </li>
      <li className={classes.navOption}>
        <NavLink className={classes.navLink} to="/studio/comments">
          <Comment className={classes.icon} />
          Comments
        </NavLink>
      </li>
      <li className={classes.navOption}>
        <NavLink className={classes.navLink} to="/studio/settings">
          <Settings className={classes.icon} />
          Settings
        </NavLink>
      </li>
    </ul>
  );
}

export default StudioNavbar;
