import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { paperTheme, theme } from './utils/theme';
import { Routes } from './routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  MD2DarkTheme,
  MD3DarkTheme,
  MD3Theme,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { AuthProvider } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
import { FavoriteProvider } from './hooks/useFavorites';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <PaperProvider theme={paperTheme}>
          <AuthProvider>
            <CartProvider>
              <FavoriteProvider>
                <Routes />
              </FavoriteProvider>
            </CartProvider>
          </AuthProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
