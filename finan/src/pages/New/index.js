import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import NewPicker from '../../components/NewPicker'
import { AuthContext } from '../../contexts/auth'

import { Background, Input, SubmitButton, SubmitText } from './styles'

export default function New() {
 const navigation = useNavigation()
 
 const [valor, setValor] = useState('')
 const [amigo, setAmigo] = useState('')
 const [tipo, setTipo] = useState(null)
 
 const { search, friend, user, addRec } = useContext(AuthContext)
 
  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null ){
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
          text: 'cancelar',
          style: 'cancel' 
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd() 
        }
      ]
    )
  }

  function handleAdd(){
    search(amigo)
    addRec(friend, user, valor, tipo)
    Keyboard.dismiss()
    setValor('')
    setAmigo('')
    navigation.navigate('Home')
  }

  return ( 
  <Background>
    <Header />
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Input 
      placeholder="Valor desejado"
      keyboardType="numeric"
      returnKeyType="next"
      onSubmitEditing={ () => Keyboard.dismiss() }
      value={valor}
      onChangeText={ (text) => setValor(text) }
      />
      <Input 
      placeholder="Para quem?"
      onSubmitEditing={ () => Keyboard.dismiss() }
      value={amigo}
      onChangeText={ (text) => setAmigo(text) }
      />
      <NewPicker onChange={setTipo} />
      <SubmitButton onPress={handleSubmit} >
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>
    </SafeAreaView>
  </Background>
  );
}