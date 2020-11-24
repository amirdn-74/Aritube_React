import { makeStyles } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import ActionCard, { PanelBody, PanelTitle } from "../../utils/ActionCard";
import ChangeBannerModal from "./ChangeBannerModal";

function ChangeChannelBanner() {
  const [openModal, setOpenModal] = useState(false);

  const useStyles = makeStyles((theme) => ({
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
      position: "relative",
    },
    screen: {
      position: "absolute",
      top: "10%",
      left: "10%",
      width: "80%",
      height: "80%",
      border: "3px solid #333",
      backgroundColor: "white",
    },
    screenBanner: {
      float: "left",
      width: "100%",
      height: "25%",
      backgroundColor: "red",
    },
  }));
  const classes = useStyles();

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <ActionCard xs={12} md={6}>
        <PanelTitle
          title="Banner Image"
          actionButton={true}
          Icon={CloudUpload}
          onAction={handleModalOpen}
        />
        <PanelBody>
          <div className={classes.panelLeftPicWrapper}>
            <div className={classes.panelLeftPic}>
              <div className={classes.screen}>
                <div className={classes.screenBanner}></div>
              </div>
            </div>
          </div>
          Your profile picture will appear where your channel is presented on
          YouTube, like next to your videos and comments. Changes you make here
          will be reflected across other Google services.
        </PanelBody>
      </ActionCard>

      <ChangeBannerModal open={openModal} onClose={handleModalClose} />
    </Fragment>
  );
}

export default ChangeChannelBanner;
