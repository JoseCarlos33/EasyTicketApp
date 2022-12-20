import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import HeaderNavigation from 'src/components/atoms/HeaderNavigation';
import CartTicketCard from 'src/components/molecules/CartTicketCard';
import { useCart } from 'src/hooks/useCart';
import EmptyCart from '../EmptyCart';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import MasterCardLogo from 'src/assets/images/mastercard.png';

import {
  Container,
  InfoContent,
  ContentTitle,
  Content,
  Subtitle
} from './styles';
import { allEvents } from 'src/mocks/allEvents';
import { theme } from 'src/utils/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import DefaultButton from 'src/components/atoms/DefaultButton';
IconMaterial.loadFont();

function Cart({ navigation }: any) {
  
  const { cart, totalTicketsValue } = useCart();

  
  return (
    <Container>
      {cart.length > 0 &&
        <HeaderNavigation navigation={navigation} title="Carrinho de compras" />
      }
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
        <Content>
          {
            cart.length > 0 ? (
              <>
                <InfoContent>
                  <ContentTitle>
                    Seus Ingressos
                  </ContentTitle>
                  {cart.map((cartItem, index) => {
                    const eventData = allEvents.filter(event => event.id === cartItem.productId)?.[0];

                    return (
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
                <InfoContent style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Subtitle>
                    Formas de pagamento
                  </Subtitle>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        height: 17,
                        width: 32,
                        marginRight: 6
                      }}
                    >
                      <Image
                        source={MasterCardLogo}
                        resizeMode="contain"
                        style={{
                          height: "100%",
                          width: "100%"
                        }}
                      />
                    </View>
                    <Subtitle>6057</Subtitle>
                    <IconMaterial name="chevron-right" size={27} color={theme.color.blue_dark} />
                  </View>
                </InfoContent>
                <InfoContent style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Subtitle style={{ fontSize: RFValue(19), fontFamily: "Inter-Semibold" }}>
                    Total
                  </Subtitle>
                  <Subtitle style={{ fontSize: RFValue(18), fontFamily: "Inter-Regular" }}>
                    {totalTicketsValue?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </Subtitle>
                </InfoContent>
                <View style={{ marginTop: 10 }}>
                  <DefaultButton
                    title="Finalizar compra"
                    onPress={() => { }}
                  />
                </View>
              </>
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