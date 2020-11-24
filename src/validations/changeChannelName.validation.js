import * as yup from "yup";

const changeChannelNameSchema = () => {
  return yup.object().shape({
    channelName: yup.string().min(3).max(30).required(),
  });
};

export default changeChannelNameSchema;
