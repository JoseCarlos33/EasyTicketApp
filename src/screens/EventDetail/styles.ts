import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from 'src/utils/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
`;

export const Header = styled.View`
  justify-content: space-between;
  padding: 7px 19px;
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 10px;
  ${(p: any) => p.style ? {...p?.style} : {}}
`;

export const PageTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: Inter-SemiBold;
`;

export const InfoTitle = styled.Text`
  font-size: ${RFValue(21)}px;
  font-family: Inter-SemiBold;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: Inter-Regular;
  color: ${theme.color.gray_dark};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DayTimeDescription = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: Inter-Regular;
  color: ${theme.color.gray_dark};
`;

export const TicketText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: Inter-Medium;
`;

export const MainContent = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const ImageContent = styled.View`
  width: 100%;
  height: ${hp(30)}px;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InfoContent = styled.View`
  background-color: ${theme.color.white};
  padding: 15px 28px;
`;


