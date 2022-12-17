import React from 'react';
import { newWeekEvents } from 'src/mocks/newWeekEvents';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Container,
  Title,
  CardsContent,
  ListContent
} from './styles';
import NewWeekEventCard from '@components/atoms/NewWeekEventCard';
import { View } from 'react-native';

function WeekNewEvents() {
  return (
    <Container>
      <Title>
        Novidades da semana no EasyTicket
      </Title>
      <CardsContent>
        {
          newWeekEvents?.map(info =>
            <NewWeekEventCard image={info.img} id={info.id} onPress={() => { }} />)
        }
      </CardsContent>
    </Container>
  );
}

export default WeekNewEvents;