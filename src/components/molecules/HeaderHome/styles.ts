import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '../../../utils/theme';

export const Container = styled.View`
  height: ${hp(30)}px;
  width: ${wp(100)}px;
  background-color: ${theme.color.blue};
`;

export const MainContent = styled.View`
  height: ${hp(15)}px;
  width: ${wp(100)}px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 18px;
`; 
