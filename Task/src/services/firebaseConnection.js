import * as firebase from 'firebase'

let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);      
  }

  export default firebase
  