import React, { useState } from 'react';
import { ImageRequireSource, ImageURISource, View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'src/utils/theme';
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
        <Title>
          {title}
        </Title>
        <View style={{ marginTop: 10 }}>
          <View style={{ marginBottom: 2 }}>
            <DayTitle>
              {day}
            </DayTitle>
          </View>
          <Subtitle>
            Evento {type}
          </Subtitle>
        </View>
      </InfoContent>
      <View>
        <IconButton onPress={toogleFavorite}>
          {
            isFavorite ? (
              <IconMaterial name="favorite" color={'red'} size={27} />
            ) : (
              <IconMaterial name="favorite-border" color={theme.color.gray_dark} size={27} />
            )
          }
        </IconButton>
      </View>
    </Container>
  );
}