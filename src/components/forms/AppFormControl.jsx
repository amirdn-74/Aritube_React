import { FormControl, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

function AppFormControl({ children }) {
  const classes = useStyles();

  return (
    <FormControl size="medium" className={classes.formControl}>
      {children}
    </FormControl>
  );
}

export default AppFormControl;
