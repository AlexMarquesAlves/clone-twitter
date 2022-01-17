import { ReactNode } from 'react';

import { Container } from './styles';

interface SideBarProps {
   children?: ReactNode;
}

function SideBar({ children }: SideBarProps) {
   return (
      <Container>
         <h1>SideBar</h1>
         {children}
      </Container>
   );
}

export default SideBar;
