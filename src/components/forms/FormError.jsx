import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  error: {
    marginTop: ".5rem",
    fontSize: "1.4rem",
    color: "red",
  },
}));

function FormError({ error, visible }) {
  const classes = useStyles();

  if (!error || !visible) return null;

  return <div className={classes.error}>{error}</div>;
}

export default FormError;
