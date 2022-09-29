import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup.string().min(3).max(15).required(),
  password: yup.string().required(),
});

export default loginSchema;
