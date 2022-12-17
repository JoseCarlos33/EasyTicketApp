import React, { useState } from 'react';
import { ImageRequireSource, ImageURISource, View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CardImage,
  ImageContent,
  Title,
  InfoContent,
  CardHeader,
  Subtitle,
  DayTitle,
  IconButton
} from './styles';

interface NewWeekEventCardProps {
  title: string;
  image: ImageURISource | ImageURISource[] | ImageRequireSource;
  onPress: () => void;
  id?: number;
  day: string;
  type: string;
}

IconMaterial.loadFont();

export default function DefaultEventCard({ image, title, day, onPress, type, id }: NewWeekEventCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toogleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <Container key={id}>
      <ImageContent>
        <CardImage source={image} resizeMode="stretch" />
      </ImageContent>
      <InfoContent>
        <CardHeader>
          <DayTitle>
            {day}
          </DayTitle>
          <IconButton onPress={toogleFavorite}>
            {
              isFavorite ? (
                <IconMaterial name="favorite" color={'red'} size={23} />
              ) : (
                <IconMaterial name="favorite-border" color={'red'} size={23} />
              )
            }
          </IconButton>
        </CardHeader>
        <Title>
          {title}
        </Title>
        <View style={{ marginTop: 10 }}>
          <Subtitle>
            Tipo do evento:
          </Subtitle>
          <Subtitle>
            {"  "} - {type}
          </Subtitle>
        </View>
      </InfoContent>
    </Container>
  );
}