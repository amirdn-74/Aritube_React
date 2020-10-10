import { Grid as div, Grid, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import VideoCard from "../VideoCard";

const useStyles = makeStyles((theme) => ({
  grid: {
    float: "left",
    width: "100%",
  },
}));

function Videos(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
      <VideoCard
        videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
    Norton Show"
      />
    </Grid>
  );
}

export default Videos;
