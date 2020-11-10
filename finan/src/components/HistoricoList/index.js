import React from 'react';

import { Container, Lista, IconView, TipoText, Complemento, Imagem } from './styles'

export default function HistoricoList({ data }) {
    if (data.tipo === 'moeda'){
        return (
            <Container>
                <Lista>
                    <IconView estilo={data.estilo}>
                        <Imagem source={require('../../assets/Coin.png')} />
                        <TipoText>{data.estilo}</TipoText>
                    </IconView> 
                </Lista>
                <Complemento>{data.valo}</Complemento>
            </Container>
        );   
    }
    if (data.tipo === 'estrela'){
        return (
            <Container>
                <Lista>
                    <IconView estilo={data.estilo}>
                        <Imagem source={require('../../assets/Star.png')} />
                        <TipoText>{data.estilo}</TipoText>
                    </IconView> 
                </Lista>
                <Complemento>{data.valo}</Complemento>
            </Container>
        );   
    }
    if (data.tipo === 'flor'){
        return (
            <Container>
                <Lista>
                    <IconView estilo={data.estilo}>
                        <Imagem source={require('../../assets/Flower.png')} />
                        <TipoText>{data.estilo}</TipoText>
                    </IconView> 
                </Lista>
                <Complemento>{data.valo}</Complemento>
            </Container>
        );   
    }
        return (
            <Container>
                <Lista>
                    <IconView estilo={data.estilo}>
                        <Imagem source={require('../../assets/Ghost.png')} />
                        <TipoText>{data.estilo}</TipoText>
                    </IconView> 
                </Lista>
                <Complemento>{data.valo}</Complemento>
            </Container>
        );    
}