import React from 'react';
import jobs from "../data/jobs.json";
import styled from 'styled-components';
import { nanoid } from 'nanoid';
const JobWrapper = styled.section`
margin-bottom: 5%;
ul {
  list-style-type: none;
}
h1 {
  text-align: center;
}
.imgContainer{
  display: flex;
  flex-direction: row;
}
.job-desc {
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
}
`;
const Works = () => {
  const toggleCardDisplay =(firstid, id, {display}) => {
    if (firstid === id) {
      console.log(firstid, display);
      display = true;
      console.log(display);
    }
  }
  return (
    <JobWrapper>
      <header>
        <h1>Work history since graduating from Pacific in 2020</h1>
      </header>
      <hr/>
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
              <button type='button' onClick={()=>toggleCardDisplay(job.id, job.id, job)}>display addition details</button>
              </section>
              {job.display && (
                <section>
                  <p>{index}</p>
              </section>)}
            </section>
          );
        })}
      </section>
    </JobWrapper>
  )
};

export default Works;