import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

function SideVideoCard({ smallScreen }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      width: "100%",
      float: "left",
      marginBottom: theme.spacing(1.5),
    },
    screenWrapper: {
      float: "left",
      width: "40%",
    },
    screen: {
      width: "100%",
      paddingTop: "56.25%",
      float: "left",
      position: "relative",
    },
    smallScreen: {
      width: "20%",
    },
    texts: {
      float: "left",
      height: "2rem",
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(1),
    },
    cover: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    videoName: {
      width: "55%",
      fontSize: smallScreen ? "2.2rem" : "1.5rem",
      fontWeight: 500,
      color: "#000",
      paddingLeft: theme.spacing(1),
      float: "left",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "normal",
      "-webkit-line-clamp": 2,
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      [theme.breakpoints.only("md")]: {
        fontSize: "2.3rem",
      },
    },
    channelName: {
      width: "55%",
      fontSize: smallScreen ? "1.8rem" : "1.5rem",
      color: "#555",
      paddingLeft: theme.spacing(1),
      float: "left",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "normal",
      "-webkit-line-clamp": 1,
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      paddingTop: theme.spacing(0.4),
      [theme.breakpoints.only("md")]: {
        fontSize: "1.9rem",
      },
    },
    videoLenght: {
      position: "absolute",
      zIndex: 1,
      padding: ".4rem .8rem",
      backgroundColor: "#222",
      color: "#fff",
      fontSize: "1.3rem",
      bottom: theme.spacing(1),
      right: theme.spacing(1),
      borderRadius: "3px",
      fontWeight: 500,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Link to="/watch">
        <div
          className={`${classes.screenWrapper} ${
            smallScreen && classes.smallScreen
          }`}
        >
          <div className={classes.screen}>
            <img src="images/1.webp" className={classes.cover} alt="" />
            <div className={classes.videoLenght}>8:39</div>
          </div>
        </div>
      </Link>
      <Link
        to="/watch"
        className={classes.videoName}
        title="Rami Malek Responds to Awkward Nicole Kidman Moment"
      >
        Rami Malek Responds to Awkward Nicole Kidman Moment to Awkward Nicole
        Kidman Moment
      </Link>
      <Link to="/channel" className={classes.channelName}>
        channel name here channel name here
      </Link>
      <div className={classes.channelName}>1.1M views-10 months ago</div>
    </div>
  );
}

export default SideVideoCard;
