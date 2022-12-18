import React, { useEffect, useRef } from 'react';
import { Keyboard, StatusBar, View } from 'react-native';
import {
  Container,
  MainContent
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import ControlledSearchInput from 'src/components/atoms/SearchInput';
import WeekNewEvents from 'src/components/molecules/WeekNewEvents';
import TopSellEvents from 'src/components/molecules/TopSellEvents';

function Home({navigation}: any) {
  const formHandler = useForm();
  const searchInputRef = useRef<any>();
  
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
            name="goToEvents"
            placeholder="Digite o nome do evento aqui"
            onFocus={() => {
              Keyboard.dismiss();
              setTimeout(() => {
                navigation.navigate('TabScreens', {
                  screen: 'Explore',
                  params: {
                    isSearchInputFocused: true
                  }
                })
              }, 10)
            }}
          />
          <WeekNewEvents />
          <TopSellEvents />
        </MainContent>
      </Container>
    </FormProvider>

  );
}

export default Home;