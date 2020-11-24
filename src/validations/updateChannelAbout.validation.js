import * as yup from "yup";

const updateChannelAboutValidation = () => {
  return yup.object().shape({
    about: yup.string().max(1999).required(),
  });
};

export default updateChannelAboutValidation;
