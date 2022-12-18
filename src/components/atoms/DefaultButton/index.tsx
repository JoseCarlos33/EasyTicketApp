import React from 'react';
import { Button, Title } from './styles';
import { StyleProp, ViewStyle} from 'react-native';

interface DefaultButtonProps{
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

function DefaultButton({title, onPress, style}: DefaultButtonProps) {
  return (
    <Button
      onPress={onPress}
      style={style}
    >
      <Title>
        {title}
      </Title>
    </Button>
    );
}

export default DefaultButton;