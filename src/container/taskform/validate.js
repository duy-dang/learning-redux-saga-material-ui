const validate = (values) => {
  const errors = {};
  const { title, description } = values;
  if (!title) {
    errors.title = 'vui lòng nhập thông tin';
  } else if (title.length < 5) {
    errors.title = 'phải nhập hơn 5 kí tự';
  }
  return errors;
};

export default validate;
