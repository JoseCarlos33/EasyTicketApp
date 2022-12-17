import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '@utils/theme';

export const Container = styled.TouchableOpacity`
  width: ${wp(66)}px;
  height: ${hp(22)}px;
  background-color: ${theme.color.gray_medium};
  border-radius: 7px;
  overflow: hidden;
  margin-right: 18px;
`;

export const BackgroundImage = styled.ImageBackground`
  /* width: 100px;
  height: 100px; */
  flex: 1
`;