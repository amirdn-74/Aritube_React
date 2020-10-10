import { Grid, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import Parallax from "../utils/Parallax";
import ChannelCard from "../ChannelCard";
import ChannelTabs from "../channel/ChannelTabs";
import { Redirect, Route, Switch } from "react-router-dom";
import Videos from "../channel/Videos";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  headWrapper: {
    float: "left",
    width: "100%",
    marginTop: theme.spacing(-3),
    marginBottom: theme.spacing(3),
  },
}));

function ChannelPage(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.headWrapper}>
        <Parallax />
      </div>
      <Grid className={classes.grid} sx={12}>
        <ChannelCard bigView={true} />
        <ChannelTabs />
      </Grid>
      <Grid xs={12} className={classes.grid}>
        <Switch>
          <Route path="/channel" exact render={() => <h1>home</h1>} />
          <Route path="/channel/videos" exact component={Videos} />
          <Route
            path="/channel/playlists"
            exact
            render={() => <h1>playlists</h1>}
          />
          <Route
            path="/channel/community"
            exact
            render={() => <h1>community</h1>}
          />
          <Route path="/channel/about" exact render={() => <h1>about</h1>} />
          <Redirect to="/404" />
        </Switch>
      </Grid>
    </Fragment>
  );
}

export default ChannelPage;
