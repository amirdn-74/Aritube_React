import { Button } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import React from "react";

function SaveVideo({ classes }) {
  return (
    <Button size="large" className={classes.buttons}>
      <PlaylistAdd className={classes.icons} />
      <span className={classes.buttonIconText}>SAVE</span>
    </Button>
  );
}

export default SaveVideo;
