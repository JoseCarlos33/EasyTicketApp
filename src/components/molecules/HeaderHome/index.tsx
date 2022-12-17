import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, StatusBar } from 'react-native';
import {
  Container,
  MainContent
} from './styles';

function HeaderHome() {

  return (
    <Container>
      <MainContent style={{marginTop: StatusBar.currentHeight}}>
       
      </MainContent>
    </Container>
  );
}

export default HeaderHome;