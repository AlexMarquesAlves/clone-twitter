import { ReactNode } from 'react';

import { Container } from './styles';

interface ListProps {
   children?: ReactNode;
}

function List({ children }: ListProps) {
   return (
      <Container>
         <h1>List</h1>
         {children}
      </Container>
   );
}

export default List;
