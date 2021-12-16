import React, { ReactElement } from 'react';
import { HishLightCard } from '../../components/HishLightCard';
import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HightLightCards,
} from './styles';

export function Dashboard(): ReactElement {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/43582741?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Cleyton</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HightLightCards>
        <HishLightCard />
        <HishLightCard />
        <HishLightCard />
      </HightLightCards>
    </Container>
  );
}
