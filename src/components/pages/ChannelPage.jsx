import { Grid, makeStyles } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import Parallax from "../utils/Parallax";
import ChannelCard from "../ChannelCard";
import ChannelTabs from "../channel/ChannelTabs";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Videos from "../channel/Videos";
import Playlists from "../channel/Playlists";
import { useSelector } from "react-redux";
import channelService from "../../services/channleService";

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
  const history = useHistory();
  const channel = useSelector((state) => state.channel.currentChannel);
  const [validChannel, setValidChannel] = useState(false);

  const fetchChannel = async () => {
    try {
      await channelService.getChannel(props.match.params.id);
      setValidChannel(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        history.push("/404");
      }
    }
  };

  useEffect(() => {
    fetchChannel();
  }, []);

  return (
    <Fragment>
      {validChannel && (
        <Fragment>
          <div className={classes.headWrapper}>
            {channel && channel.banner && (
              <Parallax
                image={`http://localhost:4000/asset/channel/${channel.banner}`}
              />
            )}
          </div>
          <Grid className={classes.grid} sx={12}>
            <ChannelCard bigView={true} />
            <ChannelTabs channelId={props.match.params.id} />
          </Grid>
          <Grid xs={12} className={classes.grid}>
            <Switch>
              <Route path="/channel/:id" exact render={() => <h1>home</h1>} />
              <Route path="/channel/:id/videos" exact component={Videos} />
              <Route
                path="/channel/:id/playlists"
                exact
                component={Playlists}
              />
              <Route
                path="/channel/community"
                exact
                render={() => <h1>community</h1>}
              />
              <Route
                path="/channel/about"
                exact
                render={() => <h1>about</h1>}
              />
              <Redirect to="/404" />
            </Switch>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ChannelPage;
