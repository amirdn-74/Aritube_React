import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import React from "react";
import { AppFormControl } from "./";

function SubmitButton({
  variant = "contained",
  color = "primary",
  text,
  style,
  ...rest
}) {
  const { handleSubmit, isValid, isSubmitting } = useFormikContext();

  return (
    <AppFormControl>
      <Button
        style={{ fontSize: ".5rem" }}
        size="small"
        variant={variant}
        color={color}
        className="custom block"
        onClick={handleSubmit}
        disabled={!isValid || isSubmitting}
        {...rest}
      >
        {!isSubmitting ? text : "please wait"}
      </Button>
    </AppFormControl>
  );
}

export default SubmitButton;
