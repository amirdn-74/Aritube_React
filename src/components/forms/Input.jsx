import { TextField } from "@material-ui/core";
import { useFormikContext } from "formik";
import React from "react";
import { FormError } from ".";
import AppFormControl from "./AppFormControl";

function Input({ variant = "outlined", type = "text", label, name }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  const error = errors[name];

  return (
    <AppFormControl>
      <TextField
        variant={variant}
        type={type}
        label={label}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        error={error && touched[name] ? true : false}
      />
      <FormError error={error} visible={touched[name]} />
    </AppFormControl>
  );
}

export default Input;
