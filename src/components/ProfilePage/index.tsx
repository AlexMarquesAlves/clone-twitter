import { ReactNode } from 'react';

import Feed from '../Feed';

import {
   Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton,
} from './styles';

interface ProfilePageProps {
   children?: ReactNode;
}

function ProfilePage({ children }: ProfilePageProps) {
   return (
      <Container>
         <Banner>
            <Avatar />
         </Banner>

         <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Alex Marques ALves</h1>
            <h2>@meArchi_Duque</h2>

            <p>
               Developer at{' '}
               <a href="https://github.com/AlexMarquesAlves">
                  Alex Marques Alves
               </a>
            </p>

            <ul>
               <li>
                  <LocationIcon />
                  Juazeiro, Brasil
               </li>
               <li>
                  <CakeIcon />
                  Nascido(a) em 29 de dezembro de 2000
               </li>
            </ul>

            <Followage>
               <span>
                  seguindo <strong>94</strong>
               </span>
               <span>
                  <strong>672 </strong> seguidores
               </span>
            </Followage>
         </ProfileData>

         <Feed />
      </Container>
   );
}

export default ProfilePage;
