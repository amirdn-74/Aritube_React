import { Button, makeStyles } from "@material-ui/core";
import { useFormikContext } from "formik";
import React from "react";
import AppFormControl from "./AppFormControl";
import FormError from "./FormError";

const useStyles = makeStyles((theme) => ({
  file: {
    maxWidth: "100%",
    position: "absolute",
    height: "100%",
    opacity: "0",
  },
  button: {
    position: "relative",
    fontSize: "1.5rem",
  },
}));

function FileButton({
  name,
  variant = "contained",
  color,
  onClick,
  onChange,
  multiple,
}) {
  const classes = useStyles();

  const { handleChange, errors } = useFormikContext();
  const error = errors[name];

  return (
    <AppFormControl>
      <Button variant={variant} color={color} className={classes.button}>
        <input
          type="file"
          className={classes.file}
          name={name}
          onClick={onClick}
          onChange={onChange || handleChange(name)}
          multiple={multiple}
        />
        choose
      </Button>
      <FormError error={error} />
    </AppFormControl>
  );
}

export default FileButton;
