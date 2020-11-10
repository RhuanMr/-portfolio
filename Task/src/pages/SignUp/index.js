import React, {useState, useContext} from 'react';

import { AuthContext } from '../../contexts/auth'

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styles'

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useContext(AuthContext)

    function handleSignUp(){
        signUp(email, password, nome)
    }
 
    return (
        <Background>
            <Container>
                <AreaInput>
                    <Input 
                    placeholder="Nome"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={nome}
                    onChangeText={ (text) => setNome(text) }
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

                <AreaInput>
                    <Input 
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>
            
                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Finalizar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    );
}