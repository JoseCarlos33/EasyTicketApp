import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ImageRequireSource, ImageURISource, View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from 'src/hooks/useAuth';
import { useFavorite } from 'src/hooks/useFavorites';
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
  id: number;
  day: string;
  type: string;
}

IconMaterial.loadFont();

export default function DefaultEventCard({ image, title, day, onPress, type, id }: NewWeekEventCardProps) {
  const{ favorites, handleAddFavorites, handleRemoveFavorites } = useFavorite();
  const { signed } = useAuth();
  const navigation = useNavigation<any>();

  const toogleFavorite = () => {
    if (!signed) {
      Alert.alert("É necessário fazer o login para adicionar itens no carrinho", 
      "",
      [
        {text: 'OK', onPress: () => navigation.navigate('TabScreens', { screen: 'Perfil' })},
      ],
      {cancelable: false},
      )
      return;
    }

    const isCurrentProductInFavorites = !!favorites ? favorites.includes(id) : false;
    if(isCurrentProductInFavorites) handleRemoveFavorites(id);
    if(!isCurrentProductInFavorites) handleAddFavorites(id);
  }

  return (
    <Container key={id} onPress={onPress}>
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
            favorites?.includes(id) ? (
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