import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'

import{Container, Nome, NewLink, Newtext, Logout, LogoutText}from './styles'

export default function Profile() {
 const navigation = useNavigation()
 const { user, signOut } = useContext(AuthContext)
 
  return ( 
    <Container>
      <Header />
      <Nome>
        {user && user.nick}
      </Nome>
      <NewLink onPress={() => navigation.navigate('New')} >
        <Newtext>Registrar transferencia</Newtext>
      </NewLink>
      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}