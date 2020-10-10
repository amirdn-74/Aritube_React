import React, { useState } from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import ChannelCard from "./ChannelCard";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    marginBottom: theme.spacing(5),
    // height: "350px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
    // border: "1px solid #000",
  },
  videoCover: {
    width: "100%",
    paddingTop: "56.25%",
    position: "relative",
  },
  coverImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
  videoDetails: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
  },
  channelThumbnail: {
    float: "left",
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    backgroundColor: "red",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  centerBlock: {
    flex: 1,
    marginTop: theme.spacing(1.5),
    paddingRight: theme.spacing(6),
  },
  videoName: {
    color: "#000",
    fontSize: "1.8rem",
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    height: "5rem",
    float: "left",
    marginBottom: theme.spacing(1.3),
  },
  secondaryDetails: {
    float: "left",
    color: "#555",
    fontSize: "1.6rem",
    height: "2.3rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    "-webkit-line-clamp": 1,
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
  },
  moreVertButton: {
    width: "4rem",
    height: "4rem",
    position: "absolute",
    right: 0,
    top: theme.spacing(2.2),
  },
  moreVert: {
    fontSize: "2.5rem",
  },
  videoLenght: {
    position: "absolute",
    zIndex: 1,
    padding: ".4rem .8rem",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "1.3rem",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    borderRadius: "3px",
    fontWeight: 500,
  },
  channelName: {
    position: "relative",
    float: "left",
    width: "100%",
  },
  channelInfo: {
    position: "absolute",
    width: "100%",
    background: "#fff",
    top: "100%",
    zIndex: 1,
    boxShadow: "0 0 1.5rem rgba(0, 0, 0, .2)",
    borderRadius: ".5rem",
    padding: theme.spacing(2),
  },
}));

function VideoCard({ videoName }) {
  const classes = useStyles();
  // const [showChannelInfo, setShowChannelInfo] = useState(true);

  return (
    <Grid item className={classes.card} xs={12} sm={6} md={4} lg={3}>
      <Link to="/watch">
        <div className={classes.videoCover}>
          <img src="/images/3.webp" alt="" className={classes.coverImage} />

          <div className={classes.videoLenght}>8:39</div>
        </div>
      </Link>

      <div className={classes.videoDetails}>
        <Link to="/channel">
          <img
            src="/images/c.jpg"
            className={classes.channelThumbnail}
            alt=""
          />
        </Link>
        <div className={classes.centerBlock}>
          <Link to="/watch" className={classes.videoName} title={videoName}>
            {videoName}
          </Link>
          <Link to="/channel" className={`${classes.channelName}`}>
            <div className={classes.secondaryDetails}>Channel Name Here</div>
            {/* <div className={classes.channelInfo}>
              <ChannelCard small />
            </div> */}
          </Link>
          <div className={classes.secondaryDetails}>
            <span>135K views</span> - <span>1 year ago</span>
          </div>
        </div>
        <IconButton className={classes.moreVertButton}>
          <MoreVert className={classes.moreVert} />
        </IconButton>
      </div>
    </Grid>
  );
}

export default VideoCard;
