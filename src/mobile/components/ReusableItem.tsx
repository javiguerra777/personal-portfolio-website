import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ReactNode from '../modules/ReactNode';

function ReusableItem({ children }: ReactNode) {
  return (
    <ListGroup.Item className="d-flex flex-column">
      {children}
    </ListGroup.Item>
  );
}

export default ReusableItem;
