import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { AuthContext } from '../../contexts/auth'

import { Container, ButtonAdd, AreaFriend, TextFriend } from './styles'

export default function AddFriend({ friend, user }){
    const { addFriend } = useContext(AuthContext)
    return(
        <Container>
            <ButtonAdd onPress={() => addFriend(friend, user)}>
                <Icon name="plus" color="#131313" size={20} />
            </ButtonAdd>
            <AreaFriend>
                <TextFriend>{friend && friend.nick}</TextFriend>
            </AreaFriend>
        </Container>
    )
}