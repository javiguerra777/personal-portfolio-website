import React, { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../utils/functions';

const ContentWrapper = styled.section`
display: flex;
flex-direction: row;
`;
const FormWrapper = styled.form`
display: flex;
flex-direction: column;
`;
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const minRequired = 20;
  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  const formValidation = () => {
    //form validation
    if (!name || !email || !message || !validateEmail(email) || message.length < minRequired) {
      return true;
    }else {
      return false;
    }
  }
  formValidation();
  return (
    <ContentWrapper>
      <div>
        <h1>Contact Me</h1>
        {minRequired -message.length > 0 && <p>Words left:{minRequired - message.length}</p>}
      </div>
      <div>
        <FormWrapper onSubmit={sendEmail}>
          <input
            type="text"
            placeholder='Your name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Your email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder='Your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit' disabled={formValidation()}>Send Message</button>
        </FormWrapper>
      </div>
    </ContentWrapper>
  )
}

export default Contact;