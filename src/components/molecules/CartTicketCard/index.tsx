import React, { useEffect, useState } from 'react';
import { Alert, ImageRequireSource, ImageURISource, TouchableOpacity, View } from 'react-native';
import { theme } from 'src/utils/theme';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
IconMaterial.loadFont();
import {
  Container,
  Title,
  InfoContent,
  Subtitle,
} from './styles';
import { useCart } from 'src/hooks/useCart';

interface NewWeekEventCardProps {
  title: string;
  image: ImageURISource | ImageURISource[] | ImageRequireSource;
  onPress: () => void;
  id?: number;
  tickets?: any;
}

interface TicketProps {
  id: number;
  value: number;
  title: string;
  quantity?: number;
}

export default function CartTicketCard({ image, title, onPress, tickets, id }: NewWeekEventCardProps) {
  const [currentTickets, setCurrentTickets] = useState<Array<TicketProps>>([]);
  const { deleteTicket } = useCart();

  const addTickets = (newTickets: any) => {
    const ticketsFormatteds = newTickets
      ?.map((ticket: any) => {
        const quantityOfRepetitions = tickets.filter((item: any) => item.id === ticket.id)?.length
        return { ...ticket, value: ticket.value * quantityOfRepetitions, quantity: quantityOfRepetitions }
      })

    setCurrentTickets(ticketsFormatteds)
  }
  useEffect(() => {
    const ticketsWithoutRepetition = new Set(tickets);
    const ticketsWithNewValuesAndQuantity = [...ticketsWithoutRepetition.values()]
    addTickets(ticketsWithNewValuesAndQuantity);
  }, [tickets]);
  console.log("ID HERE", id)

  return (
    <Container key={id} onPress={onPress}>
      <InfoContent>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Title>
            {title}
          </Title>
          <TouchableOpacity
            onPress={() => Alert.alert(
              'Excluir Ingresso',
              'Tem certeza que deseja excluir o ingresso do carrinho?',
              [
                {
                  text: "Cancelar",
                  onPress: () => {},
                  style: "cancel"
                },
                {
                  text: "OK",
                  onPress: () => !!id ? deleteTicket(id) : {}
                }
              ]
            )}
            style={{
              padding: 6
            }}
          >
            <IconMaterial
              name="delete-outline"
              color={theme.color.blue_dark}
              size={27}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          {
            currentTickets.length > 0
              ? currentTickets.map((item: any, index: any) => {

                return (
                  <View key={index} style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Subtitle>
                      {item.title}{"  "}{item.quantity ?? ""}x
                    </Subtitle>
                    <Subtitle>
                      {item?.value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Subtitle>
                  </View>
                )
              })
              : <></>
          }
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#ddd",
            marginTop: 10
          }}
        />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end", marginTop: 10 }}>
          <Subtitle>
            Subtotal: {" "}{
              currentTickets
                ?.reduce((total: number, ticket: TicketProps) => total + ticket.value, 0)
                ?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }
            {/* ?.value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) */}
          </Subtitle>
        </View>
      </InfoContent>

    </Container>
  );
}