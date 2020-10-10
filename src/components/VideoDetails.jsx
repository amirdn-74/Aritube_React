import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import ChannelCard from "./ChannelCard";
import Sentence from "./watch/Sentence";
import LikeDislike from "./watch/LikeDislike";
import ShareVideo from "./watch/ShareVideo";
import SaveVideo from "./watch/SaveVideo";
import Comments from "./watch/Comments";

const useStyles = makeStyles((theme) => ({
  videoName: {
    width: "96.7%",
    fontSize: "2.2rem",
    fontWeight: 400,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    paddingTop: theme.spacing(1),
    float: "left",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  videoActions: {
    float: "left",
    width: "96.7%",
    minHeight: "5rem",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderBottom: "1px solid #ccc",
  },
  actionButtons: {
    float: "right",
  },
  buttons: {
    fontSize: "1.6rem",
    marginLeft: "1rem",
  },
  icons: {
    fontSize: "2.7rem",
    color: "#888",
  },
  buttonIconText: {
    color: "#888",
    marginLeft: "1rem",
    fontSize: "1.6rem",
  },
  views: {
    float: "left",
    fontSize: "1.7rem",
    color: "#555",
    marginTop: theme.spacing(1),
  },
  descriptions: {
    float: "left",
    width: "96.7%",
    borderBottom: "1px solid #ccc",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function VideoDetails(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.videoName}>
        Rami Malek Responds to Awkward Nicole Kidman Moment to Awkward Nicole
        Kidman Mot rtjngj kthsn frg
      </div>

      <div className={classes.videoActions}>
        <div className={classes.views}>11,158,966 views - Apr 16, 2018</div>

        <div className={classes.actionButtons}>
          <LikeDislike classes={classes} />
          <ShareVideo classes={classes} />
          <SaveVideo classes={classes} />
        </div>
      </div>

      <div className={classes.descriptions}>
        <ChannelCard />
        <Sentence />
      </div>

      <Comments />
    </Fragment>
  );
}

export default VideoDetails;
