import React from 'react';
import { Image, View } from 'react-native';
import HeartImg from 'src/assets/images/heart.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Container,
  Title,
  Subtitle,
  ContentTitles,
  ButtonContent
} from './styles';
import DefaultButton from 'src/components/atoms/DefaultButton';
import { theme } from 'src/utils/theme';

export default function EmptyFavorites({ navigation }: any) {
  return (
    <Container>
      <ContentTitles>
        <Title>
          Você ainda não possui itens nos favoritos
        </Title>
        <Subtitle style={{ marginTop: 21 }}>
          Clique no icone de coração em algum evento de sua preferencia para que apareçam nos seus favoritos.
        </Subtitle>
      </ContentTitles>
      <View style={{ alignItems: "center"}}>
        <Image
          source={HeartImg}
          style={{
            width: wp(58),
            height: hp(30),
            marginRight: 18
          }}
          resizeMode="contain"
        />
      </View>
      <ButtonContent>
        <DefaultButton
          onPress={() => navigation.navigate('TabScreens', { screen: 'Home', })}
          title="Ver ofertas"
          style={{
            borderRadius: 20
          }}
        />
      </ButtonContent>
    </Container>
  );
}
