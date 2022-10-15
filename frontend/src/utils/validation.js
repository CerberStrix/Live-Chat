import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().min(3).max(15).required(),
  password: yup.string().required(),
});

export const validateName = (existNames) => {
  const channelSchema = yup.object().shape({
    name: yup.string().min(3, 'incorrect_symbols_count').max(20, 'incorrect_symbols_count').notOneOf(existNames, 'should_be_uniq')
      .required('incorrect_symbols_count'),
  });
  return channelSchema;
};
