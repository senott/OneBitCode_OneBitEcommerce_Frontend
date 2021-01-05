import React from 'react';

import { TitleAndPathTitle, TitleAndPathSpan } from './styles';

interface TitleAndPathProps {
  title: string;
  path: string;
}

const TitleAndPath: React.FC<TitleAndPathProps> = ({ title, path }) => {
  return (
    <>
      <TitleAndPathTitle>{title}</TitleAndPathTitle>
      <TitleAndPathSpan>{path}</TitleAndPathSpan>
    </>
  );
};

export default TitleAndPath;
