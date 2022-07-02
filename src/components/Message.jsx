import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, changeInput } from '../store/messageSlice';
import { increment } from '../store/countSlice';
import { bot } from '../utils/functions';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import '../styles/message.css';

function useChatScroll(dep) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}
const MessageWrapper = styled(motion.section)`
border-radius: .5em;
background-color: #242124;
display: flex;
flex-direction: column;
position: fixed;
bottom: 5%;
right: 0%;
width: 50vw;
max-height: 20em;
overflow-y:scroll;
overflow-x: hidden !important;
@media (max-width: 768px){
  font-size: .7em;
  width: 75vw;
}
.bot-message {
  background-color: #3b3c36;
  width: 75%;
  margin-left: .5em;
}
.human-message {
  align-self: flex-end;
  background-color: #1E90FF;
  margin-right: .5em;
}
.one-message {
  margin-top: 1em;
  width: 75%;
  border-radius: 1em;
  word-wrap: break-word;
}
.one-message p {
  margin-left .5em;
}
.messages {
  display: flex;
  flex-direction: column;
}
a {
  color: white;
}
form {
  margin-top: 1em;
  position: relative;
  width: 100%;
}
input {
  width: 100%;
}
`;
const Message = ({displayComponent}) => {
  const dispatch = useDispatch();
  const animation = useAnimation();
  const input = useSelector((state)=> state.message.input)
  const messages = useSelector((state) => state.message.messages);
  const count = useSelector((state) => state.count.value);
  const ref = useChatScroll(messages);
  useEffect(() => {
    if (count === 0) {
      dispatch(addMessage({ user: "bot", text: bot('', count) }));
      dispatch(increment());
    }
  }, [dispatch, count]);
  const submitMessage = (e) => {
    e.preventDefault();
    const humanRes = input;
    dispatch(addMessage({ user: "human", text: input }))
    dispatch(changeInput(""));
    dispatch(addMessage({ user: "bot", text: bot(humanRes, count) }));
    dispatch(increment());
  }
  useEffect(() => {
    if (displayComponent) {
      animation.start({
        x: -10,
        y: 0,
        transition: {
          type: 'spring', duration:3, bounce: 0.3
        }
      })
    }
    if (!displayComponent) {
      animation.start({
        x: 0,
        y: 30,
        transition: {type: "spring", duration: 1}
      })
    }
  },[animation, displayComponent])
  return (
    <MessageWrapper className="content-container" ref={ref} initial={{x: 0, y: 100}} animate={animation}>
      <section className='messages'>
{messages.length > 0 && messages.map((eachmsg)=> {
        return (
          <section className={eachmsg.user ==='bot' ? 'bot-message one-message' : 'human-message one-message'} key={nanoid()}>
            <p>{eachmsg.text}</p>
          </section>
        )
      })}
      </section>
      <form onSubmit={submitMessage}>
        <input
          type="text"
          value={input}
          onChange={(e)=> dispatch(changeInput(e.target.value))}
        />
      </form>
      </MessageWrapper>
  )
}

export default Message;