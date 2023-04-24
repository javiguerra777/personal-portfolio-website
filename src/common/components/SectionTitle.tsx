import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionTitle: FC<Props> = ({ children }) => (
  <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900">
    {children}
  </h2>
);

export default SectionTitle;
