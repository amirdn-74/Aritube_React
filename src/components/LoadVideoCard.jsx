import React from "react";
import { blue, grey } from "@material-ui/core/colors";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  textSkeleton: {
    marginTop: theme.spacing(1.5),
  },
  videoCover: {
    width: "100%",
    paddingTop: "56.25%",
  },
}));

function LoadVideoCard(props) {
  const classes = useStyles();

  return (
    <Grid item className={classes.card} xs={12} sm={6} md={4} lg={3}>
      <Skeleton
        variant="rect"
        animation="pulse"
        className={classes.videoCover}
      />
      <Skeleton
        variant="rect"
        animation="pulse"
        width="80%"
        height={20}
        className={classes.textSkeleton}
      />
      <Skeleton
        variant="rect"
        animation="pulse"
        width="50%"
        height={20}
        className={classes.textSkeleton}
      />
    </Grid>
  );
}

export default LoadVideoCard;
