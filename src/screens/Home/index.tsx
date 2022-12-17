import React from 'react';
import { StatusBar } from 'react-native';
import { 
  Container,
  MainContent
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import ControlledSearchInput from 'src/components/atoms/SearchInput';
import WeekNewEvents from 'src/components/molecules/WeekNewEvents';
import TopSellEvents from 'src/components/molecules/TopSellEvents';

function Home() {
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
          <WeekNewEvents />
          <TopSellEvents />
        </MainContent>
      </Container>
    </FormProvider>

  );
}

export default Home;