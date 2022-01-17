import { ReactNode } from 'react';

import { Container } from './styles';

interface MenuBarProps {
   children?: ReactNode;
}

function MenuBar({ children }: MenuBarProps) {
   return (
      <Container>
         <h1>MenuBar</h1>
         {children}
      </Container>
   );
}

export default MenuBar;
