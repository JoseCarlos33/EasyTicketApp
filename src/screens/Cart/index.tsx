import React from 'react';
import { ScrollView } from 'react-native';
import HeaderNavigation from 'src/components/atoms/HeaderNavigation';
import { useCart } from 'src/hooks/useCart';
import EmptyCart from '../EmptyCart';
import {
  Container,
  InfoContent,
  ContentTitle,
  Content
} from './styles';

function Cart({ navigation }: any) {
  const { cart } = useCart();

  return (
    <Container>
      {cart.length > 0 &&
        <HeaderNavigation navigation={navigation} title="Carrinho de compras" />
      }
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
        <Content>
          {
            cart.length > 0 ? (
              <InfoContent>
                <ContentTitle>
                  Seus Ingressos
                </ContentTitle>
              </InfoContent>
            ) : (
              <EmptyCart navigation={navigation}/>
            )
          }
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Cart;