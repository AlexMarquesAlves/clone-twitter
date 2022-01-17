import { ReactNode } from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

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
               title="Talvez você curta"
               elements={[
                  <FollowSuggestion
                     name="Luiz Batanero"
                     nickname="@luizbatanero"
                  />,
                  <FollowSuggestion
                     name="Luke Morales"
                     nickname="@lukemorales"
                  />,
                  <FollowSuggestion
                     name="Camila Magalhães"
                     nickname="@camilaamgl"
                  />,
               ]}
            />
            <List
               title="O que está acontecendo"
               elements={[
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
               ]}
            />
         </Body>
      </Container>
   );
}

export default SideBar;
