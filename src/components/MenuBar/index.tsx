import { ReactNode } from 'react';

import Button from '../Button';

import {
   Container,
   Topside,
   Logo,
   MenuButton,
   HomeIcon,
   BellIcon,
   EmailIcon,
   FavoriteIcon,
   ProfileIcon,
   Botside,
   Avatar,
   ProfileData,
   ExitIcon,
} from './styles';

interface MenuBarProps {
   children?: ReactNode;
}

function MenuBar({ children }: MenuBarProps) {
   return (
      <Container>
         <Topside>
            <Logo />

            <MenuButton>
               <HomeIcon />
               <span>Página inicial</span>
            </MenuButton>

            <MenuButton>
               <BellIcon />
               <span>Notificações</span>
            </MenuButton>

            <MenuButton>
               <EmailIcon />
               <span>Mensagens</span>
            </MenuButton>

            <MenuButton>
               <FavoriteIcon />
               <span>Favoritados</span>
            </MenuButton>

            <MenuButton>
               <ProfileIcon className="active" />
               <span>Perfil</span>
            </MenuButton>

            <Button>
               <span>Tweetar</span>
            </Button>
         </Topside>

         <Botside>
            <Avatar />

            <ProfileData>
               <strong>Alex Marques Alves</strong>
               <span>@meArchi_Duque</span>
            </ProfileData>

            <ExitIcon />
         </Botside>
      </Container>
   );
}

export default MenuBar;
