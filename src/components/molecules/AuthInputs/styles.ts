import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from 'src/utils/theme';

export const Container = styled.View`
  flex: 1;
`;

export const SubmitButton = styled(RectButton)`
  background-color: ${theme.color.blue};
  border-radius: 7px;
  height: 54px;
  width: ${wp('80%')}px;
  justify-content: center;
`;

export const TitleButton = styled.Text`
  /* font-family: ${theme.font.medium}; */
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${theme.color.white};
`;
