import React from 'react';

interface ReactNode {
  children: React.ReactNode;
}
export interface NodeCard extends ReactNode {
  id: string;
}

export default ReactNode;
