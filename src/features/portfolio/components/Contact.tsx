import React, { FC } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

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
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <ContactWrapper id="contact">
      <div className="pb-8 pt-20 lg:pb-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center">
          Want to send me a message? Fill out the form below
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label 
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email<span>*</span>
              </label>
            <input 
            type="email" 
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5"
            placeholder="youremail@email.com"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
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
             />
          </div>
          <div className="sm:col-span-2">
          <label 
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Message<span>*</span>
            </label>
            <textarea
            id="message"
            name="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 mb-5"
            placeholder="Leave a message..."
            required
            value={formik.values.message}
            onChange={formik.handleChange}
             />
          </div>
          <button 
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700
          hover:bg-blue-500"        
          >
            Send Message
          </button>
        </form>
      </div>
    </ContactWrapper>
  )
}

export default Contact;
