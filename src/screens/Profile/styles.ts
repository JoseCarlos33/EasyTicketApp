import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from 'src/utils/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: Inter-SemiBold;
`;

export const ButttonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: Inter-Regular;
  color: ${theme.color.blue_dark}
`;

export const MainContent = styled.View`
  flex: 1;
  padding: 21px;
  width: 100%;
`; 

export const ProfileButton = styled.TouchableOpacity`
  width: 100%;
  padding: ${hp(2)}px ${wp(5)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.color.white};
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 2px 2px 4px #ddd;
`;