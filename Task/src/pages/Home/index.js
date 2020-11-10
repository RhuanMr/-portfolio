import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import firebase from '../../services/firebaseConnection'
import TaskList from '../../../components/Task'

console.disableYellowBox=true

export default function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [key, setKey] = useState('')
  const inputRef = useRef(null)

  useEffect(()=>{
    async function loadTask(){
      await firebase.database().ref('tarefas').on('value', (snapshot)=>{
        setTasks([])
        snapshot.forEach((childItem)=>{
          let data = {
            key: childItem.key,
            nome: childItem.val().nome
          }
          setTasks(oldArray => [...oldArray, data])
        })
      })
    }
    loadTask()  
  }, [])

  async function handleAdd(){
    if(newTask !== ''){

      if(key !== ''){
        await firebase.database().ref('tarefas').child(key).update({
          nome: newTask,  
        }) 
        Keyboard.dismiss()
        setNewTask('')
        setKey('')
        return 
      }
      let tarefas = await firebase.database().ref('tarefas')
      let chave = (await tarefas.push()).key

      tarefas.child(chave).set({
        nome: newTask
      })

      Keyboard.dismiss()
      setNewTask('') 
    }    
  }

  async function handleDelete(key){
    await firebase.database().ref('tarefas').child(key).remove()
  }

  async function handleEdit(data){
    setNewTask(data.nome)
    setKey(data.key)
    inputRef.current.focus()
  }

  function cancelEdit(){
    setKey('')
    setNewTask('')
    Keyboard.dismiss()
  }
 
  return (
   <View style={styles.container}>
     {key.length > 0 && (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={cancelEdit}>
            <Icon name="x-circle" size={20} color="#FF0000" />
        </TouchableOpacity>
        <Text style={{marginLeft: 5, marginBottom: 8, color: '#FF0000'}}>Vc está editando algo</Text> 
      </View>  
     )}
     
     <View style={styles.containerTask}>
       <TextInput 
        style={styles.input}
        placeholder="O que faremos hoje?"
        underlineColorAndroid="transparent"
        onChangeText={(texto) => {setNewTask(texto)}}
        value={newTask}
        ref={inputRef}
       />
       <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
         <Text style={styles.buttonText}>+</Text>
       </TouchableOpacity>
     </View>
     <FlatList 
     data={tasks}
     keyExtractor={item => item.key}
     renderItem={({ item }) => (
       <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
     )}
     />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#EEFAA5'
  },
  containerTask: {
    flexDirection: 'row',
  },
  input:{
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    color: '#1B33EA',
    borderColor: '#EB3B3B',
    height: 40,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#6AE976',
    paddingHorizontal: 12,
    marginLeft: 5,
  },
  buttonText:{
    fontSize: 23,
    color: '#1B33EA'
  }
})