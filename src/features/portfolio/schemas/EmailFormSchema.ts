import * as Yup from 'yup';
import { maxLen } from './constants';

const EmailFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required'),
  name: Yup.string(),
  message: Yup.string()
    .min(10, ({ min }) => `Message must be ${min} characters`)
    .max(maxLen, 'Message too long')
    .required('Message is required'),
});

export default EmailFormSchema;
