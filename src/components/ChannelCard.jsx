import { Button, IconButton, makeStyles } from "@material-ui/core";
import { NotificationsOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

function ChannelCard(props) {
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
          <img className={classes.cover} src="/images/c.jpg" alt="" />
        </Link>
        <Link className={classes.chName} to="/channel">
          Channel Name Here
        </Link>
        <div className={classes.subscribers}>12.6M subscribers</div>
      </div>

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
    </div>
  );
}

export default ChannelCard;
