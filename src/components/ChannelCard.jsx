import { Button, IconButton, makeStyles } from "@material-ui/core";
import { NotificationsOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ChannelCard(props) {
  const user = useSelector((state) => state.auth.currentUser);
  const channel = useSelector((state) => state.channel.currentChannel);
  const useStyles = makeStyles((theme) => ({
    parent: {
      float: "left",
      width: "100%",
    },
    cover: {
      float: "left",
      width: props.bigView ? "8rem" : "6rem",
      height: props.bigView ? "8rem" : "6rem",
      borderRadius: "50%",
      marginRight: theme.spacing(2),
    },
    chName: {
      float: "left",
      fontSize: props.bigView ? "2.2rem" : "1.7rem",
      fontWeight: 500,
      color: "#333",
      marginTop: theme.spacing(0.8),
    },
    subscribers: {
      fontSize: props.bigView ? "1.9rem" : "1.5rem",
      color: "#555",
      display: "block",
    },
    button: {
      fontSize: "1.6rem",
    },
    notifIcon: {
      fontSize: "3rem",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <div style={{ float: "left" }}>
        <Link to="/channel">
          {channel.profile && (
            <img
              className={classes.cover}
              src={`http://localhost:4000/asset/channel/${channel.profile}`}
              alt=""
            />
          )}
        </Link>
        <Link className={classes.chName} to="/channel">
          {channel && channel.name}
        </Link>
        <div className={classes.subscribers}>
          {channel && channel.subscriber} subscribers
        </div>
      </div>

      {user && channel && channel.userId !== user._id && (
        <div style={{ float: "right" }}>
          <Button
            variant="contained"
            className={classes.button}
            color="secondary"
          >
            SUBSCRIBE
          </Button>
          <IconButton style={{ marginLeft: "1rem" }}>
            <NotificationsOutlined className={classes.notifIcon} />
          </IconButton>
        </div>
      )}

      {user && channel && channel.userId === user._id && (
        <div style={{ float: "right" }}>
          <Link to="/studio">
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
            >
              customize channel
            </Button>
          </Link>
        </div>
      )}

      {channel && !user && (
        <div style={{ float: "right" }}>
          <Link to="/account/login">
            <Button
              variant="outlined"
              className={classes.button}
              color="secondary"
            >
              login to subscribe
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ChannelCard;
