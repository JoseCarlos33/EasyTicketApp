import React from 'react';
import { Image } from 'react-native';
import ResquestAuthImg from 'src/assets/images/requestAuthImg.png';
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

export default function RequestAuth({navigation}: any) {
  return (
    <Container>
      <ContentTitles>
        <Title>
          Ooops...
        </Title>
        <Subtitle style={{marginTop: 21}}>
          Você precisa estar logado antes de acessar esta página
        </Subtitle>
      </ContentTitles>
      <Image
        source={ResquestAuthImg}
        style={{
          width: '100%',
          height: hp(30),
        }}
        resizeMode="contain"
      />
      <ButtonContent>
        <DefaultButton 
          onPress={() => navigation.navigate("LoginRegister", {
            isSignInSelected: true
          })}
          title="Login"
          style={{
            width: wp(40),
            borderRadius: 30
          }}
        />
        <DefaultButton 
          onPress={() => navigation.navigate("LoginRegister", {
            isSignInSelected: false
          })}
          title="Cadastro"
          style={{
            width: wp(40),
            borderRadius: 30,
            backgroundColor: theme.color.blue
          }}
        />
      </ButtonContent>
    </Container>
  );
}
