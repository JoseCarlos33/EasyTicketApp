import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from 'src/utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px;
`;

export const InfoContent = styled.View`
  padding: 21px;
  background-color: ${theme.color.white};
  border-radius: 9px;
`;

export const ContentTitle = styled.Text`
  font-size: ${RFValue(21)}px;
  font-family: Inter-SemiBold;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: Inter-regular;
  color: ${theme.color.blue_dark};
`;