import * as firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyD6ncuxW_JgK3f3siAsILxKT4N6LJHkQbA",
    authDomain: "banco-258ba.firebaseapp.com",
    databaseURL: "https://banco-258ba.firebaseio.com",
    projectId: "banco-258ba",
    storageBucket: "banco-258ba.appspot.com",
    messagingSenderId: "305174353721",
    appId: "1:305174353721:web:4b909616940a11769cfae8",
    measurementId: "G-Z07L0TZXSX"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);    
  }
  
  export default firebase
