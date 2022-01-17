import { ReactNode } from 'react';
import StickyBox from 'react-sticky-box';

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

         <StickyBox>
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
         </StickyBox>
      </Container>
   );
}

export default SideBar;
