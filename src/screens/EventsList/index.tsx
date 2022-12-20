import React, { useCallback, useEffect, useRef } from 'react';
import { StatusBar, View } from 'react-native';
import {
  Container,
  MainContent,
  ListContent
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import ControlledSearchInput from 'src/components/atoms/SearchInput';
import { allEvents } from 'src/mocks/allEvents';
import DefaultEventCard from 'src/components/molecules/DefaultEventCard';
import { useFocusEffect } from '@react-navigation/native';

function EventsList({ route, navigation }: any) {
  const formHandler = useForm();
  const searchInputRef = useRef<any>(null);
  const isSearchInputFocused = route.params.isSearchInputFocused;
  const { watch } = formHandler;
  const searchInputValue = watch('searchEvents')?.toString().toLowerCase();

  const listFilteredWithPerformance = useCallback(() =>
    allEvents.filter(event => !!searchInputValue ? event.title.toLowerCase().includes(searchInputValue) : true),
  [allEvents, searchInputValue])()

  const clearParams = () => {
    navigation.setParams({ isSearchInputFocused: false })
  }

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
            inputRef={searchInputRef}
            name="searchEvents"
            placeholder="Digite o nome do evento aqui"
            onFocus={clearParams}
            isFocused={isSearchInputFocused}
          />
          <ListContent>
            {
              listFilteredWithPerformance?.map(info =>
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
              )
            }
          </ListContent>
        </MainContent>
      </Container>
    </FormProvider>

  );
}

export default EventsList;