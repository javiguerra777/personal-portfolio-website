import React, { FC } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import EmailFormSchema from '../schemas/EmailFormSchema';
import { maxLen } from '../schemas/constants';
import SectionTitle from '../../../common/components/SectionTitle';

const ContactWrapper = styled.div`
  width: 100%;
  background-color: whitesmoke;
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
        console.log(values);
        resetForm();
      } catch (err) {
        console.error(err);
      }
    },
    validationSchema: EmailFormSchema,
    validateOnMount: true,
  });
  return (
    <ContactWrapper id="contact">
      {formik.isSubmitting && (
        <div className="fixed top-20 w-screen flex flex-row justify-center z-40">
          <div className="bg-green-400 text-white">
            <p>Form is submitting</p>
          </div>
        </div>
      )}
      <div className="pb-8 pt-20 lg:pb-16 px-4 mx-auto max-w-screen-md">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="mb-8 lg:mb-16 font-light text-center">
          Want to send me a message? Fill out the form below
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
              <span className="text-orange-500">* (Required)</span>
            </label>
            {formik.errors.email && formik.touched.email && (
              <small className="text-red-400">
                {formik.errors.email}
              </small>
            )}
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5 ${
                formik.errors.email && formik.touched.email
                  ? 'border-2 border-red-300'
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
              className="block mb-2 text-sm font-medium text-gray-900"
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
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Message
              <span className="text-orange-500">* (Required)</span>
            </label>
            {formik.errors.message && formik.touched.message && (
              <small className="text-red-400">
                {formik.errors.message}
              </small>
            )}
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`block p-2.5 mt-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm ${
                formik.errors.message && formik.touched.message
                  ? 'border-2 border-red-300'
                  : 'border border-gray-300'
              }`}
              placeholder="Leave a message, minimum of 10 characters"
              required
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p
              className={`mt-2 mb-5 ${
                maxLen - formik.values.message.length < 0 &&
                'text-red-500'
              }`}
            >
              {maxLen - formik.values.message.length}{' '}
              {maxLen - formik.values.message.length < 0 &&
                'Message is too long'}
            </p>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700
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
