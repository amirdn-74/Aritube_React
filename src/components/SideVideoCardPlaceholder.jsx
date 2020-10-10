import React from "react";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    float: "left",
    marginBottom: theme.spacing(1.5),
  },
  screen: {
    width: "40%",
    paddingTop: "21%",
    float: "left",
  },
  texts: {
    float: "left",
    height: "2rem",
    marginTop: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  },
}));

function SideVideoCardPlaceholder() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Skeleton
        variant="rect"
        animation="pulse"
        className={classes.screen}
      />
      <Skeleton
        variant="rect"
        animation="pulse"
        width="40%"
        className={classes.texts}
      />
      <Skeleton
        variant="rect"
        animation="pulse"
        width="20%"
        className={classes.texts}
      />
    </div>
  );
}

export default SideVideoCardPlaceholder;
