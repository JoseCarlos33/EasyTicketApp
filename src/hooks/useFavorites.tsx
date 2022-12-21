import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

interface FavoritesProviderProps {
  children: ReactNode;
}

interface IFavoritesContextData {
  favorites: Array<number>;
  handleAddFavorites: (productId: number) => void;
  handleRemoveFavorites: (productId: number) => void;
}

const FavoriteContext = createContext({} as IFavoritesContextData);

function FavoriteProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Array<number>>([]);
  const favoritesStorageKey = '@easyTicket:favorites';

  function handleAddFavorites(productId: number) {
    console.log("CHEGOU", productId)
    const favoritesWithoutRepetition = new Set([...favorites, productId])
    const desestructuredFavoritesValues = [...favoritesWithoutRepetition.values()]
    setFavorites(desestructuredFavoritesValues)
  }

  function handleRemoveFavorites(productId: number) {
    const favoritesWithDiferentId = favorites.filter( currentId => currentId !== productId);
    setFavorites(favoritesWithDiferentId)
  }

  useEffect(() => {
    console.log("Favorites", favorites);
  }, [favorites])

  useEffect(() => {
    async function changeStorageData(): Promise<void> {
      const favoritesFormatted = JSON.stringify(favorites);
      await AsyncStorage.setItem(favoritesStorageKey, favoritesFormatted);
    }

    changeStorageData();
  }, [favorites])


  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const favorites = await AsyncStorage.getItem(favoritesStorageKey) ?? "{}";
      const favoritesFormatted = JSON.parse(favorites);

      if (favorites) {
        setFavorites(favoritesFormatted);
      }
      console.log("favorites STORAGE",favoritesFormatted);
    }

    loadStorageData();
  }, [])

  return (
    <FavoriteContext.Provider value={{
      favorites,
      handleAddFavorites,
      handleRemoveFavorites
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}



function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}


export { FavoriteProvider, useFavorite }
