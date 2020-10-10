import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  screen: {
    width: "100%",
    paddingTop: "52%",
  },
  texts: {
    height: "2rem",
    marginTop: theme.spacing(1.5),
  },
}));

function PlayerPlaceholder() {
  const classes = useStyles();

  return (
    <Fragment>
      <Skeleton
        variant="rect"
        animation="pulse"
        className={classes.screen}
      />
      <Skeleton
        variant="rect"
        animation="pulse"
        width="50%"
        className={classes.texts}
      />
      <Skeleton
        variant="rect"
        animation="pulse"
        width="30%"
        className={classes.texts}
      />
    </Fragment>
  );
}

export default PlayerPlaceholder;
