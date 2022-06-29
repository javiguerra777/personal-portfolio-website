import React, { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../utils/functions';

const ContentWrapper = styled.section`
display: flex;
flex-direction: row;
height: 100vh;
.contact-me-msg {
  width: 40vw;
  margin-left: 1em;
}
h1 {
  text-align: center;
}
`;
const FormWrapper = styled.form`
background-color: #333333;
color: white;
border-radius: 1em;
padding: 1em;
display: flex;
flex-direction: column;
align-self: center;
width: 50vw;
margin-left: 1em;
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
  border-bottom: teal .2em solid;
  margin-bottom: 1em;
}
textarea {
  border: none;
  margin-bottom: .5em;
}
button {
  width: 15em;
  border-radius: 2em;
  border: 1px solid #00BFFF;
  background-color: white;
  cursor: pointer;
}
.button {
  width: 15em;
  border-radius: 2em;
  border: 1px solid #00BFFF;
  color: #00BFFF;
}
.button:hover {
  background-color: #00BFFF;
  color: white;
  -webkit-box-shadow: 16px 7px 5px 1px #A63DFF; 
box-shadow: 16px 7px 5px 1px #A63DFF;
}
`;
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const minRequired = 30;
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
      <section className='contact-me-msg'>
        <h1>Contact Me</h1>
        <p>If you are interested in any of my projects, have a question, or want to collaborate with me please leave your contact information and a message below and I will get back to you as soon as I can.</p>
      </section>
      <section>
        <FormWrapper onSubmit={sendEmail}>
          <p>Enter Information</p>
          <input
            className="bottom-border-teal"
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="bottom-border-teal"
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
            rows="5" cols="10" required
          ></textarea>
          {minRequired - message.length > 0 && <p> Minimum Characters:{minRequired - message.length}</p>}
          <div className='btn-container'>
            <button type='submit' className={!formValidation() ? 'button' : ''} disabled={formValidation()}>Send Message</button>
          </div>
        </FormWrapper>
      </section>
    </ContentWrapper>
  );
};

export default Contact;