import React, { createContext, useState, useEffect } from 'react'
import firebase from '../services/firebaseConnection'
import { set } from 'react-native-reanimated'
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [friend, setFriend] = useState(null)
    const [loading, setLoading] = useState(true)
    
    //3.1
    useEffect(()=>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        loadStorage()
    }, [])

    //função teste para pesquisa (aparentemente deu certo)
    async function search(nick){
        await firebase.database().ref('nicks').child(nick).once('value')
        .then((snapshot) => {
            let data = {
                nick: nick,
                uid: snapshot.val().uid
            }
            setFriend(data)
        })
        .catch((error)=>{
            alert(error.code)
        })
    }
    
    //func para add um amigo no banco
    async function addFriend(friend, user){
        await firebase.database().ref('users/'+user.uid).child('amigos').child(friend.uid).set({
            nick: friend.nick,
            uid: friend.uid
        })
    }

    //func para add registro
    async function addRec(friend, user, valor, tipo){
        let keyFriend = await firebase.database().ref('users/'+friend.uid).child('registros').push().key;
        let keyUser = await firebase.database().ref('users/'+user.uid).child('registros').push().key;
        await firebase.database().ref('users/'+user.uid).child('registros').child(keyUser).set({
            tipo: tipo,
            valo: parseFloat(valor),
            estilo: "despesa"
        })
        await firebase.database().ref('users/'+friend.uid).child('registros').child(keyFriend).set({
            tipo: tipo,
            valor: parseFloat(valor),
            estilo: "receita"
        })

        //atualizar saldos
        await firebase.database().ref('users').child(user.uid).once('value').then((snapshot)=>{
            let estrelas = parseFloat(snapshot.val().estrelas)
            let moedas = parseFloat(snapshot.val().moedas)
            let flores = parseFloat(snapshot.val().flores)
            let fantasmas = parseFloat(snapshot.val().fantasmas)
            if(tipo === 'estrela')
            {
                estrelas -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('estrelas').set(estrelas)
            }
            if(tipo === 'moeda')
            {
                moedas -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('moedas').set(moedas)
            }
            if(tipo === 'flor')
            {
                flores -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('flores').set(flores)
            }
            if(tipo === 'fantasma')
            {
                fantasmas -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('fantasmas').set(fantasmas)
            }
            
        })
        await firebase.database().ref('users').child(user.uid).once('value').then((snapshot)=>{
            let estrelas = parseFloat(snapshot.val().estrelas)
            let moedas = parseFloat(snapshot.val().moedas)
            let flores = parseFloat(snapshot.val().flores)
            let fantasmas = parseFloat(snapshot.val().fantasmas)
            if(tipo === 'estrela')
            {
                estrelas -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('estrelas').set(estrelas)
            }
            if(tipo === 'moeda')
            {
                moedas -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('moedas').set(moedas)
            }
            if(tipo === 'flor')
            {
                flores -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('flores').set(flores)
            }
            if(tipo === 'fantasma')
            {
                fantasmas -= parseFloat(valor)
                firebase.database().ref('users').child(user.uid).child('fantasmas').set(fantasmas)
            }
            
        })
        await firebase.database().ref('users').child(friend.uid).once('value').then((snapshot)=>{
            let estrelas = parseFloat(snapshot.val().estrelas)
            let moedas = parseFloat(snapshot.val().moedas)
            let flores = parseFloat(snapshot.val().flores)
            let fantasmas = parseFloat(snapshot.val().fantasmas)
            if(tipo === 'estrela')
            {
                estrelas += parseFloat(valor)
                firebase.database().ref('users').child(friend.uid).child('estrelas').set(estrelas)
            }
            if(tipo === 'moeda')
            {
                moedas += parseFloat(valor)
                firebase.database().ref('users').child(friend.uid).child('moedas').set(moedas)
            }
            if(tipo === 'flor')
            {
                flores += parseFloat(valor)
                firebase.database().ref('users').child(friend.uid).child('flores').set(flores)
            }
            if(tipo === 'fantasma')
            {
                fantasmas += parseFloat(valor)
                firebase.database().ref('users').child(friend.uid).child('fantasmas').set(fantasmas)
            }
            
        })
            
    }
    
    //2
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
               let data = {
                uid: uid,
                nome: snapshot.val().nome,
                nick: snapshot.val().nick,
                email: value.user.email
               }
               setUser(data)
               storageUser(data) 
            })
        })
        .catch((error)=>{
            alert(error.code)
        })
    }

    //1
    async function signUp(email, password, nome, nick){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid
            await firebase.database().ref('users').child(uid).set({
                contAmigos: 0,
                estrelas: 0,
                moedas: 0,
                flores: 0,
                fantasmas: 0,
                nick: nick,
                nome: nome
            })
            await firebase.database().ref('nicks').child(nick).set({
                nick: nick,
                uid: uid
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    nick: nick,
                    email: value.user.email
                }
                setUser(data)
                storageUser(data)
            })
        })
        .catch((error)=>{
            alert(error.code)
        })
    }

    //3 JSON.stringfy transformar em string um objeto
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    //4
    async function signOut(){
        await firebase.auth().signOut()
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, friend, loading, addFriend, addRec, search, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
