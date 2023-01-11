import React from 'react';
import { Card } from 'react-bootstrap';
import { NodeCard } from '../modules/ReactNode';

function ReusableCard({ children, id }: NodeCard) {
  return (
    <Card
      className="text-dark mt-2 mb-3 information d-flex flex-column align-items-center p-2"
      id={id}
    >
      {children}
    </Card>
  );
}

export default ReusableCard;
