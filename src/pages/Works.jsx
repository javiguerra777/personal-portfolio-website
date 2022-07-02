import React from 'react';
import jobs from "../data/jobs.json";
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Accordion } from 'react-bootstrap';

const JobWrapper = styled.section`
margin-bottom: 5%;
ul {
  list-style-type: none;
}
h1, h3 {
  text-align: center;
}
h3 {
  
}
.accordion-body {
  background-color: #E0D8B0; 
}
.date {
  text-decoration: line;
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
  padding-bottom: 1em;
}
.jobImage {
  height: auto;
  width: 10em;
}
button {
  background-color: white;
  cursor: pointer;
  width: 100vw;
}
button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
header {
  background-color: #333333;
  color: white;
  height: auto;
  margin-bottom: 1em;
  padding-top: .1em;
  padding-bottom: .5em;
}
`;
const Works = () => {  
  return (
    <JobWrapper>
      <header>
        <h3>Work History Since Graduating From Pacific in 2020</h3>
      </header>
      <section>
        {jobs.map((job) => {
          return (
            <section className='job-desc' key={nanoid()}>
              <section className='imgContainer'>
                <img className='jobImage' src={job.img} alt={`The logo of ${job.company}`} />
              <ul>
                <li><strong>Company:</strong> {job.company}</li>
                <li><strong>Job Title:</strong> {job.role}</li>
                <li><strong>Type of job:</strong> {job.type}</li>
                <li><strong>Dates of Employment:</strong> <u>{job.startDate} - {job.endDate}</u></li>
              </ul>
              </section>
              <Accordion>
                <Accordion.Item eventKey={job.id}>
                  <Accordion.Header>More Info</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <h3>Job Description</h3>
                    <p>{job.jobDescription}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </section>
          );
        })}
      </section>
    </JobWrapper>
  )
};

export default Works;