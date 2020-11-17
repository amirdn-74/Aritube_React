import { Grid, makeStyles } from "@material-ui/core";
import { Add, Visibility } from "@material-ui/icons";
import React from "react";
import ActionCard, { PanelBody, PanelTitle } from "../utils/ActionCard";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    float: "left",
    width: "100%",
    height: "30rem",
  },
}));

function DashboardPage(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <ActionCard xs={12} md={4}>
        <PanelTitle
          title="Channel Analytics"
          actionButton={true}
          Icon={Visibility}
        />
        <PanelBody>
          <div className={classes.sectionBody}>nothing here</div>
        </PanelBody>
      </ActionCard>
      <ActionCard xs={12} md={4}>
        <PanelTitle title="My Videos" actionButton={true} Icon={Add} />
        <PanelBody>
          <div className={classes.sectionBody}>nothing here</div>
        </PanelBody>
      </ActionCard>
      <ActionCard xs={12} md={4}>
        <PanelTitle title="Comments" actionButton={true} Icon={Visibility} />
        <PanelBody>
          <div className={classes.sectionBody}>nothing here</div>
        </PanelBody>
      </ActionCard>
    </Grid>
  );
}

export default DashboardPage;
