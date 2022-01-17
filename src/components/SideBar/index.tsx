import { ReactNode } from 'react';
import List from '../List';

import {
   Container,
   SearchWrapper,
   SearchInput,
   SearchIcon,
   Body,
} from './styles';
interface SideBarProps {
   children?: ReactNode;
}

function SideBar({ children }: SideBarProps) {
   return (
      <Container>
         <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <SearchIcon />
         </SearchWrapper>

         <Body>
            <List
               title="Talvez voce curta"
               elements={[<h1>Teste</h1>, <h1>Teste</h1>, <h1>Teste</h1>]}
            />
            <List
               title="Talvez voce curta"
               elements={[<h1>Teste</h1>, <h1>Teste</h1>, <h1>Teste</h1>]}
            />
         </Body>
      </Container>
   );
}

export default SideBar;
