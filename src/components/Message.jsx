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
background-color: orange;
display: flex;
flex-direction: column;
position: fixed;
bottom: 5%;
padding-bottom: 2%;
right: 0%;
width: 30%;
height: 40%;
overflow-y:scroll;
overflow-x: hidden !important;
input {
  position: fixed;
  bottom: 5%;
  width: 100%
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
    dispatch(addMessage({ user: "Human", text: input }))
    dispatch(changeInput(""));
    dispatch(addMessage({ user: "bot", text: bot(humanRes, count) }));
    dispatch(increment());
  }
  return (
    <MessageWrapper className="content-container" ref={ref}>
      <div className='messages'>
{messages.length > 0 && messages.map((eachmsg)=> {
        return (
          <div key={nanoid()}>
            <p>{eachmsg.text}</p>
          </div>
        )
      })}
      </div>
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

export default Message