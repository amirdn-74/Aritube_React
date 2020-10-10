import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const useStyles = makeStyles((theme) => ({
  commentsWrapper: {
    float: "left",
    marginTop: "1.5rem",
    width: "100%",
  },
  commentsNumShow: {
    fontSize: "2.2rem",
    float: "left",
    width: "100%",
  },
}));

function Comments(props) {
  const classes = useStyles();
  return (
    <div className={classes.commentsWrapper}>
      <div className={classes.commentsNumShow}>234 Comments</div>

      <CommentInput />

      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default Comments;
