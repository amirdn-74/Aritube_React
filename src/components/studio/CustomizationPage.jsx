import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import ChangeChannelAbout from "./components/ChangeChannelAbout";
import ChangeChannelBanner from "./components/ChangeChannelBanner";
import ChangeChannelName from "./components/ChangeChannelName";
import ChangeChannelProfile from "./components/ChangeChannelProfile";

function CustomizationPage() {
  return (
    <Fragment>
      <Grid container>
        <ChangeChannelName />

        <ChangeChannelAbout />

        <ChangeChannelProfile />

        <ChangeChannelBanner />
      </Grid>
    </Fragment>
  );
}

export default CustomizationPage;
