import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import createValidationErrors from "../../../services/createValidationErrors";
import studioService from "../../../services/studioService";
import updateChannelProfileValidation from "../../../validations/updateChannelProfile.validation";
import SubmitButton from "../../forms/SubmitButton";
import { Modal, ModalTitle, ModalContent } from "../../utils/Modal";
import UploadBox from "../../utils/UploadBox";

function ChangeProfileModal({ open, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const useStyles = makeStyles((theme) => ({
    preview: {
      float: "left",
      width: "100%",
    },
    previewImageWrapper: {
      width: "40%",
      float: "left",
      paddingTop: "40%",
      marginLeft: "30%",
      marginBottom: theme.spacing(2),
      position: "relative",
    },
    previewImage: {
      width: "100%",
      height: "100%",
      float: "left",
      borderRadius: "50%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    errorBox: {
      float: "left",
      width: "100%",
      color: red[500],
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const handleDrop = (file) => {
    setSelectedFile(URL.createObjectURL(file));
  };

  const handleChange = (file) => {
    setSelectedFile(URL.createObjectURL(file));
  };

  const handleSubmit = async (values, actions) => {
    try {
      await studioService.updateChannelProfile(values.profilePicture);
      onClose();
      setSelectedFile(null);
    } catch (error) {
      if (error.response && error.response.status === 400)
        actions.setErrors(createValidationErrors(error));
    }

    actions.setSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    setSelectedFile(null);
  };

  return (
    <Modal open={open} onClose={handleClose} fullWidth maxWidth="md">
      <ModalTitle>Channel Profile</ModalTitle>
      <ModalContent>
        <Formik
          initialValues={{ profilePicture: "" }}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
          validationSchema={updateChannelProfileValidation()}
        >
          {({ errors }) => (
            <Fragment>
              {(!selectedFile || Object.keys(errors).length !== 0) && (
                <UploadBox
                  onDrop={handleDrop}
                  onChange={handleChange}
                  name="profilePicture"
                />
              )}

              {selectedFile && !errors.profilePicture && (
                <Fragment>
                  <div className={classes.preview}>
                    <div className={classes.previewImageWrapper}>
                      <img
                        src={selectedFile}
                        className={classes.previewImage}
                        alt=""
                      />
                    </div>

                    <div className={classes.errorBox}>
                      {errors.profilePicture}
                    </div>
                  </div>
                  <SubmitButton text="change profile" />
                </Fragment>
              )}
            </Fragment>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

export default ChangeProfileModal;
