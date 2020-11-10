import styled from 'styled-components/native'

export const Container = styled.View`
justify-content: flex-start;
align-items: flex-start;
flex-direction: row;
margin-top: 30px;
margin-left: 15px;
width: 100%;
height: 50px;
border-bottom-width: 1px;
border-bottom-color: #FFFD42; 
`;
export const ButtonMenu = styled.TouchableWithoutFeedback`
justify-content: center;
align-items: center;
`;
export const Texto = styled.Text`
font-style: italic;
padding-left: 100px;
font-size: 24px;
color: #FFFD42;
`;

export const ButtonPesq = styled.TouchableOpacity`
padding-left: 75px;
justify-content: center;
align-items: center;
`;