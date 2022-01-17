import { ReactNode } from 'react';

import { Container } from './styles';

interface ProfilePageProps {
  children: ReactNode;
}

function ProfilePage({ children }: ProfilePageProps) {
  return (
    <Container>
      <h1>ProfilePage</h1>
      {children}
    </Container>
  );
};

export default ProfilePage;
