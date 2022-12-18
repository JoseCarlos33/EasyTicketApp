import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '@utils/theme';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  width: 100%;
  height: ${hp(7)}px;
  background-color: ${theme.color.green};
  border-radius: 7px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: Inter-SemiBold;
  color: ${theme.color.white}
`;
