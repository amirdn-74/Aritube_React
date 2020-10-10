import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import SideVideoCard from "../SideVideoCard";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
}));

function SearchPage(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} xs={12}>
      <SideVideoCard smallScreen />
      <SideVideoCard smallScreen />
      <SideVideoCard smallScreen />
      <SideVideoCard smallScreen />
    </Grid>
  );
}

export default SearchPage;
