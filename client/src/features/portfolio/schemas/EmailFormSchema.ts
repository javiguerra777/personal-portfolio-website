import * as Yup from 'yup';

const EmailFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required'),
  name: Yup.string(),
  message: Yup.string().required('Message is required'),
});

export default EmailFormSchema;
