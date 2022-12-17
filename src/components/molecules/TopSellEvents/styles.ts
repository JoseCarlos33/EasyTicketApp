import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';
import { theme } from 'src/utils/theme';

export const Container = styled.View`
  margin-top: ${hp(6)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: Inter-SemiBold;
`;

export const ListContent = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${hp(2)}px;
`;

export const BottomTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: Inter-SemiBold;
  color: ${theme.color.blue}
`;

export const BottomContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(3)}px;
`;