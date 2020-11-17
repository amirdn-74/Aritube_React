import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import {
  AccountBox,
  Close,
  ExitToApp,
  PersonOutlined,
  PlayCircleOutline,
} from "@material-ui/icons";
import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../services/authService";
import channleService from "../services/channleService";
import createValidationErrors from "../services/createValidationErrors";
import createChannelSchema from "../validations/createChannel.validation";
import Input from "./forms/Input";
import SubmitButton from "./forms/SubmitButton";
import Dropdown from "./utils/Dropdown";
import DropdownItem from "./utils/DropdownItem";
import HideOnLogin from "./utils/HideOnLogin";
import ShowOnLogin from "./utils/ShowOnLogin";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    backgroundColor: blue[800],
    fontSize: "2rem",
    cursor: "pointer",
  },
  accountLink: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.7),
    fontSize: "1.3rem",
    display: "none",
    float: "right",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function NavAuth(props) {
  const user = useSelector((state) => state.auth.currentUser);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [chModal, setChModal] = useState(false);
  const handleChModalOpen = () => setChModal(true);
  const handleChModalClose = () => setChModal(false);

  const handleCreateChannle = async (values, actions) => {
    try {
      const channel = await channleService.createChannel(values.name);
      handleChModalClose(false);
      history.push(`/channel/${channel._id}`);
    } catch (error) {
      if (error.response && error.response.status === 400)
        actions.setErrors(createValidationErrors(error));
    }
    actions.setSubmitting(false);
  };

  const handleLogout = async () => {
    await auth.logout();
  };

  const classes = useStyles();

  return (
    <Fragment>
      <ShowOnLogin>
        <div
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          style={{ float: "right" }}
        >
          <Avatar className={classes.avatar}>
            {user && user.name.substring(0, 1).toUpperCase()}
          </Avatar>
        </div>
        <Dropdown id="menu" anchorEl={anchorEl} onClose={handleMenuClose}>
          <DropdownItem
            href="/"
            onClose={handleMenuClose}
            Icon={PersonOutlined}
          >
            Your Account
          </DropdownItem>
          {user && user.hasChannel && (
            <DropdownItem
              href="/channel/5fabce4507cf9b4ea489b9c0"
              onClose={handleMenuClose}
              Icon={AccountBox}
            >
              Your Channel
            </DropdownItem>
          )}
          {user && !user.hasChannel && (
            <div onClick={handleChModalOpen}>
              <DropdownItem onClose={handleMenuClose} Icon={AccountBox}>
                Make Channel
              </DropdownItem>
            </div>
          )}
          <DropdownItem
            href="/studio"
            onClose={handleMenuClose}
            Icon={PlayCircleOutline}
          >
            Aritube Studio
          </DropdownItem>
          <div onClick={handleLogout}>
            <DropdownItem onClose={handleMenuClose} Icon={ExitToApp}>
              Sign Out
            </DropdownItem>
          </div>
        </Dropdown>
      </ShowOnLogin>

      <HideOnLogin>
        <Link to="/account/login">
          <Button
            variant="outlined"
            color="default"
            size="large"
            className={classes.accountLink}
            startIcon={<PersonOutlined />}
          >
            Account
          </Button>
        </Link>
      </HideOnLogin>

      <ShowOnLogin>
        {user && !user.hasChannel && (
          <Dialog style={{ fontSize: "1.7rem" }} open={chModal}>
            <Formik
              initialValues={{ name: "" }}
              validationSchema={createChannelSchema}
              onSubmit={(values, actions) =>
                handleCreateChannle(values, actions)
              }
            >
              {() => (
                <Fragment>
                  <DialogTitle>
                    Create New Channel
                    <IconButton
                      onClick={handleChModalClose}
                      style={{ float: "right" }}
                    >
                      <Close />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent>
                    <Input label="channel name" name="name" />
                    <SubmitButton
                      style={{ fontSize: "1.3rem" }}
                      variant="outlined"
                      color="primary"
                      text="create channel"
                    />
                  </DialogContent>
                </Fragment>
              )}
            </Formik>
          </Dialog>
        )}
      </ShowOnLogin>
    </Fragment>
  );
}

export default NavAuth;
