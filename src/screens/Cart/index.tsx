import React from 'react';
import { ScrollView, View } from 'react-native';
import HeaderNavigation from 'src/components/atoms/HeaderNavigation';
import CartTicketCard from 'src/components/molecules/CartTicketCard';
import { useCart } from 'src/hooks/useCart';
import EmptyCart from '../EmptyCart';
import {
  Container,
  InfoContent,
  ContentTitle,
  Content
} from './styles';
import { allEvents } from 'src/mocks/allEvents';

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
                {cart.map((cartItem, index) => {
                  const eventData = allEvents.filter( event => event.id === cartItem.productId)?.[0];
             
                  return(
                    <View key={index}>
                      <CartTicketCard
                        image={eventData?.img}
                        title={eventData?.title}
                        onPress={() => navigation.navigate("EventDetail", {
                          eventId: cartItem.productId
                        })} 
                        tickets={cartItem.tickets}
                      />
                    </View>
                  )
                }
                )}
                
              </InfoContent>
            ) : (
              <EmptyCart navigation={navigation} />
            )
          }
        </Content>
      </ScrollView>
    </Container>
  );
}

export default Cart;