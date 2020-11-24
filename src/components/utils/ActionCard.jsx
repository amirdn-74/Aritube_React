import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";

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
  oneLine: {
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
    overflow: "hidden",
  },
}));

let classes;

function ActionCard({ children, ...rest }) {
  classes = useStyles();

  return (
    <Grid className={classes.grid} item {...rest}>
      <div className={classes.controlPanel}>{children}</div>
    </Grid>
  );
}

export function PanelTitle({ title, actionButton, Icon, onAction }) {
  return (
    <div className={classes.panelTitle}>
      {title}
      {actionButton && (
        <IconButton
          color="primary"
          className={classes.panelTitleAction}
          onClick={onAction}
        >
          <Icon className={classes.icon} />
        </IconButton>
      )}
    </div>
  );
}

export function PanelBody({ children, oneLine }) {
  return (
    <div className={`${classes.panelBody} ${oneLine && classes.oneLine}`}>
      {children}
    </div>
  );
}

export default ActionCard;
