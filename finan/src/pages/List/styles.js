import styled from 'styled-components'

export const Background = styled.View`
flex: 1;
background-color: #292929;
`;

export const Container = styled.View`
margin-left: 15px;
margin-bottom: 25px;
`;

export const Texto = styled.Text`
font-size: 19px;
color: #FFF;
font-style: italic;
`;

export const Saldo = styled.Text`
margin-top: 5px;
font-size: 30px;
color: #00B94A;
font-weight: bold;
`; 

export const Title = styled.Text`
margin-left: 5px;
color: #00B94A;
margin-bottom: 10px;
`;

export const Lista = styled.FlatList.attrs({
    marginHorizontal: 15
})`
padding-top: 15px;
background-color: #2DCB3D;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 8px;
margin-right: 8px;
`;