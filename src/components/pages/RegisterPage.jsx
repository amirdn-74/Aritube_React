import { Grid, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { Formik } from "formik";
import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../../services/authService";
import createValidationErrors from "../../services/createValidationErrors";
import registerValidation from "../../validations/register.validation";
import { FormInput, FormSubmit } from "../forms";

const useStyles = makeStyles((theme) => ({
  accountActionGrid: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
  accountActionCard: {
    background: "#fff",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    boxShadow: "0 0 1.5rem rgba(0,0,0,0.2)",
    borderRadius: ".5rem",
  },
  cardFooter: {
    fontSize: "1.5rem",
    width: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  footerIcons: {
    fontSize: "2.2rem",
    position: "relative",
    float: "left",
    marginRight: theme.spacing(1),
  },
  title: {
    width: "100%",
    fontSize: "2rem",
    textAlign: "center",
    borderBottom: ".1rem solid #ccc",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function RegisterPage() {
  const classes = useStyles();
  const history = useHistory();

  const handleRegister = async (data, actions) => {
    try {
      await auth.register(data);
    } catch (error) {
      actions.setErrors(createValidationErrors(error));
    }
    actions.setSubmitting(false);
  };

  if (auth.userIsLogedin()) {
    history.push("/");
    window.location = "/";

    return null;
  }

  return (
    <Grid
      className={classes.accountActionGrid}
      item
      xs={12}
      sm={9}
      md={6}
      lg={4}
    >
      <div className={classes.accountActionCard}>
        <div className={classes.title}>Create New Account</div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, actions) => {
            handleRegister(values, actions);
          }}
          validationSchema={registerValidation()}
        >
          {() => (
            <Fragment>
              <FormInput name="name" label="Name" />
              <FormInput name="email" label="Email" />
              <FormInput type="password" name="password" label="Password" />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
              />

              <FormSubmit text="create account" />
            </Fragment>
          )}
        </Formik>
      </div>
      <div className={classes.cardFooter}>
        <Link to="/account/login" style={{ color: "#888" }}>
          <Person className={classes.footerIcons} />
          Already have one? Login here
        </Link>
      </div>
    </Grid>
  );
}

export default RegisterPage;
