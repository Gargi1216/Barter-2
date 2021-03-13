import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB38IbJLYu7snPWjEdOoRH8nnZUUnKtm90",
    authDomain: "barter-app-3524c.firebaseapp.com",
    projectId: "barter-app-3524c",
    storageBucket: "barter-app-3524c.appspot.com",
    messagingSenderId: "579576028575",
    appId: "1:579576028575:web:10221ac04a24b43d47f1aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();