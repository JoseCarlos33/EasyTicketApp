import React, { useEffect, useState } from 'react';
import { allEvents } from 'src/mocks/allEvents';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Container,
  Header,
  IconButton,
  Description,
  MainContent,
  ImageContent,
  CardImage,
  InfoContent,
  InfoTitle,
  PageTitle,
  DayTimeDescription,
  TicketText,
} from './styles';
import { theme } from 'src/utils/theme';
import { Image, StatusBar, View } from 'react-native';
import DefaultButton from 'src/components/atoms/DefaultButton';
import { RFValue } from 'react-native-responsive-fontsize';

IconMaterial.loadFont()

export default function EventDetail({ route, navigation }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const eventId = route.params.eventId;
  const currentEvent = allEvents.filter(event => event.id === eventId)?.[0];
  const [selectedTickets, setSelectedTickets] = useState<any>([]);

  const toogleFavorite = () => setIsFavorite(!isFavorite);
  const totalTicketsValue = () => {
    const ticketsValues = selectedTickets?.map()
  }
  return (
    <Container>
      <Header>
        <IconButton onPress={() => navigation.goBack()}>
          <IconMaterial name="arrow-back" size={27} />
        </IconButton>
        <PageTitle>
          Detalhe do evento
        </PageTitle>
        <IconButton onPress={toogleFavorite}>
          {
            isFavorite ? (
              <IconMaterial name="favorite" color={'red'} size={27} />
            ) : (
              <IconMaterial name="favorite-border" color={theme.color.gray_dark} size={27} />
            )
          }
        </IconButton>
      </Header>
      <MainContent>
        <ImageContent>
          <CardImage source={currentEvent.img} resizeMode="stretch" />
        </ImageContent>

        <InfoContent>
          <InfoTitle>
            {currentEvent.title}
          </InfoTitle>
          <Description>
            {currentEvent.description}
          </Description>
          <View style={{ flexDirection: "row", marginTop: 21, alignItems: 'center' }}>
            <IconMaterial name="event-note" size={27} color={theme.color.gray_dark} />
            <View style={{ marginLeft: 10 }}>
              <DayTimeDescription>
                {currentEvent.day}
              </DayTimeDescription>
              <DayTimeDescription style={{ marginTop: 5 }}>
                {currentEvent.hour}
              </DayTimeDescription>
            </View>
          </View>
        </InfoContent>

        <InfoContent style={{ marginTop: 10, paddingBottom: 28, marginBottom: hp(13) }}>
          <InfoTitle>
            Ingressos a venda
          </InfoTitle>
          {
            currentEvent.ticket?.map((ticket, index) => {
              const addTicket = () => {
                setSelectedTickets((oldTickets: any) => [...oldTickets, ticket])
              }

              const removeTicket = (ticket: any) => {
                const differentTickets = selectedTickets?.filter((item: any) => item !== ticket)
                let similarTickets = selectedTickets?.filter((item: any) => item === ticket)
                similarTickets.pop();

                const newSelectedTicketsArray = [...differentTickets, ...similarTickets]
                setSelectedTickets(newSelectedTicketsArray)
              }

              return (
                <View style={{
                  flexDirection: "row",
                  marginTop: 21,
                  alignItems: 'center',
                  justifyContent: "space-between",
                }}>
                  <View style={{ flexDirection: "column", }}>
                    <TicketText>
                      {ticket?.title}
                    </TicketText>
                    <TicketText style={{ marginTop: 5, color: theme.color.gray_dark, }}>
                      {ticket?.value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </TicketText>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <IconButton
                      style={{
                        backgroundColor: theme.color.gray_medium,
                        borderRadius: 40,
                        padding: 4,
                        marginRight: 12
                      }}
                      onPress={() => removeTicket(ticket)}
                    >
                      <IconMaterial name="remove" size={21} color={theme.color.white} />
                    </IconButton>
                    <TicketText>
                      {selectedTickets?.filter((selectedTicket: any) => selectedTicket.id === ticket.id)?.length ?? 0}
                    </TicketText>
                    <IconButton
                      style={{
                        backgroundColor: theme.color.green,
                        borderRadius: 40,
                        padding: 4,
                        marginLeft: 12
                      }}
                      onPress={addTicket}
                    >
                      <IconMaterial name="add" size={21} color={theme.color.white} />
                    </IconButton>
                  </View>
                </View>
              )
            }
            )
          }
        </InfoContent>
      </MainContent>
      <InfoContent
        style={{
          position: "absolute",
          paddingBottom: hp(7),
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          
        }}
      >
        {
          selectedTickets?.length > 0 &&
          <View 
            style={{
              marginRight: 10, 
              paddingHorizontal: 0, 
              alignItems: "flex-start", 
              marginLeft: 10,
              justifyContent: "space-between"
            }}
          >
            <TicketText style={{ fontSize: RFValue(18)}}>
              Total:
            </TicketText>
            <TicketText style={{ fontSize: RFValue(15), color: theme.color.gray_medium}}>
              {
                selectedTickets
                  ?.reduce((total, ticket) => total + ticket.value, 0)
                  ?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })   
              }
            </TicketText>
          </View>
        }
        <View style={{minWidth: selectedTickets.length > 0 ? "66%" : "100%", paddingHorizontal: 10}}>
          <DefaultButton onPress={() => { }} title="Adicionar ao carrinho" />
        </View>
      </InfoContent>
    </Container>
  );
}
