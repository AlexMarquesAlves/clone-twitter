import { ReactNode } from 'react';

import { Container } from './styles';

interface NewsProps {
   children?: ReactNode;
}

function News({ children }: NewsProps) {
   return (
      <Container>
         <h1>News</h1>
         {children}
      </Container>
   );
}

export default News;
