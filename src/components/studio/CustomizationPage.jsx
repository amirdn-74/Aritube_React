import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React, { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  controlPanel: {
    float: "left",
    width: "100%",
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    boxShadow: "0 0 .5rem rgba(0, 0, 0, .1)",
  },
  panelTitle: {
    fontSize: "1.7rem",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  panelTitleAction: {
    float: "right",
  },
  panelLeftPicWrapper: {
    float: "left",
    width: "40%",
    marginRight: theme.spacing(2),
  },
  panelLeftPic: {
    float: "left",
    width: "100%",
    paddingTop: "60%",
    backgroundColor: "#eee",
  },
  panelBody: {
    fontSize: "1.5rem",
    color: "#555",
  },
  panelActions: {
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: "2rem",
  },
}));

function CustomizationPage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container>
        <Grid className={classes.grid} item xs={12} md={6}>
          <div className={classes.controlPanel}>
            <div className={classes.panelTitle}>
              Channel Name
              <IconButton color="primary" className={classes.panelTitleAction}>
                <Edit className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.panelBody}>I Love Code</div>
          </div>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={6}>
          <div className={classes.controlPanel}>
            <div className={classes.panelTitle}>
              About Channel
              <IconButton color="primary" className={classes.panelTitleAction}>
                <Edit className={classes.icon} />
              </IconButton>
            </div>
            <div className={classes.panelBody}>
              Your profile picture will appear where...
            </div>
          </div>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={6}>
          <div className={classes.controlPanel}>
            <div className={classes.panelTitle}>Profile Picture</div>
            <div className={classes.panelLeftPicWrapper}>
              <div className={classes.panelLeftPic}></div>
            </div>
            <div className={classes.panelBody}>
              Your profile picture will appear where your channel is presented
              on YouTube, like next to your videos and comments. Changes you
              make here will be reflected across other Google services.
            </div>
            <div className={classes.panelActions}>
              <Button
                variant="text"
                color="primary"
                style={{ fontSize: "1.5rem" }}
              >
                upload
              </Button>
            </div>
          </div>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={6}>
          <div className={classes.controlPanel}>
            <div className={classes.panelTitle}>Banner image</div>
            <div className={classes.panelLeftPicWrapper}>
              <div className={classes.panelLeftPic}></div>
            </div>
            <div className={classes.panelBody}>
              This image will appear across the top of your channel
            </div>
            <div className={classes.panelActions}>
              <Button
                variant="text"
                color="primary"
                style={{ fontSize: "1.5rem" }}
              >
                upload
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default CustomizationPage;
