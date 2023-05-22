import React, { FC, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { AiOutlineClose } from 'react-icons/ai';
import EmailFormSchema from '../schemas/EmailFormSchema';
import SectionTitle from '../../../common/style/SectionTitle';
import UseIsInViewport from '../../../common/hooks/UseIsInViewPort';
import { useAppDispatch } from '../../../app/store/hooks';
import { switchActiveView } from '../../../app/store/ViewSlice';

const ContactWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #28282b;
  font-family: 'Inter';
  textarea {
    resize: none;
  }
`;
type SuccessProps = {
  clearMessage: () => void;
  message: string;
};
type ErrorProps = {
  clearError: () => void;
  error: string;
};
const SuccessNotification: FC<SuccessProps> = ({
  clearMessage,
  message,
}) => (
  <div className="w-full fixed top-40 z-30 flex flex-row justify-center">
    <div className="bg-stone-900 text-white flex flex-row p-3 rounded items-center">
      <p className="text-lg">{message}</p>
      <button
        type="button"
        onClick={clearMessage}
        className="bg-red-600 ml-3 h-7 w-7 rounded flex items-center justify-center"
      >
        <AiOutlineClose />
      </button>
    </div>
  </div>
);
const ErrorNotificaion: FC<ErrorProps> = ({ clearError, error }) => (
  <div className="fixed top-40 w-full flex flex-row justify-center">
    <div className="bg-stone-900 flex flex-row items-center text-white p-3 rounded">
      <p className="text-red-500 text-lg">{error}</p>
      <button
        type="button"
        onClick={clearError}
        className="ml-3 h-7 w-7 rounded flex items-center justify-center bg-red-600 hover:bg-red-400"
      >
        <AiOutlineClose />
      </button>
    </div>
  </div>
);
const Contact: FC = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    message: '',
    error: '',
  });
  const contactRef = useRef<HTMLDivElement>(null);
  const inViewPort = UseIsInViewport(contactRef);
  useEffect(() => {
    if (inViewPort) {
      dispatch(switchActiveView('contact'));
    }
  }, [inViewPort, dispatch]);
  const clearMessage = () => {
    setState((prev) => ({ ...prev, message: '' }));
  };
  const clearError = () => {
    setState((prev) => ({ ...prev, error: '' }));
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        let mailto = `mailto:javier.guerra1001@gmail.com`;
        mailto += `?subject=Message from ${values.name || 'no name'}`;
        mailto += `&body=${values.message}`;
        window.location.href = mailto;
        resetForm();
        setState((prev) => ({ ...prev, message: 'Email was sent' }));
      } catch (err) {
        setState((prev) => ({
          ...prev,
          error: 'Error sending email',
        }));
      }
    },
    validationSchema: EmailFormSchema,
    validateOnMount: true,
  });
  return (
    <ContactWrapper id="contact">
      {state.message && (
        <SuccessNotification
          message={state.message}
          clearMessage={clearMessage}
        />
      )}
      {state.error && (
        <ErrorNotificaion
          error={state.error}
          clearError={clearError}
        />
      )}
      <div className="pb-8 pt-20 lg:pb-16 px-4 mx-auto max-w-screen-md">
        <SectionTitle ref={contactRef}>Contact Me</SectionTitle>
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
