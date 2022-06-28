import React, { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../utils/functions';

const ContentWrapper = styled.section`
display: flex;
flex-direction: row;
.contact-me-msg {
  width: 40vw;
  margin-left: 1em;
}
h1 {
  text-align: center;
}
`;
const FormWrapper = styled.form`
background-color: whitesmoke;
border-radius: 1em;
padding: 1em;
display: flex;
flex-direction: column;
align-self: center;
width: 50vw;
margin-left: 2em;
margin-top 2vw;
.btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
p {
  display: flex;
  align-self: center;
}
input {
  border: none;
  border-bottom: teal 1px solid;
  margin-bottom: 1em;
}
textarea {
  border: none;
  margin-bottom: .5em;
}
button {
  width: 15em;
  border-radius: 2em;
  border: 1px solid blue;
}
.button {
  width: 15em;
  border-radius: 2em;
  border: 1px solid blue;
  color: blue;
}
.button:hover {
  background-color: blue;
  color: white;
}
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
    } else {
      return false;
    }
  }
  formValidation();
  return (
    <ContentWrapper>
      <div className='contact-me-msg'>
        <h1>Contact Me</h1>
        <p>If you are interested in any of my projects, have a question, or want to collaborate with me please leave your contact information and a message below and I will get back to you as soon as I can</p>
      </div>
      <div>
        <FormWrapper onSubmit={sendEmail}>
          <p>Enter Information</p>
          <input
            className="bottom-border-teal"
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bottom-border-teal"
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
            rows="5" cols="10"
          ></textarea>
          {minRequired - message.length > 0 && <p> Minimum Characters for message:{minRequired - message.length}</p>}
          <div className='btn-container'>
            <button type='submit' className={!formValidation() ? 'button' : ''} disabled={formValidation()}>Send Message</button>
          </div>
        </FormWrapper>
      </div>
    </ContentWrapper>
  );
};

export default Contact;