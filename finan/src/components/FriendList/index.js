import React from 'react';

import { Container, Lista, IconView, Imagem, TipoText, Complemento } from './styles'

export default function FriendList({ data }) {
    return (
        <Container>
            <Lista>
                <IconView>
                    <Imagem source={require('../../assets/Friend.png')} />
                    <TipoText>novo</TipoText>
                </IconView> 
            </Lista>
            <Complemento>{data.nome}</Complemento>
        </Container>
    );
}