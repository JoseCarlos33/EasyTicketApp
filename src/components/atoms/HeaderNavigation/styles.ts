import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from 'src/utils/theme';

export const Header = styled.View`
  justify-content: space-between;
  padding: 7px 9px;
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
