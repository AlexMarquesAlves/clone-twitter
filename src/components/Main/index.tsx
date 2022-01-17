import { ReactNode } from 'react';

import { Container } from './styles';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <Container>
      <h1>Main</h1>
      {children}
    </Container>
  );
};

export default Main;
