import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'

export default function SignIn() {
 const navigation = useNavigation()

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const{ signIn } = useContext(AuthContext)
 
 function handleLogin(){
    signIn(email, password)
 }

  return (
  <Background>
    <Container>
      <Logo source={require('../../assets/Logo.gif')}/>
      <AreaInput>
        <Input 
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={ (text) => setEmail(text) }
        />
      </AreaInput>

      <AreaInput>
        <Input 
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        onChangeText={ (text) => setPassword(text) }
        secureTextEntry={true}
        />
      </AreaInput>

      <SubmitButton onPress={handleLogin}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>
      <Link onPress={() => navigation.navigate('SignUp')}>
        <LinkText>Cadastrar</LinkText>
      </Link>
    </Container>
  </Background>   
  )
}