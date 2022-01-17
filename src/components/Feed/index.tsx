import { ReactNode } from 'react';

import { Container, Tab } from './styles';

interface FeedProps {
   children?: ReactNode;
}

function Feed({ children }: FeedProps) {
   return (
      <Container>
         <Tab>Tweets</Tab>

         {/* <Tweets>
            <Tweeet />
            <Tweeet />
            <Tweeet />
            <Tweeet />
            <Tweeet />
         </Tweets> */}
      </Container>
   );
}

export default Feed;
