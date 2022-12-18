import React from 'react';

import {
  Container,
  Title,
  ListContent,
  BottomTitle,
  BottomContent
} from './styles';
import DefaultEventCard from '../DefaultEventCard';
import { allEvents } from 'src/mocks/allEvents';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function TopSellEvents() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Container>
      <Title>
        Eventos mais vendidos
      </Title>
      <ListContent>
        {
          allEvents?.map(info => info.isTopSell ? (
            <View key={info.id}>
              <DefaultEventCard
                id={info.id}
                title={info.title}
                image={info.img}
                day={info.day}
                type={info.type}
                onPress={() =>navigation.navigate("EventDetail", {
                  eventId: info.id
                })}
              />
            </View>
          ) : (<View key={info.id}></View>))
        }
      </ListContent>
      <BottomContent>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabScreens', {
            screen: 'Explore',
          })}
          style={{
            padding: 21,
          }}
        >
          <BottomTitle>
            Ver mais
          </BottomTitle>
        </TouchableOpacity>
      </BottomContent>
    </Container>
  );
}

export default TopSellEvents;