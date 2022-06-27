/* eslint-disable no-useless-escape */
export function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
export function bot(response, count) {
  if (response.length === 0 && count === 0) {
    return "Welcome to Javi's page, ask me any questions you have about this website and I will be glad to assist, here are some phrases to get you started: 'How can I contact Javi?, tell me more about this website, or what project is Javi currently working on?'";
  }
  if (response.toLowerCase().includes("contact javi")) {
    return (`Click here to go to the contact form page`, <a href="http://localhost:3000/contact">Contact Page</a>);
  } 
  return "Please ask a question regarding the website or topic related to the website";
}