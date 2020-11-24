import * as yup from "yup";

const updateChannelProfileValidation = () => {
  return yup.object().shape({
    profilePicture: yup
      .mixed()
      .required()
      .test(
        "validType",
        "only images of type jpg and png are valid",
        (value) => {
          const validTypes = ["image/jpg", "image/jpeg", "image/png"];
          const fileType = value.type;

          if (validTypes.indexOf(fileType) === -1) return false;
          return true;
        }
      )
      .test("validSize", "image zise should be less than 1mb", (value) => {
        const fileSize = value.size;

        if (fileSize > 1048576) return false;
        return true;
      }),
  });
};

export default updateChannelProfileValidation;
