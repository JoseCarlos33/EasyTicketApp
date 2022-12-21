import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '@utils/theme';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  width: ${wp(100)}px;
  align-items: center;
  flex: 1
`;

export const MainContent = styled.View`
  width: ${wp(100)}px;
  padding: 18px;
`; 

export const ListContent = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(7)}px;
`;

export const PageTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: Inter-SemiBold;
`;
