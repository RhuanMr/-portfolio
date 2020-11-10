import React, {useState, useContext, useEffect} from 'react';

import firebase from '../../services/firebaseConnection'
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'

import { Background, 
         Container,
         Nome,
         Amigos, 
         AreaValores, 
         Elemento,
         Imagem, 
         Texto} from './styles'

export default function Home() {
    const[estrelas, setEstrelas] = useState(0)
    const[moedas, setMoedas] = useState(0)
    const[flores, setFlores] = useState(0)
    const[fantasmas, setFantasmas] = useState(0)
    
    const { user } = useContext(AuthContext)
    const uid = user && user.uid

    useEffect(()=>{
        async function loadList(){
            await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
                setEstrelas(snapshot.val().estrelas)
                setMoedas(snapshot.val().moedas)
                setFlores(snapshot.val().flores)
                setFantasmas(snapshot.val().fantasmas)
            })
        }
        loadList()
    }, [])
 
    return (
        <Background>
            <Header />
            <Container>
                <Nome>{user && user.nome}</Nome>
                <Amigos>Amigos: 0</Amigos>
            </Container>
                <AreaValores>
                    <Elemento>
                        <Imagem source={require('../../assets/Star.png')} />
                        <Texto style={{color: '#FFFD42' }}>Estrelas: {estrelas}</Texto>
                    </Elemento>
                    <Elemento>
                        <Imagem source={require('../../assets/Coin.png')} />
                        <Texto style={{color: '#FFFD42' }}>Moedas: {moedas}</Texto>
                    </Elemento>
                    <Elemento>
                        <Imagem source={require('../../assets/Flower.png')} />
                        <Texto style={{color: '#FF7803' }}>Flores: {flores}</Texto>
                    </Elemento>
                    <Elemento>
                        <Imagem source={require('../../assets/Ghost.png')} />
                        <Texto style={{color: '#FF0000' }}>Fantasmas:  {fantasmas}</Texto>
                    </Elemento>
                </AreaValores>    
        </Background>
    );
}