import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  margin-top: ${hp(6)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: Inter-SemiBold;
`;

export const CardsContent = styled(ScrollView).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true
})`
  margin-top: ${hp(2)}px;
`;

export const ListContent = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${hp(2)}px;
`;