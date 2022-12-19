import React from 'react';
import { ScrollView, View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthInputs from 'src/components/molecules/AuthInputs';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Header, IconButton, PageTitle } from '../EventDetail/styles';

IconMaterial.loadFont();

const loginSchema = yup.object({
  email: yup.string().required('Campo obrigatório').min(2, "Campo obrigatório"),
  password: yup.string().required('Campo obrigatório').min(2, "Campo obrigatório"),
}).required();

const signupSchema = yup.object({
  name: yup.string().required('Campo obrigatório').min(2, "Campo obrigatório"),
  email: yup.string().required('Campo obrigatório').min(2, "Campo obrigatório"),
  password: yup.string().required('Campo obrigatório').min(2, "Campo obrigatório"),
  confirmPassword: yup.string().required('Campo obrigatório').min(2, "Campo obrigatório").oneOf([yup.ref('password'), null], 'A senha e a confirmação de senha estão diferentes')
}).required();

function LoginRegister({ route, navigation }: any) {
  const isSignInSelected = route.params.isSignInSelected
  const formHandler = useForm({ resolver: isSignInSelected ? yupResolver(loginSchema) : yupResolver(signupSchema) });

  return (
    <FormProvider {...formHandler}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
        <Container>
          <Header style={{ width: "100%"}}>
            <IconButton onPress={() => navigation.goBack()}>
              <IconMaterial name="arrow-back" size={27} />
            </IconButton>
          </Header>
          <Title>
            Seja Bem-Vindo(a)!
          </Title>
          <View style={{marginTop: 20}}>
            <AuthInputs
              isSignInSelected={isSignInSelected}
            />
          </View>
        </Container>
      </ScrollView>
    </FormProvider>
  )

}

export default LoginRegister;