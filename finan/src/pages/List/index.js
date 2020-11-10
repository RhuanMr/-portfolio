import React, { useState, useContext, useEffect } from 'react';

import firebase from '../../services/firebaseConnection'
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import FriendList from '../../components/FriendList'
import ListPicker from '../../components/ListPicker'

import { Background, Container, Texto, Saldo, Title, Lista } from './styles'

export default function List() {
 const [historico, setHistorico] = useState(0)
 const [amigos, setAmigos] = useState(0)
 const [type,setType] = useState('')

 const { user, friend, search } = useContext(AuthContext)
 const uid = user && user.uid

 useEffect(()=>{
   async function loadList(){
    await firebase.database().ref('users').child(uid).child('registros').on('value', (snapshot)=>{
      setHistorico([])
      snapshot.forEach((childItem)=>{
        let list = {
          key: childItem.key,
          tipo: childItem.val().tipo,
          estilo: childItem.val().estilo,
          valo: childItem.val().valo,
        }
        setHistorico(oldArray => [...oldArray, list].reverse())
      })
    })
   }
   loadList()
 }, [])

 useEffect(()=>{
  async function loadAmigos(){
   await firebase.database().ref('users').child(uid).child('amigos').on('value', (snapshot)=>{
     setAmigos([])
     snapshot.forEach((childItem)=>{ 
      let list = {
         uid: childItem.val().uid,
         nome: childItem.val().nick,
       }
       setAmigos(oldArray => [...oldArray, list].reverse())
     })
   })
  }
  loadAmigos()
}, [])
 
  return (
   <Background>
     <Header />
     <Container>
       <Texto>Lista de Transações</Texto>
       <Saldo>1234</Saldo>
        <ListPicker onChange={setType} />
     </Container>

     <Title>Ultimas movimentações</Title>
    
     <Lista
     showsVerticalScrollIndicator={false}
     data={type === 'trocas' ? historico : amigos}
     keyExtractor={item => item.key}
     renderItem={({ item }) => (type === 'trocas' ? <HistoricoList data={item} /> : <FriendList data={item} />) }
     />
   </Background>
  );
}