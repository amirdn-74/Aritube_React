import { Edit } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import ActionCard, { PanelBody, PanelTitle } from "../../utils/ActionCard";
import Input from "../../forms/Input";
import { Formik } from "formik";
import SubmitButton from "../../forms/SubmitButton";
import { useSelector } from "react-redux";
import changeChannelNameSchema from "../../../validations/changeChannelName.validation";
import studioService from "../../../services/studioService";
import createValidationErrors from "../../../services/createValidationErrors";
import { Modal, ModalContent, ModalTitle } from "../../utils/Modal";

function ChangeChannelName(props) {
  const myChannel = useSelector((state) => state.studio.myChannel);
  const [modalState, setModalState] = useState(false);

  const handleOnAction = () => {
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
  };

  const handleSubmit = async (values, actions) => {
    try {
      await studioService.updateMyChannelName(values.channelName);
      handleModalClose();
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
          title="Change Name"
          actionButton={true}
          Icon={Edit}
          onAction={handleOnAction}
        />
        <PanelBody>{myChannel && myChannel.name}</PanelBody>
      </ActionCard>

      <Modal open={modalState} onClose={handleModalClose} fullWidth>
        <ModalTitle>Change Channel name</ModalTitle>
        <ModalContent>
          <Formik
            initialValues={{ channelName: myChannel && myChannel.name }}
            validationSchema={changeChannelNameSchema}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
            }}
          >
            {() => (
              <Fragment>
                <Input label="Channel Name" name="channelName" />
                <SubmitButton text="change channel name" />
              </Fragment>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default ChangeChannelName;
