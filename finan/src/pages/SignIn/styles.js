import styled from 'styled-components'

export const Background = styled.View`
flex: 1;
background-color: #292929;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
width: 200px;
height: 200px;
margin-top: 15px;
margin-bottom: 15px;
padding: 15px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: #C4C4C4;
width: 80%;
height: 56px;
font-size: 18px;
color: #000000;
margin-bottom: 15px;
padding: 10px;
border-radius: 5px;
`; 

export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #FFFD42;
width: 80%;
height: 56px;
border-radius: 5px;
margin-top: 10px;
`;

export const SubmitText = styled.Text`
font-size: 20px;
color: #24ECFF;
`;

export const Link = styled.TouchableOpacity`
margin-top: 5px;
margin-bottom: 9px;
`;

export const LinkText = styled.Text`
font-size: 18px;
color: #FFFD42;
`;

