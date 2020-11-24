import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import ActionCard, { PanelBody, PanelTitle } from "../../utils/ActionCard";
import Input from "../../forms/Input";
import SubmitButton from "../../forms/SubmitButton";
import studioService from "../../../services/studioService";
import createValidationErrors from "../../../services/createValidationErrors";
import { useSelector } from "react-redux";
import updateChannelAboutValidation from "../../../validations/updateChannelAbout.validation";

function ChangeChannelAbout(props) {
  const channel = useSelector((state) => state.studio.myChannel);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleChangeAbout = async (values, actions) => {
    try {
      await studioService.updateChannelAbout(values.about);
      handleDialogClose();
    } catch (error) {
      if (error.response && error.response.status === 400)
        actions.setErrors(createValidationErrors(error));
    }

    actions.setSubmitting(false);
  };

  return (
    <Fragment>
      <ActionCard xs={12} md={6}>
        <PanelTitle
          title="About Channel"
          actionButton={true}
          Icon={Edit}
          onAction={handleDialogOpen}
        />

        <PanelBody oneLine>{channel && channel.about}</PanelBody>
      </ActionCard>

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        style={{ fontSize: "1.7rem" }}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <span style={{ fontSize: "1.7rem" }}>About Channel</span>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ about: channel && channel.about }}
            onSubmit={handleChangeAbout}
            validationSchema={updateChannelAboutValidation}
          >
            {() => (
              <Fragment>
                <Input name="about" label="About Channel" multiline rows={15} />
                <SubmitButton text="change channel about" />
              </Fragment>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default ChangeChannelAbout;
