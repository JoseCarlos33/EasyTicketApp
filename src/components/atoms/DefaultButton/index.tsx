import React from 'react';
import { Button, Title } from './styles';

interface DefaultButtonProps{
  title: string;
  onPress: () => void;
  styles?: React.CSSProperties;
}

function DefaultButton({title, onPress, styles}: DefaultButtonProps) {
  return (
    <Button
      onPress={onPress}
    >
      <Title>
        {title}
      </Title>
    </Button>
    );
}

export default DefaultButton;