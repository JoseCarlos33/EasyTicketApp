import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from 'src/utils/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: Inter-SemiBold;
  color: ${theme.color.blue_dark};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: Inter-SemiBold;
  color: ${theme.color.blue_dark};
  padding-right: 30px;
`;

export const ContentTitles = styled.View`
  padding: 21px;
  margin-top: 30px;
`;

export const ButtonContent = styled.View`
  padding: 21px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

