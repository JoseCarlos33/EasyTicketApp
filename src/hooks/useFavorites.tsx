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
