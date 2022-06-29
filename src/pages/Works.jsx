import React, { useState } from 'react';
import jobs from "../data/jobs.json";
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const JobWrapper = styled.section`
margin-bottom: 5%;
ul {
  list-style-type: none;
}
h1, h3 {
  text-align: center;
}
.experiences {
  width: 75%;
}
.imgContainer{
  display: flex;
  flex-direction: row;
}
.job-desc {
  background-color: #E0D8B0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: black 1px solid;
  border-bottom: black 1px solid;
  margin-bottom: 1em;
}
.jobImage {
  margin-top 1em;
  height: 5em;
  width: 10em;
}
button {
  margin-bottom: 1em;
  background-color: white;
  border-radius: 14em;
  width: 3em;
  height: 3em;
  cursor: pointer;
}
button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
header {
  background-color: #333333;
  color: white;
  height: 3em;
  margin-bottom: 1em;
  padding-top: .1em;
  padding-bottom: .5em;
}
`;
const Works = () => {
  const [display, setDisplay] = useState(false);
  const toggleCardDisplay =(firstid, id) => {
    if (firstid === id) {
      if (!display) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }
  }
  return (
    <JobWrapper>
      <header>
        <h1>Work History Since Graduating From Pacific in 2020</h1>
      </header>
      <section>
        {jobs.map((job, index) => {
          return (
            <section className='job-desc' key={nanoid()}>
              <section className='imgContainer'>
                <img className='jobImage' src={job.img} alt={`The logo of ${job.company}`} />
              <ul>
                <li>Company: {job.company}</li>
                <li>Job Title: {job.role}</li>
                <li>Type of job: {job.type}</li>
                <li>Dates of Employment: {job.startDate} - {job.endDate}</li>
              </ul>
              </section>
              <section>
                <button type='button' onClick={() => toggleCardDisplay(job.id, job.id, job)}>{display ? <AiOutlineUp/> : <AiOutlineDown/>}</button>
              </section>
              {display && (
                <section className='experiences'>
                  <div>
                    <h3>Job Description</h3>
                    <p>{job.jobDescription}</p>
                  </div>
                </section>)
              }
            </section>
          );
        })}
      </section>
    </JobWrapper>
  )
};

export default Works;