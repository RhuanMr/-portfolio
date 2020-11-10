import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/contexts/auth'
import firebase from './src/services/firebaseConnection'
import Routes from './src/routes'

export default function Task() {
 return (
   <NavigationContainer>
     <AuthProvider>
        <StatusBar backgroundColor='#EEFAA5' barStyle="dark-content" />
        <Routes />
     </AuthProvider> 
   </NavigationContainer>
  );
}