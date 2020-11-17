import * as yup from "yup";

const registerValidation = () => {
  return yup.object().shape({
    name: yup.string().min(5).max(50).required().label("Name"),
    email: yup.string().email().required().label("Email"),
    password: yup.string().min(6).max(59).required().label("Password"),
    confirmPassword: yup
      .string()
      .required()
      .test("confirmPassword", "passwords are not match", function (value) {
        if (value !== this.parent.password) return false;
        return true;
      }),
  });
};

export default registerValidation;
