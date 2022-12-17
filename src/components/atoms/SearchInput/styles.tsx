import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { theme } from '@utils/theme';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

export const Input = styled.View`
  flex-direction: row;
  background-color: ${theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(148,148,148,0.39);
`;

export const InputField = styled(TextInput).attrs({
  placeholderTextColor: theme.color.gray_medium
})`
  flex: 1;
  padding: 0 12px;
  color: ${theme.color.gray_medium};
  font-size: 16px;
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${theme.color.white};
  padding: 16px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Icon = styled(Feather)`
  color: ${theme.color.white};
`;
