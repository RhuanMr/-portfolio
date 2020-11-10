import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import Header from '../../components/Header'
import AddFriend from '../../components/AddFriend'
import { AuthContext } from '../../contexts/auth'

import { Background, Container, AreaInput, Input, ButtonPesq } from './styles';

export default function Search() {
  const [nick, setNick] = useState('')

  const { search, friend, user } = useContext(AuthContext)
 
  function handleSearch(){
    search(nick)
  }

  return (
  <Background>
    <Header />
    <Container>
      <AreaInput>
        <Input 
          placeholder="Amigo"
          autoCorrect={false}
          autoCapitalize="none"
          value={nick}
          onChangeText={ (text) => setNick(text) }
        />
        <ButtonPesq onPress={handleSearch}>
          <Icon name="search" color="#FFF" size={30} />
        </ButtonPesq>
      </AreaInput>
      <AddFriend friend={friend} user={user} />
    </Container>
  </Background>
  );
}