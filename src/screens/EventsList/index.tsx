import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  MainContent,
  ListContent
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import ControlledSearchInput from 'src/components/atoms/SearchInput';
import WeekNewEvents from 'src/components/molecules/WeekNewEvents';
import TopSellEvents from 'src/components/molecules/TopSellEvents';
import { allEvents } from 'src/mocks/allEvents';
import DefaultEventCard from 'src/components/molecules/DefaultEventCard';

function EventsList() {
  const formHandler = useForm();

  return (
    <FormProvider {...formHandler}>
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <MainContent>
          <ControlledSearchInput
            name="searchEvents"
            placeholder="Digite o nome do evento aqui"
          />
          <ListContent>
            {
              allEvents?.map(info => 
                <DefaultEventCard
                  id={info.id}
                  title={info.title}
                  image={info.img}
                  day={info.day}
                  type={info.type}
                  onPress={() => { }}
                />
              )
            }
          </ListContent>
        </MainContent>
      </Container>
    </FormProvider>

  );
}

export default EventsList;