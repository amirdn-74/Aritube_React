import { Avatar, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { CloudUpload } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import ActionCard, { PanelBody, PanelTitle } from "../../utils/ActionCard";
import ChangeProfileModal from "./ChangeProfileModal";

function ChangeChannelProfile() {
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
    avatar: {
      marginTop: theme.spacing(0.5),
      marginLeft: theme.spacing(2),
      backgroundColor: blue[800],
      fontSize: "5rem",
      cursor: "default",
      padding: "2.5rem",
      fontWeight: 400,
      float: "left",
      marginRight: theme.spacing(2),
    },
    profile: {
      float: "left",
      marginTop: theme.spacing(0.5),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      cursor: "default",
      width: "8.7rem",
      height: "8.7rem",
    },
    profileImage: {
      float: "left",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  }));

  const user = useSelector((state) => state.auth.currentUser);
  const channel = useSelector((state) => state.studio.myChannel);
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <Fragment>
      <ActionCard xs={12} md={6}>
        <PanelTitle
          title="Profile Picture"
          actionButton={true}
          Icon={CloudUpload}
          onAction={handleModalOpen}
        />
        <PanelBody>
          {channel && !channel.profile && (
            <Avatar className={classes.avatar}>
              {user && user.name.substring(0, 1).toUpperCase()}
            </Avatar>
          )}
          {channel && channel.profile && (
            <div className={classes.profile}>
              <img
                src={`http://localhost:4000/asset/channel/${
                  channel && channel.profile
                }`}
                className={classes.profileImage}
                alt=""
              />
            </div>
          )}
          Your profile picture will appear where your channel is presented on
          YouTube, like next to your videos and comments. Changes you make here
          will be reflected across other Google services.
        </PanelBody>
      </ActionCard>

      <ChangeProfileModal open={openModal} onClose={handleModalClose} />
    </Fragment>
  );
}

export default ChangeChannelProfile;
