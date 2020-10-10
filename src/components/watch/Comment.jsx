import { Button, makeStyles } from "@material-ui/core";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  comment: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: theme.spacing(2.5),
  },
  profilePic: {
    float: "left",
    width: "5.5rem",
    height: "5.5rem",
    background: "#5C6BC0",
    borderRadius: "50%",
    fontSize: "3rem",
    color: "#fff",
    textAlign: "center",
    lineHeight: "5rem",
    marginRight: theme.spacing(2),
  },
  commentBody: {
    flex: 1,
    fontSize: "1.7rem",
    float: "left",
    width: "100%",
  },
  title: {
    float: "left",
    width: "100%",
  },
  userName: {
    float: "left",
    fontWeight: 500,
    color: "#000",
  },
  time: {
    float: "left",
    color: "#555",
    marginLeft: theme.spacing(1),
  },
  commentText: {
    float: "left",
    width: "100%",
    marginTop: theme.spacing(1),
  },
  actionButtons: {
    float: "left",
    width: "100%",
    marginTop: theme.spacing(2),
  },
  button: {
    fontSize: "2.2rem",
    color: "#888",
  },
  likeCount: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function Comment(props) {
  const classes = useStyles();

  return (
    <div className={classes.comment}>
      <Link to="/">
        <div className={classes.profilePic}>B</div>
      </Link>

      <div className={classes.commentBody}>
        <div className={classes.title}>
          <Link to="/">
            <div className={classes.userName}>AmirDN</div>
          </Link>
          <div className={classes.time}>11 months ago</div>
        </div>
        <div className={classes.commentText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          quidem similique, praesentium animi officia quisquam saepe ipsam aut
          voluptatum voluptatem veritatis? Ab deleniti vitae omnis provident
          quae non dolores dolorem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Harum, quidem similique, praesentium animi officia
          quisquam saepe ipsam aut voluptatum voluptatem veritatis? Ab deleniti
          vitae omnis provident quae non dolores dolorem.
        </div>
        <div className={classes.actionButtons}>
          <Button variant="text" size="small">
            <ThumbUp className={classes.button} />
          </Button>
          <span className={classes.likeCount}>15</span>
          <Button variant="text" size="small">
            <ThumbDown className={classes.button} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
