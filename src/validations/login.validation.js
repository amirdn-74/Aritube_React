import * as yup from "yup";

const loginValidation = () => {
  return yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Pasword"),
  });
};

export default loginValidation;
