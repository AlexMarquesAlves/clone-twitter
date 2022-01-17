import { ReactNode } from 'react';

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
            <p>{'lorem ipsum dolor sit amet.'.repeat(90)}</p>
         </Body>
      </Container>
   );
}

export default SideBar;
