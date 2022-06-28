import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, changeInput } from '../store/messageSlice';
import { increment } from '../store/countSlice';
import { bot } from '../utils/functions';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
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
const MessageWrapper = styled.section`
border-radius: .5em;
background-color: #414a4c;
display: flex;
flex-direction: column;
position: fixed;
bottom: 5%;
padding-bottom: 2%;
right: 0%;
width: 50vw;
height: 19em;
overflow-y:scroll;
overflow-x: hidden !important;
input {
  position: fixed;
  bottom: 5%;
  width: 100%
}
.bot-message {
  background-color: green;
}
.human-message {
  background-color: blue;
}
`;
const Message = () => {
  const dispatch = useDispatch();
  const input = useSelector((state)=> state.message.input)
  const messages = useSelector((state) => state.message.messages);
  const count = useSelector((state) => state.count.value);
  const ref = useChatScroll(messages);
  useEffect(() => {
    dispatch(addMessage({ user: "bot", text: bot('', count) }));
    dispatch(increment());
  }, []);
  const submitMessage = (e) => {
    e.preventDefault();
    const humanRes = input;
    dispatch(addMessage({ user: "human", text: input }))
    dispatch(changeInput(""));
    dispatch(addMessage({ user: "bot", text: bot(humanRes, count) }));
    dispatch(increment());
  }
  return (
    <MessageWrapper className="content-container" ref={ref}>
      <section className='messages'>
{messages.length > 0 && messages.map((eachmsg)=> {
        return (
          <section className={eachmsg.user ==='bot' ? 'bot-message' : 'human-message'} key={nanoid()}>
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