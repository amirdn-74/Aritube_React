import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Switch } from "react-router-dom";
import StudioNavbar from "./StudioNavbar";
import ChannelOwnerRoute from "../protectedRoutes/ChannelOwnerRoute";
import DashboardPage from "./DashboardPage";
import CustomizationPage from "./CustomizationPage";
import VideosPage from "./VideosPage";
import PlaylistsPage from "./PlaylistsPage";
import CommentsPage from "./CommentsPage";
import SettingsPage from "./SettingsPage";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  mainContent: {
    float: "left",
    width: "100%",
  },
}));

function Studio() {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} item xs={12}>
      <StudioNavbar />
      <div className={classes.mainContent}>
        <Switch>
          <ChannelOwnerRoute
            path="/studio"
            exact
            render={() => <Redirect to="/studio/dashboard" />}
          />
          <ChannelOwnerRoute
            path="/studio/dashboard"
            exact
            component={DashboardPage}
          />
          <ChannelOwnerRoute
            path="/studio/customization"
            exact
            component={CustomizationPage}
          />
          <ChannelOwnerRoute
            path="/studio/videos"
            exact
            component={VideosPage}
          />
          <ChannelOwnerRoute
            path="/studio/playlists"
            exact
            component={PlaylistsPage}
          />
          <ChannelOwnerRoute
            path="/studio/comments"
            exact
            component={CommentsPage}
          />
          <ChannelOwnerRoute
            path="/studio/settings"
            exact
            component={SettingsPage}
          />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Grid>
  );
}

export default Studio;
