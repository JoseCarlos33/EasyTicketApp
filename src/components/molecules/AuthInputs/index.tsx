import React from 'react';
import ControlledInput from 'src/components/atoms/ControlledInput';

import {
  Container,
  SubmitButton,
  TitleButton
} from './styles';
import { useFormContext } from 'react-hook-form';
import { useAuth } from 'src/hooks/useAuth';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface AuthFormProps {
  isSignInSelected: boolean;
}

function AuthInputs({
  isSignInSelected
}: AuthFormProps) {
  const { signIn, signed, signOut} = useAuth();
  const { handleSubmit, formState: { errors }, reset } = useFormContext();
  const navigation = useNavigation<any>();

  async function handleSubmitRegister(values: any) {
    if(!isSignInSelected){
      Alert.alert("Conta criada com sucesso!")
      navigation.navigate("LoginRegister", {
        isSignInSelected: true
      })
      reset();
      return;
    }

    let data = {
      email: values.email as string,
      password: values.password as string
    }
    
    signIn(data);
  }

  return (
    <Container>
      {
        !isSignInSelected && (
          <ControlledInput
            name="name"
            label='Nome'
          />
        )
      }
      <ControlledInput
        name="email"
        label='Email'
      />
      {
        !isSignInSelected && (
          <ControlledInput
            name="city"
            label='Cidade'
          />
        )
      }
      <ControlledInput
        name="password"
        label='Senha'
        secureTextEntry
      />
      {
        !isSignInSelected && (
          <ControlledInput
            name="confirmPassword"
            label='Confirmar senha'
            secureTextEntry
          />
        )
      }
      <View style={{marginTop: 18}}>
        <SubmitButton onPress={handleSubmit(values => handleSubmitRegister(values))}>
          <TitleButton>
            {isSignInSelected ? "Entrar" : "Cadastrar"}
          </TitleButton>
        </SubmitButton>
      </View>
    </Container>
  );
}

export default AuthInputs;