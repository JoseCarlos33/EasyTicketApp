import React from 'react';
import { Image } from 'react-native';
import BoxImg from 'src/assets/images/box.png';
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

export default function EmptyCart({navigation}: any) {
  return (
    <Container>
      <ContentTitles>
        <Title>
          Você ainda não possui itens no carrinho
        </Title>
        <Subtitle style={{marginTop: 21}}>
          Selecione a quantidade de ingressos na pagina do evento e clique em adicionar ao carrinho.
        </Subtitle>
      </ContentTitles>
      <Image
        source={BoxImg}
        style={{
          width: '100%',
          height: hp(30),
        }}
        resizeMode="contain"
      />
      <ButtonContent>
        <DefaultButton 
          onPress={() => navigation.navigate('TabScreens', { screen: 'Home',})}
          title="Ver ofertas"
          style={{
            borderRadius: 20
          }}
        />
      </ButtonContent>
    </Container>
  );
}
