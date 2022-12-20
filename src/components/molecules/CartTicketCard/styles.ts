import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '@utils/theme';

export const Container = styled.TouchableOpacity`
  padding: 15px 0px ;
  justify-content: space-between;
  flex-direction: row;
`;

export const ImageContent = styled.View`
  width: ${wp(30)}px;
  height: ${hp(12)}px;  
  border-radius: 10px;
  margin-top: 2px;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: Inter-SemiBold;
`;

export const InfoContent = styled.View`
  flex: 1;
  margin-left: 12px;
  justify-content: space-between;
`;

export const CardHeader = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: Inter-regular;
  color: ${theme.color.blue_dark};
`;

export const DayTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: Inter-SemiBold;
  color: ${theme.color.blue};
`;
