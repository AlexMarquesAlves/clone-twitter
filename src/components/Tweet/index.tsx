import { ReactNode } from 'react';

import { Container } from './styles';

interface TweetProps {
  children: ReactNode;
}

function Tweet({ children }: TweetProps) {
  return (
    <Container>
      <h1>Tweet</h1>
      {children}
    </Container>
  );
};

export default Tweet;
