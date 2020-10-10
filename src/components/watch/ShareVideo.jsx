import { Button } from "@material-ui/core";
import React from "react";
import { Share } from "@material-ui/icons";

function ShareVideo({ classes }) {
  return (
    <Button size="large" className={classes.buttons}>
      <Share className={classes.icons} />
      <span className={classes.buttonIconText}>SHARE</span>
    </Button>
  );
}

export default ShareVideo;
