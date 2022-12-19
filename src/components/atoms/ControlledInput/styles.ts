import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TextInput, Animated, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { theme } from '../../../utils/theme';


export const Input = styled(TextInput)`
  height: 54px;
  border-width: 1px;
  border-radius: 7px;
  border-color: ${theme.color.gray_medium};
  width: ${wp('80%')}px;
  padding-left: 17px;
  font-size: ${RFValue(15)}px;
  color: ${theme.color.blue};
`;

export const InputPassword = styled(TextInputMask)`
  height: 54px;
  border-width: 1px;
  border-radius: 7px;
  border-color: ${theme.color.gray_medium};
  width: ${wp('80%')}px;
  padding-left: 17px;
  font-size: ${RFValue(15)}px;
  color: ${theme.color.blue};
`;

export const InputLabel = styled.Text`
  /* font-family: ${theme.font.regular}; */
  font-size: ${RFValue(14.5)}px;
  text-align: center;
  color: ${theme.color.gray_medium};
`;

export const ErrorText = styled.Text`
  font-size: ${RFValue(12)}px;
  text-align: center;
`;

export const InputContent = styled(Animated.View)`
  align-items: flex-start;
  width: ${wp('80%')}px;
  margin-top: 21px;
`;

export const ContentLabel = styled.View`
  background-color: ${theme.color.white};
  position: absolute;
  top: -${hp(1.9)}px;
  left: 16px;
  padding: 5px;
`;
