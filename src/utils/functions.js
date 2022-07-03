/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";
export function validateEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
export function bot(response, count) {
  if (response.length === 0 && count === 0) {
    return (<p>Welcome to Javi's page, ask me any questions you have about this website and I will be glad to assist, here are some phrases to get you started: <u><strong>How can I contact Javi?</strong></u>, <u><strong>tell me more about this website</strong></u>, or <u><strong>what project is Javi currently working on?</strong></u></p>);
  }
  if (response.toLowerCase().includes("contact javi")) {
    return (
      <p>Click here to go to the contact form page<br /> <Link to="/contact">Contact Page</Link></p>
    );
  } 
  if (response.toLowerCase().includes("this website")) {
    return (
      <p>His website showcases his github projects, his work experience and who he is. Javi aims to eventually become a software engineer and he enjoys his job as a React Apprentice, if you would like more details, <u><strong>text tell me more</strong></u></p>
    );
  }
  if (response.toLowerCase().includes("tell me more")) {
    return (
      <div>
        <p>Here are some helpful links to navigate this website:</p>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/projects">Project Page</Link></li>
          <li><Link to="/works">Works Page</Link></li>
          <li><Link to="/contact">Contact Page</Link></li>
        </ul>
      </div>
    );
  }
  if (response.toLowerCase().includes("working on") || response.toLowerCase().includes("project")) {
    return (
      <p>Javi is trying to learn socket.io so he can revamp this website and turn it into something complex, if you want to learn more, <u><strong>text socket or socket.io to learn more</strong></u>, he is also working on improving his video game development skills, he is trying to learn how to use PyGames to create an RPG and to also create a multi-player game, <u><strong>text PyGames to learn more</strong></u></p>
    );
  }
  if (response.toLowerCase().includes("socket") || response.toLowerCase().includes("socket.io")) {
    return (
      <p><strong>Socket.io</strong> or <strong>websockets</strong> is used to create and maintain a consistent connection with a webserver, <strong>socket.io</strong> is used for chat applications or multiplayer video games. <strong>Socket.io</strong> is used a lot in web development, but can also be used with other languages and programs, if you are interested check out the official website for Socket.io <br /> <a href="https://socket.io/" target="blank">Socket.io Official Site</a></p>
    )
  }
  if (response.toLowerCase().includes("pygames")) {
    return (<p>PyGames is a video development engine that uses the python programming language to develop games, if you are interested check out the official website <br/> <a href="https://www.pygame.org/news" target="blank">PyGames Official Website</a></p>)
  }
  return "Please ask a question regarding the website or topic related to the website";
}