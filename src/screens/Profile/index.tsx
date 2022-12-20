import React from 'react';
import { View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from 'src/hooks/useAuth';
import { theme } from 'src/utils/theme';
import {
  Container,
  HeaderContent,
  PageTitle,
  MainContent,
  ProfileButton,
  ButttonText
} from './styles';
IconMaterial.loadFont();

export default function Profile() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <IconMaterial
          name="account-circle"
          size={170}
          color={theme.color.gray_dark}
        />
        <PageTitle>
          {user.name}
        </PageTitle>
        <PageTitle>
          {user.email}
        </PageTitle>
      </HeaderContent>
      <MainContent>
        <View style={{ width: "100%", height: 1, backgroundColor: "#ddd", marginTop: 30 }} />
        <ProfileButton onPress={signOut}>
          <ButttonText>
            Sair
          </ButttonText>
          <IconMaterial
            name="logout"
            size={24}
            color={theme.color.blue_dark}
          />
        </ProfileButton>
      </MainContent>
    </Container>
  );
}