import React, { Fragment } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PlayerPlaceholder from "../PlayerPlaceholder";
import SideVideoCardPlaceholder from "../SideVideoCardPlaceholder";
import SideVideoCard from "../SideVideoCard";
import PlayerWrapper from "../PlayerWrapper";
import { Helmet } from "react-helmet";
import VideoDetails from "../VideoDetails";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  videoCard: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),
    float: "left",
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  },
  container: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
  },
}));

function WatchPage(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.container}>
        {/* <Grid item className={classes.videoCard} xs={12} lg={8}> */}
        {/* <PlayerPlaceholder /> */}
        <PlayerWrapper />
        {/* </Grid> */}

        <Grid className={classes.grid} item xs={12} lg={4}>
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
          <SideVideoCard />
        </Grid>
      </Grid>
      <Helmet>
        <title>
          Rami Malek Responds to Awkward Nicole Kidman Moment to Awkward Nicole
          Kidman Moment rtjngj kthsn frg
        </title>
      </Helmet>
    </Fragment>
  );
}

export default WatchPage;
