import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { makeStyles } from "@material-ui/core";
import WatchPage from "./components/pages/WatchPage";
import SearchPage from "./components/pages/SearchPage";
import ChannelPage from "./components/pages/ChannelPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Studio from "./components/studio/Studio";
import ChannelOwnerRoute from "./components/protectedRoutes/ChannelOwnerRoute";

const useStyles = makeStyles((theme) => ({
  mainBody: {
    marginTop: theme.spacing(11),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <div className={classes.mainBody}>
        <Switch>
          <Route path="/watch" exact component={WatchPage} />
          <Route path="/results" exact component={SearchPage} />
          <Route path="/channel/:id" component={ChannelPage} />
          <Route path="/account/login" exact component={LoginPage} />
          <Route path="/account/register" exact component={RegisterPage} />
          <ChannelOwnerRoute path="/studio" component={Studio} />
          <Route path="/404" render={() => <h1>404</h1>} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
