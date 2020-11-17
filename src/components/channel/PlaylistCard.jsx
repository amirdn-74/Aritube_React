import React, { Fragment, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  playlistCover: {
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
  playlistDetails: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
  },
  centerBlock: {
    flex: 1,
    marginTop: theme.spacing(1.5),
    paddingRight: theme.spacing(6),
  },
  playlistName: {
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
  videosInPlaylist: {
    float: 'right',
    position: "absolute",
    zIndex: 1,
    maxHeight: '100%',
    height: '100%',
    width: '45%',
    backgroundColor: "rgba(0,0,0,.8)",
    color: "#fff",
    fontSize: "2.5rem",
    textAlign: 'center',
    bottom: theme.spacing(0),
    right: theme.spacing(0),
    fontWeight: 400,
  },
  fullScreen: {
    width: '100%'
  },
  screenText: {
    float: 'left',
    width: '100%',
    marginTop: theme.spacing(5),
  },
  screenTextHover: {
    marginTop: theme.spacing(8.5),
  }
}));

function PlaylistCard({ title }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const toggleHover = (show) => {
    setHover(show);
  };

  return (
    <Grid item className={classes.card} xs={12} sm={6} md={4} lg={3}>
      <div 
      onMouseEnter={() => toggleHover(true)} 
      onMouseLeave={() => toggleHover(false)}
      >
        <Link to="/watch">
          <div className={classes.playlistCover}>
            <img src="/images/2.webp" alt="" className={classes.coverImage} />

            <div 
            className={`${classes.videosInPlaylist} ${hover && classes.fullScreen}`}
            >
              <span className={`${classes.screenText} ${hover && classes.screenTextHover}`}>
                {!hover && 
                <Fragment>
                  15
                <br/>
                Videos
                </Fragment>}
                {hover && 
                <Fragment>
                  Play All
                </Fragment>}
              </span>
            </div>
          </div>
        </Link>

        <div className={classes.playlistDetails}>
          <div className={classes.centerBlock}>
            <Link to="/watch" className={classes.playlistName} title={title}>
              {title}
            </Link>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default PlaylistCard;
