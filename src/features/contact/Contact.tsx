import React, { FC } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import EmailFormSchema from '../portfolio/schemas/EmailFormSchema';
import SectionTitle from '../../common/style/SectionTitle';
import NavBar from '../../common/components/NavBar';

const ContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #28282b;
  font-family: 'Inter';
  textarea {
    resize: none;
  }
`;
const Contact: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
        const params = {
          reply_to: values.email,
          from_name: values.name || 'No Name Provided',
          to_name: 'Javi Guerra',
          message: values.message,
        };
        await emailjs.send(
          serviceId || '',
          templateId || '',
          params,
          publicKey || '',
        );
        // let mailto = `mailto:javier.guerra1001@gmail.com`;
        // mailto += `?subject=Message from ${values.name || 'no name'}`;
        // mailto += `&body=${values.message}`;
        // window.location.href = mailto;
        toast.success('Email sent successfully', {
          position: 'top-center',
          autoClose: 5000,
        });
        resetForm();
      } catch (err: any) {
        toast.error(err.message, {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    },
    validationSchema: EmailFormSchema,
    validateOnMount: true,
  });
  return (
    <ContactWrapper id="contact">
      <NavBar />
      <div className="pb-8 pt-5 lg:pb-16 px-4 mx-auto max-w-screen-md">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="mb-8 lg:mb-16 font-light text-center">
          Want to send me a message? Fill out the form below
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              Your Email
              <span className="text-orange-500">* (Required)</span>
            </label>
            {formik.errors.email && formik.touched.email && (
              <small className="text-red-600">
                {formik.errors.email}
              </small>
            )}
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5 ${
                formik.errors.email && formik.touched.email
                  ? 'border-2 border-red-600'
                  : 'border border-gray-300'
              }`}
              placeholder="youremail@email.com"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium"
            >
              Your Message
              <span className="text-orange-500">* (Required)</span>
            </label>
            {formik.errors.message && formik.touched.message && (
              <small className="text-red-600">
                {formik.errors.message}
              </small>
            )}
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`block p-2.5 mt-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm ${
                formik.errors.message && formik.touched.message
                  ? 'border-2 border-red-600'
                  : 'border border-gray-300'
              }`}
              placeholder="Leave a message"
              required
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 mt-2
          hover:bg-blue-500
          disabled:bg-slate-400
          "
            disabled={
              !formik.isValid || formik.isSubmitting || !formik.dirty
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
