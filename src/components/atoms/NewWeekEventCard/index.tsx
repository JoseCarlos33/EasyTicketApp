import React from 'react';
import { ImageRequireSource, ImageURISource, View } from 'react-native';
import {
  Container,
  BackgroundImage
} from './styles';

interface NewWeekEventCardProps {
  image: ImageURISource | ImageURISource[] | ImageRequireSource;
  onPress: () => void;
  id?: number;
}

function NewWeekEventCard({ image, onPress, id }: NewWeekEventCardProps) {
  return (
    <Container key={id} onPress={onPress}>
      <BackgroundImage source={image} resizeMode="cover"/>
    </Container>
  );
}

export default NewWeekEventCard;