import { Button } from "@material-ui/core";
import { ThumbDownAlt, ThumbUp } from "@material-ui/icons";
import React, { Fragment } from "react";

function LikeDislike({ classes }) {
  return (
    <Fragment>
      <Button size="large" className={classes.buttons}>
        <ThumbDownAlt className={classes.icons} />
        <span className={classes.buttonIconText}>2.8K</span>
      </Button>
      <Button size="large" className={classes.buttons}>
        <ThumbUp className={classes.icons} />
        <span className={classes.buttonIconText}>317</span>
      </Button>
    </Fragment>
  );
}

export default LikeDislike;
