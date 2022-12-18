import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { useAuth } from 'src/hooks/useAuth';
import { AppRoutes } from './app.routes';

export function Routes(){
  const { signed } = useAuth();

  return(
    <NavigationContainer>
      {signed ? <AuthRoutes/> : <AppRoutes/>}
    </NavigationContainer>
  );
}