import React from 'react';
import { StatusBar } from 'react-native';
import HeaderHome from '../../components/molecules/HeaderHome';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <HeaderHome />
    </Container>
  );
}

export default Home;