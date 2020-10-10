import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  parallax: {
    width: "100%",
    height: "26rem",
    background: "red",
    float: "left",
  },
}));

function Parallax(props) {
  const classes = useStyles();

  return <div className={classes.parallax}></div>;
}

export default Parallax;
