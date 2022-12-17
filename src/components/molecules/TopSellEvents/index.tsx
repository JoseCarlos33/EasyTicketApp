import React from 'react';
import { newWeekEvents } from 'src/mocks/newWeekEvents';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Container,
  Title,
  ListContent,
  BottomTitle,
  BottomContent
} from './styles';
import DefaultEventCard from '../DefaultEventCard';
import { allEvents } from 'src/mocks/allEvents';
import { TouchableOpacity } from 'react-native';

function TopSellEvents() {
  return (
    <Container>
      <Title>
        Eventos mais vendidos
      </Title>
      <ListContent>
        {
          allEvents?.map(info => info.isTopSell ? (
            <DefaultEventCard
              id={info.id}
              title={info.title}
              image={info.img}
              day={info.day}
              type={info.type}
              onPress={() => { }}
            />
          ) : (<></>))
        }
      </ListContent>
      <BottomContent>
        <TouchableOpacity
          onPress={() => {}}
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