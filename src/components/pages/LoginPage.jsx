import { Grid, makeStyles } from "@material-ui/core";
import { Formik } from "formik";
import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import loginValidation from "../../validations/login.validation";
import { AppFormControl, FormInput, FormSubmit } from "../forms";
import * as auth from "../../services/authService";
import createValidationErrors from "../../services/createValidationErrors";
import { PersonAdd } from "@material-ui/icons";

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
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(2),
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

function LoginPage(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = async (values, actions) => {
    try {
      await auth.login(values);
      window.location = "/";
      // history.push("/");
    } catch (error) {
      if (error.response.status === 400)
        actions.setErrors(createValidationErrors(error));

      // console.log(error.response.data);
    }
    actions.setSubmitting(false);
  };

  if (auth.userIsLogedin()) history.push("/");

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
        <div className={classes.title}>Login To Aritube</div>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, actions) => {
            await handleLogin(values, actions);
          }}
          validationSchema={loginValidation()}
        >
          {() => (
            <Fragment>
              <FormInput label="Email" name="email" />
              <FormInput type="password" label="Password" name="password" />

              <AppFormControl>
                <Link
                  to="/account/forgot-password"
                  style={{ fontSize: "1.5rem", color: "#0d6edd" }}
                >
                  Forgot your password?
                </Link>
              </AppFormControl>

              <FormSubmit text="Login" />
            </Fragment>
          )}
        </Formik>
      </div>
      <div className={classes.cardFooter}>
        <Link to="/account/register" style={{ color: "#888" }}>
          <PersonAdd className={classes.footerIcons} />
          Create new account here
        </Link>
      </div>
    </Grid>
  );
}

export default LoginPage;
