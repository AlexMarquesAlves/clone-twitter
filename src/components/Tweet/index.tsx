import {
   Container,
   Retweeted,
   RocketseatIcon,
   Body,
   Avatar,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon,
} from './styles';

function Tweet() {
   return (
      <Container>
         <Retweeted>
            <RocketseatIcon />
            Você retweetou
         </Retweeted>

         <Body>
            <Avatar />

            <Content>
               <Header>
                  <strong>Alex Marques Alves</strong>
                  <span>@meArchi_Duque</span>
                  <Dot />
               </Header>

               <Description>Foguete não tem ré 🚀</Description>

               <ImageContent />

               <Icons>
                  <Status>
                     <CommentIcon />
                     18
                  </Status>
                  <Status>
                     <RetweetIcon />
                     18
                  </Status>
                  <Status>
                     <LikeIcon />
                     999
                  </Status>
               </Icons>
            </Content>
         </Body>
      </Container>
   );
}

export default Tweet;
