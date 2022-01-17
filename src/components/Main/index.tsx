import ProfilePage from '../ProfilePage';

import {
   Container,
   Header,
   BackIcon,
   ProfileInfo,
   BottomMenu,
   HomeIcon,
   SearchIcon,
   BellIcon,
   EmailIcon,
} from './styles';

function Main() {
   return (
      <Container>
         <Header>
            <button>
               <BackIcon />
            </button>

            <ProfileInfo>
               <strong>Alex Marques Alves</strong>
               <span>612 Tweets</span>
            </ProfileInfo>
         </Header>

         <ProfilePage />

         <BottomMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
         </BottomMenu>
      </Container>
   );
}

export default Main;
