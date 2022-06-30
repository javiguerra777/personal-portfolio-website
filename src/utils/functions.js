/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";
export function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
export function bot(response, count) {
  if (response.length === 0 && count === 0) {
    return "Welcome to Javi's page, ask me any questions you have about this website and I will be glad to assist, here are some phrases to get you started: 'How can I contact Javi?, tell me more about this website, or what project is Javi currently working on?'";
  }
  if (response.toLowerCase().includes("contact javi")) {
    return (<p>Click here to go to the contact form page<br /> <Link to="/contact">Contact Page</Link></p>);
  } 
  if (response.toLowerCase().includes("this website")) {
    return "This is Javi's personal website currently it is a small and basic site. This site showcases his github projects, his work experience and who he is. Javi aims to eventually become a software engineer and he enjoys his job as a React Apprentice";
  }
  if (response.toLowerCase().includes("working on") || response.toLowerCase().includes("project")) {
    return "Javi is trying to learn socket.io so he can revamp this website and turn it into something complex, if you want to learn more, type in socket or socket.io, he is also working on improving his video game development skills, he is trying to learn how to use PyGames to create an RPG and to also create a multi-player game, type in PyGames to learn more";
  }
  if (response.toLowerCase().includes("socket") || response.toLowerCase().includes("socket.io")) {
    return (<p>Socket.io or websockets is used to create and maintain a consistent connection with a webserver, socket.io is used for chat applications or multiplayer video games. Socket.io is used a lot in web development, but can also be used with other languages and programs, if you are interested check out the official website for Socket.io <br/> <a href="https://socket.io/" target="blank">Socket.io Official Site</a></p>)
  }
  if (response.toLowerCase().includes("pygames")) {
    return (<p>PyGames is a video development engine that uses the python programming language to develop games, if you are interested check out the official website <br/> <a href="https://www.pygame.org/news" target="blank">PyGames Official Website</a></p>)
  }
  return "Please ask a question regarding the website or topic related to the website";
}