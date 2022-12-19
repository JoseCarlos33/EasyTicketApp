import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Animated, TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.color.white};
  align-items: center;
  height: ${hp(100)}px;
  width: ${wp(100)}px;
`;

export const FooterContent = styled.View`
  position: absolute;
  bottom: 0;
`;

export const Title = styled.Text`
  margin-top: ${hp('8%')}px;
  font-family: "Inter-SemiBold";
  font-size: ${RFValue(20)}px;
  text-align: center;
`;

export const TopBarContent = styled.View`
  margin-top: ${hp('3%')}px;
  width: ${wp('40%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TopBarSwitchBar = styled(Animated.View)`
  height: 1px;
  width: 44%;
  background-color: ${theme.color.blue};
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const ButtonTopBar = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding: 7px;
`;

export const TitleButtonTopBar = styled.Text`
  /* font-family: ${theme.font.medium}; */
  font-size: ${RFValue(16)}px;
  padding-bottom: 4px;
`;
