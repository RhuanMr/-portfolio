import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import {Container, ButtonMenu, Texto, ButtonPesq} from './styles'

export default function Header() {
    const navigation = useNavigation()

    return (
        <Container>
            <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
                <Icon name="menu" color="#FFF" size={30} />                
            </ButtonMenu>
            <Texto>Friend's Bank</Texto>
            <ButtonPesq onPress={ () => navigation.navigate('Search')}>
                <Icon name="search" color="#FFF" size={30} />
            </ButtonPesq>
        </Container>
    );
}