import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import createValidationErrors from "../../../services/createValidationErrors";
import studioService from "../../../services/studioService";
import updateChannelBannerValidation from "../../../validations/updateChannelBanner.validation";
import SubmitButton from "../../forms/SubmitButton";
import { Modal, ModalContent, ModalTitle } from "../../utils/Modal";
import UploadBox from "../../utils/UploadBox";

function ChangeBannerModal({ open, onClose }) {
  const useStyles = makeStyles((theme) => ({
    preview: {
      float: "left",
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    previewImage: {
      float: "left",
      width: "100%",
      height: "auto",
    },
    errorBox: {
      float: "left",
      width: "100%",
      textAlign: "center",
      color: red[500],
    },
  }));

  const classes = useStyles();

  const [selectedFile, setSelectedFile] = useState(null);

  const handelDrop = (file) => {
    setSelectedFile(URL.createObjectURL(file));
  };

  const handelChange = (file) => {
    setSelectedFile(URL.createObjectURL(file));
  };

  const handleClose = () => {
    onClose();
    setSelectedFile(null);
  };

  const handleSubmit = async (values, actions) => {
    try {
      await studioService.updateChannelBanner(values.bannerPicture);
      onClose();
      setSelectedFile(null);
    } catch (error) {
      if (error.response && error.response.status === 400)
        actions.setErrors(createValidationErrors(error));
    }

    actions.setSubmitting(false);
  };

  return (
    <Modal open={open} onClose={handleClose} fullWidth maxWidth="md">
      <ModalTitle>Change Banner</ModalTitle>
      <ModalContent>
        <Formik
          initialValues={{ bannerPicture: "" }}
          validationSchema={updateChannelBannerValidation()}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({ errors }) => (
            <Fragment>
              {(!selectedFile || Object.keys(errors).length !== 0) && (
                <UploadBox
                  name="bannerPicture"
                  onChange={handelChange}
                  onDrop={handelDrop}
                />
              )}

              {selectedFile && Object.keys(errors).length === 0 && (
                <Fragment>
                  <div className={classes.preview}>
                    <img
                      className={classes.previewImage}
                      src={selectedFile}
                      alt=""
                    />
                    <div className={classes.errorBox}>
                      {errors.bannerPicture}
                    </div>
                  </div>

                  <SubmitButton text="chnage banner" />
                </Fragment>
              )}
            </Fragment>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

export default ChangeBannerModal;
