import React, { useCallback, useEffect, useRef } from 'react';
import { StatusBar, View } from 'react-native';
import {
  Container,
  MainContent,
  ListContent,
  PageTitle
} from './styles';
import { allEvents } from 'src/mocks/allEvents';
import DefaultEventCard from 'src/components/molecules/DefaultEventCard';
import { useFavorite } from 'src/hooks/useFavorites';
import EmptyFavorites from 'src/components/organisms/EmptyFavorites';

function FavoriteList({ route, navigation }: any) {
  const { favorites } = useFavorite();

  const listWithPerformance = useCallback(() =>
    allEvents.filter( event => favorites.includes(event.id)),
    [allEvents, favorites])()

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {favorites.length > 0 ? (
        <View style={{marginTop: 21, alignItems: 'center'}}>
          <PageTitle>
            Seus favoritos
          </PageTitle>
          <MainContent>
            <ListContent>
              {
                listWithPerformance?.map(info =>
                  <View key={info.id}>
                    <DefaultEventCard
                      id={info.id}
                      title={info.title}
                      image={info.img}
                      day={info.day}
                      type={info.type}
                      onPress={() => navigation.navigate("EventDetail", {
                        eventId: info.id
                      })}
                    />
                  </View>
                )
              }
            </ListContent>
          </MainContent>
        </View>
      ) : (
        <EmptyFavorites navigation={navigation}/>
      )}
    </Container>
  );
}

export default FavoriteList;