import React, { Fragment } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import VideoDetails from "./VideoDetails";

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    width: "100%",
    position: "relative",
    backgroundColor: "red",
    paddingTop: "56.25%",
    top: 0,
    left: 0,
    float: "left",
  },
  videoCard: {
    width: "100%",
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    float: "left",
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  },
}));

function PlayerWrapper(props) {
  const classes = useStyles();

  return (
    <Grid item style={{ marginBottom: "2rem", float: "left" }} xs={12} lg={8}>
      {/* <PlayerPlaceholder /> */}
      <Grid item xs={12} className={classes.videoCard}>
        <div className={classes.playerWrapper}></div>
      </Grid>

      <VideoDetails />
    </Grid>
  );
}

export default PlayerWrapper;
