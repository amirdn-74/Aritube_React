import * as yup from "yup";

const createChannelSchema = () => {
  return yup.object().shape({
    name: yup.string().min(3).max(30).required(),
  });
};

export default createChannelSchema;
