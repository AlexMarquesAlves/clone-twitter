import React from 'react';
import { Container, Wrapper } from './styles';
import Main from '../Main';

export default function index() {
   return (
      <Container>
         <Wrapper>
            {/* <MenuBar /> */}
            <Main />
            {/* <SideBar /> */}
         </Wrapper>
      </Container>
   );
}
