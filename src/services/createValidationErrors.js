const createValidationErrors = (error) => {
  if (error.response && error.response.status === 400) {
    const response = error.response.data;
    const errors = {};

    response.map((e) => (errors[e.path] = e.message));
    return errors;
  }
};

export default createValidationErrors;
