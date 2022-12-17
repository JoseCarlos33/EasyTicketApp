import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '@utils/theme';

export const Container = styled.SafeAreaView`
  width: ${wp(100)}px;
  align-items: center;
  flex: 1
`;

export const MainContent = styled.ScrollView`
  width: ${wp(100)}px;
  padding: 18px;
`; 
