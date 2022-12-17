import React from 'react';
import { View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { Container } from './styles';

const Test: React.FC = () => {
  return <View 
    style={{
      width: wp(100),
      height: hp(100),
      backgroundColor: "#ddd"
    }}
  />;
}

export default Test;