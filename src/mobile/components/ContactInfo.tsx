import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ReusableCard from './ReusableCard';
import ReusableItem from './ReusableItem';

function ContactInfo() {
  return (
    <ReusableCard id="contact">
      <Card.Title>Contact Information</Card.Title>
      <Card.Body>
        <ListGroup>
          <ReusableItem>
            <strong className="align-self-center mb-2">
              Current Location
            </strong>
            <div>
              I current live in Stockton, CA. But I am open to roles
              in other locations, and I am open to working remotely.
            </div>
          </ReusableItem>
          <ReusableItem>
            <strong className="mb-2 align-self-center">
              Career Interests
            </strong>
            <div>
              I would love to focus on front end development, I really
              enjoy working on the client side of web apps, mobile
              apps, and desktop apps. But I have an understanding of
              server side development if those skills are needed.
            </div>
          </ReusableItem>
          <ReusableItem>
            <strong className="mb-1 align-self-center">Email</strong>
            <div>
              My email is <u>javier.guerra1001@gmail.com</u>, email me
              if you are interested in collaborating, want to chat, or
              if you believe you are in need of my skills.
            </div>
          </ReusableItem>
        </ListGroup>
      </Card.Body>
    </ReusableCard>
  );
}

export default ContactInfo;
