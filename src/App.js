import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { makeStyles } from "@material-ui/core";
import WatchPage from "./components/pages/WatchPage";
import SearchPage from "./components/pages/SearchPage";
import ChannelPage from "./components/pages/ChannelPage";

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
          <Route path="/watch" component={WatchPage} />
          <Route path="/results" component={SearchPage} />
          <Route path="/channel" component={ChannelPage} />
          {/* <Route path="/channel/playlists" exact component={ChannelPage} /> */}
          <Route path="/404" render={() => <h1>404</h1>} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
