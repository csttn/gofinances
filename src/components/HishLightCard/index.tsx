import React from 'react';

import {
  Container,
  Amount,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from './styles';

export const HishLightCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name='arrow-up-circle' />
      </Header>
      <Footer>
        <Amount>R$ 18.000,00</Amount>
        <LastTransaction>Ultima entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
};
